import React, { useEffect } from "react";
import { IUser } from "../lib/types";
import useStore from "../store";
import { trpc } from "../utils/trpc";
import { useQueryClient } from "@tanstack/react-query";

type AuthMiddlewareProps = {
  children: React.ReactNode;
  requireAuth?: boolean;
  enableAuth?: boolean;
};

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({
  children,
  requireAuth,
  enableAuth,
}) => {
  console.log("I was called from AuthMiddleware");
  const store = useStore();
  const queryClient = useQueryClient();
  const query = trpc.refreshAccessToken.useQuery(undefined, {
    enabled: false,
    retry: 1,
    onError(error: any) {
      store.setPageLoading(false);
      document.location.href = "/login";
    },
    onSuccess(data: any) {
      store.setPageLoading(false);
      queryClient.refetchQueries(["users.me"]);
    },
  });
  const { isLoading, isFetching } = trpc.getMe.useQuery(undefined, {
    onSuccess: (data) => {
      store.setPageLoading(false);
      store.setAuthUser(data.data.user as unknown as IUser);
    },
    retry: 1,
    enabled: !!enableAuth,
    onError(error) {
      store.setPageLoading(false);
      if (error.message.includes("must be logged in")) {
        query.refetch({ throwOnError: true });
      }
    },
  });

  return <>{children}</>;
};

export default AuthMiddleware;

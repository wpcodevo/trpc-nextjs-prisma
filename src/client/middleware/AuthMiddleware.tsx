import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { IUser } from "../lib/types";
import useStore from "../store";
import { trpc } from "../utils/trpc";
import FullScreenLoader from "../components/FullScreenLoader";

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
  const { isLoading } = trpc.getMe.useQuery(undefined, {
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
      } else {
        document.location.href = "/login";
      }
    },
  });

  return <>{children}</>;
};

export default AuthMiddleware;

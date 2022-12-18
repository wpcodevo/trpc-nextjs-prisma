import React from "react";
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
  const store = useStore();
  const queryClient = useQueryClient();
  const query = trpc.refreshAccessToken.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: false,
    retry: false,
    onError(error: any) {
      store.setPageLoading(false);
      document.location.href = "/login";
    },
    onSuccess(data: any) {
      store.setPageLoading(false);
      queryClient.refetchQueries(["users.me"]);
    },
    trpc: {
      context: {
        skipBatch: true,
      },
    },
  });
  const { isLoading, isFetching } = trpc.getMe.useQuery(undefined, {
    retry: false,
    enabled: enableAuth,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: (data) => {
      store.setPageLoading(false);
      store.setAuthUser(data.data.user as unknown as IUser);
    },
    onError(error) {
      store.setPageLoading(false);
      if (error.message.includes("must be logged in")) {
        query.refetch({ throwOnError: true });
      }
    },
    trpc: {
      context: {
        skipBatch: true,
      },
    },
  });

  return <>{children}</>;
};

export default AuthMiddleware;

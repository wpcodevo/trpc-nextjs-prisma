import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { IUser } from '../lib/types';
import useStore from '../store';
import { trpc } from '../utils/trpc';

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
  const query = trpc.useQuery(['auth.refresh'], {
    enabled: false,
    retry: 1,
    onError(error: any) {
      store.setPageLoading(false);
      document.location.href = '/login';
    },
    onSuccess(data: any) {
      store.setPageLoading(false);
      queryClient.refetchQueries(['users.me']);
    },
  });
  const { isLoading, isFetching } = trpc.useQuery(['users.me'], {
    onSuccess: (data) => {
      store.setPageLoading(false);
      store.setAuthUser(data.data.user as IUser);
    },
    retry: 1,
    enabled: !!enableAuth,
    onError(error) {
      store.setPageLoading(false);
      if (error.message.includes('must be logged in')) {
        query.refetch({ throwOnError: true });
      }else{
          document.location.href = '/login';
      }

    },
  });

  const loading =
    isLoading || isFetching || query.isLoading || query.isFetching;

  useEffect(() => {
    if (loading) {
      store.setPageLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return <>{children}</>;
};

export default AuthMiddleware;

import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import type { AppRouter } from '../server/routers/app.routes';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import superjson from 'superjson';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CookiesProvider } from 'react-cookie';
import AuthMiddleware from '../client/middleware/AuthMiddleware';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <AuthMiddleware
        requireAuth={pageProps.requireAuth}
        enableAuth={pageProps.enableAuth}
      >
        <ToastContainer />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthMiddleware>
    </CookiesProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : (process.env.NEXT_PUBLIC_TRPC_ENDPOINT as string);

    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url,
      }),
    ];
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          };
        }
        return {};
      },
      links,
      transformer: superjson,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      },
    };
  },
  ssr: false,
})(MyApp);

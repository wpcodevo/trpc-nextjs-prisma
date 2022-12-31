import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import AuthMiddleware from "../client/middleware/AuthMiddleware";
import { trpc } from "~/client/utils/trpc";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

export default trpc.withTRPC(MyApp);

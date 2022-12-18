import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import AuthMiddleware from "../client/middleware/AuthMiddleware";
import { trpc } from "~/client/utils/trpc";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthMiddleware
      requireAuth={pageProps.requireAuth || false}
      enableAuth={pageProps.enableAuth || false}
    >
      <ToastContainer />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </AuthMiddleware>
  );
}

export default trpc.withTRPC(MyApp);

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { trpc } from "~/client/utils/trpc";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default trpc.withTRPC(MyApp);

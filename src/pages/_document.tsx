import dotenv from 'dotenv-safe';
import { Html, Head, Main, NextScript } from 'next/document';
dotenv.config();

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

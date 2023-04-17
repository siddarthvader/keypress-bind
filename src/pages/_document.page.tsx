import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>

      <body className="w-[100vw] h-[100vh]">
        <Main />
        <NextScript />
        <Script
          src="keypress/keypress-2.1.5.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}

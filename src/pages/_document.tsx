import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/keypress/2.1.5/keypress.min.js"
          integrity="sha512-JjqUcblrwIZTQBPL/azOhVHwq5uaeXkKzq7da3JZEP14Zg926vZZVhRhBBi+L2pWYquZ6r5P8OZYDYgOChtkOw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </Head>
      <body className="w-[100vw] h-[100vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

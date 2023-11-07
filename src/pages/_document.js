import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=oxfordbureau"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

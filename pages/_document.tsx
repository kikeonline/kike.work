import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet"></link>

        <meta name="title" content="Hi, I&apos;m Enrique Flores. I love web development, UI design and music." />
        <meta name="description" content="Web developer and UI/UX designer for agencies, startups, and large companies." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kike.work/" />
        <meta property="og:title" content="Hi, I&apos;m Enrique Flores. I love web development, UI design and music." />
        <meta property="og:description" content="Web developer and UI/UX designer for agencies, startups, and large companies." />
        <meta property="og:image" content="https://www.kike.work/img/kike.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.kike.work/" />
        <meta property="twitter:title" content="Hi, I&apos;m Enrique Flores. I love web development, UI design and music." />
        <meta property="twitter:description" content="Web developer and UI/UX designer for agencies, startups, and large companies." />
        <meta property="twitter:image" content="https://www.kike.work/img/kike.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
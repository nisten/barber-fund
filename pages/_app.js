import '../styles.css'
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  <Head>
        <meta property="og:title" content="barberfund" key="title" />
      </Head>
  return <Component {...pageProps} />
}
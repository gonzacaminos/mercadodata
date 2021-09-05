
import Head from 'next/head'
import Footer from '@/components/footer'

export default function Layout(props) {
  return (
    <main>
     <Head>
        <title>MercadoData</title>
        <meta name="description" content="Obtené información sobre tus productos de MercadoLibre"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <meta property="og:title" content="MercadoData"></meta>
        <meta property="og:site_name" content="MercadoData"></meta>
        <meta property="og:url" content="https://mercadodata.vercel.app"></meta>
        <meta property="og:description" content="Obtené información sobre tus productos de MercadoLibre"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content="/images/og_image.jpg"></meta>
        <link rel="icon" type="image/png" href="/images/favicon.png"></link>
      </Head>
      {props.children}
      <Footer />
    </main>
  )
}
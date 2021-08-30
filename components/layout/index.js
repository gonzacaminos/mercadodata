
import Head from 'next/head'
export default function Layout(props) {
  return (
    <main>
     <Head>
        <title>MercadoData</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </Head>
      {props.children}
    </main>
  )
}
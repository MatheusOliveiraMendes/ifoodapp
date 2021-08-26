import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../styles/globals.css'




function MyApp({ Component, pageProps }) {
  return (
    
    <>
      <main>
      <title>Delivery de Comida e Mercado - iFood</title>

        <Header />
        <Component {...pageProps} />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default MyApp

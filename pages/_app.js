import { CarritoProvider } from '../components/context/CartC'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <CarritoProvider>
      <Component {...pageProps} />
    </CarritoProvider>
  )
}

export default MyApp

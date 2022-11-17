import { CarritoProvider } from '../components/context/CartC'
import { ProvinciasProvider } from '../components/context/provicinasC'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
    <CarritoProvider>
      <ProvinciasProvider>
        <Component {...pageProps} />
      </ProvinciasProvider>
    </CarritoProvider>
  )
}

export default MyApp

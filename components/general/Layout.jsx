import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layaut = ({ children, pagina }) => {
    return (
        <>
            <Head>
                <title>Micbel - {pagina}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content="Micbel la mejor distribuidora de productos para el hogar" />
            </Head>
            
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layaut;
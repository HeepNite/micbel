import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";



const Layaut = ({ children, pagina }) => {
    return (
        <>
            <Head>
                <title>{`Micbel - ${pagina}`}</title>
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
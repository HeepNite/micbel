import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import Layaut from "../components/general/Layout";
import ProductoM from "../components/mobile/ProductoM";
import ProductoW from "../components/web/ProductoW";
const Producto = ({ dataBannerOne }) => {
    return (
        <Layaut pagina={'Producto'}>
            <main>
                <BannerHeroOneProvider initialData={dataBannerOne}>
                    <ProductoM />
                    <ProductoW />
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}

export async function getStaticProps() {

    const urlBannerOne = 'http://localhost:1337/banner-ones?Pagina=productos'

    const [dataBannerOne] = await Promise.all([

        fetch(urlBannerOne).then(res => res.json())

    ])

    return {

        props: {
            dataBannerOne
        }

    }
}

export default Producto;
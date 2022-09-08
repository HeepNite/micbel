import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import Layaut from "../components/general/Layout";
import ProductoM from "../components/mobile/ProductoM";
import ProductoW from "../components/web/ProductoW";
import { getBannerHeroOne } from "../helper/services";
const Producto = ({ dataBanerHeroOne }) => {
    return (
        <Layaut pagina={'Producto'}>
            <main>
                <BannerHeroOneProvider dataBanerHeroOne={dataBanerHeroOne}>
                    <ProductoM />
                    <ProductoW />
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}

export async function getStaticProps() {

    const urlEndPoint = 'productos'

    const dataBanerHeroOne = await getBannerHeroOne(urlEndPoint)

    return {

        props: {
            dataBanerHeroOne
        }

    }
}

export default Producto;
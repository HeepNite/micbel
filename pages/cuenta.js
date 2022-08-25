import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import { BannerHeroThreeProvider } from "../components/context/BannerHeroThreeC";
import Carrito from "../components/general/Carrito";
import Layaut from "../components/general/Layout";
import User from "../components/general/User";
import CuentaM from "../components/mobile/CuentaM";
import CuentaW from "../components/web/CuentaW";

const Cuenta = ({ dataBannerOne, dataBannerHeroThree }) => {

    return (
        <Layaut pagina={'Cuenta'}>
            <main>

                <BannerHeroOneProvider initialData={dataBannerOne}>
                    <BannerHeroThreeProvider initialData={dataBannerHeroThree}>
                        {/* <Carrito />
                            <User /> */}
                        <CuentaM />
                        <CuentaW />
                    </BannerHeroThreeProvider>
                </BannerHeroOneProvider>
            </main>

        </Layaut>
    );
}

export async function getStaticProps() {

    const urlBannerOne = 'http://localhost:1337/banner-ones?Pagina=nosotros'
    const urlBannerHeroThree = 'http://localhost:1337/banner-threes?Pagina=cuenta';

    const [dataBannerOne, dataBannerHeroThree] = await Promise.all([
        fetch(urlBannerOne).then(res => res.json()),
        fetch(urlBannerHeroThree).then(res => res.json())
    ])

    return {
        props: {
            dataBannerOne,
            dataBannerHeroThree
        }
    }
}




export default Cuenta; 
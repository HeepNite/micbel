import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import { BannerHeroThreeProvider } from "../components/context/BannerHeroThreeC";
import Carrito from "../components/general/Carrito";
import Layaut from "../components/general/Layout";
import User from "../components/general/User";
import CuentaM from "../components/mobile/CuentaM";
import CuentaW from "../components/web/CuentaW";
import { getBannerHeroOne, getBannerHeroThree } from "../helper/services";

const Cuenta = ({ dataBanerHeroOne, dataBannerHeroThree }) => {

    return (
        <Layaut pagina={'Cuenta'}>
            <main>

                <BannerHeroOneProvider dataBanerHeroOne={dataBanerHeroOne}>
                    <BannerHeroThreeProvider dataBannerHeroThree={dataBannerHeroThree}>
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
    const urlEndPoint = 'cuenta'
    const dataBannerHeroThree = await getBannerHeroThree(urlEndPoint)
     const dataBanerHeroOne = await getBannerHeroOne(urlEndPoint)
     return {

        props: {
            dataBanerHeroOne,
            dataBannerHeroThree
        }
    }
}




export default Cuenta; 
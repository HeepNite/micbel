import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import { BannerHeroThreeProvider } from "../components/context/BannerHeroThreeC";
import Layaut from "../components/general/Layout";
import PagosM from "../components/mobile/PagosM";
import PagosW from "../components/web/PagosW";
import { getBannerHeroOne, getBannerHeroThree } from "../helper/services";

const Pagos = ({ dataBanerHeroOne, dataBannerHeroThree }) => {
    return (
        <Layaut pagina={'Pagos'}>
            <main>

                <BannerHeroOneProvider dataBanerHeroOne={dataBanerHeroOne}>
                    <BannerHeroThreeProvider dataBannerHeroThree={dataBannerHeroThree}>
                        <PagosM />
                        <PagosW />
                    </BannerHeroThreeProvider>
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}


export async function getStaticProps() {
    const urlEndPoint = 'pagos'
    const dataBannerHeroThree = await getBannerHeroThree(urlEndPoint)
    const dataBanerHeroOne = await getBannerHeroOne(urlEndPoint)
    return {

        props: {
            dataBanerHeroOne,
            dataBannerHeroThree
        }
    }
}

export default Pagos;
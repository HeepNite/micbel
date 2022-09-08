import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import Layaut from "../components/general/Layout";
import PoliticasM from "../components/mobile/PoliticasM";
import PoliticasW from "../components/web/PoliticasW";
import { getBannerHeroOne, getPaginasGenenerales } from "../helper/services";

const Politicas = ({ dataPoliticas, dataBanerHeroOne }) => {

    return (
        <Layaut pagina={'Politicas y Privacidad'}>
            <main>
                <BannerHeroOneProvider dataBanerHeroOne={dataBanerHeroOne}>
                    <PoliticasM dataPoliticas={dataPoliticas} />
                    <PoliticasW dataPoliticas={dataPoliticas} />
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}

export async function getStaticProps() {
    const urlEndPoint = 'politicas-de-privacidad'
    const dataPoliticas = await getPaginasGeneneralesInfo(urlEndPoint)
    const dataBanerHeroOne = await getBannerHeroOne(urlEndPoint)

    return {
        props: {
            dataPoliticas,
            dataBanerHeroOne
        }
    }
}

export default Politicas;
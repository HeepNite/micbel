
import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import Layaut from "../components/general/Layout";
import TerminosM from "../components/mobile/TerminosM";
import TerminosW from "../components/web/TerminosW";
import { getBannerHeroOne, getPaginasGenenerales } from "../helper/services";

const Terminos = ({ dataTerminos, dataBanerHeroOne }) => {


    return (
        <Layaut pagina={'Terminos y condiciones'}>
            <main>
                <BannerHeroOneProvider dataBanerHeroOne={dataBanerHeroOne}>
                    <TerminosM dataTerminos={dataTerminos} />
                    <TerminosW />
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}
export async function getStaticProps() {
    const urlEndPoint = 'terminos-y-condiciones'
    const dataTerminos = await getPaginasGeneneralesInfo(urlEndPoint)
    const dataBanerHeroOne = await getBannerHeroOne(urlEndPoint)
    return {
        props: {
            dataTerminos,
            dataBanerHeroOne
        }
    }
}
export default Terminos;

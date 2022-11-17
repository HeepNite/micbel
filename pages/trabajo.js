import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import Layaut from "../components/general/Layout";
import TrabajoM from "../components/mobile/TrabajoM";
import { getBannerHeroOne, getPaginasGeneneralesInfo } from "../helper/services";

const Trabajo = ({ dataTrabajos, dataBanerHeroOne }) => {

    return (
        <Layaut pagina={'Trabaja con nosotros'}>
            <main>
                <BannerHeroOneProvider dataBanerHeroOne={dataBanerHeroOne}>
                    <TrabajoM dataTrabajos={dataTrabajos} />
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}

export async function getStaticProps() {

    const urlEndPoint = 'trabaja-con-nosotros'
    const dataTrabajos = await getPaginasGeneneralesInfo(urlEndPoint)
    const dataBanerHeroOne = await getBannerHeroOne(urlEndPoint)

    return {
        props: {
            dataTrabajos,
            dataBanerHeroOne
        }
    }
}

export default Trabajo;
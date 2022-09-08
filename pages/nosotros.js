import Layaut from "../components/general/Layout";

import NosotrosM from "../components/mobile/NosotrosM";
import NosotrosW from "../components/web/NosotrosW";

import { BannerHeroThreeProvider } from "../components/context/BannerHeroThreeC";
import { getBannerHeroThree, getCategoriasBar, getNosotrosInfo } from "../helper/services";
import { CategoriasBarProvider } from "../components/context/CategoriasBarC";

const Nosotros = ({ dataNosotros, dataBannerHeroThree, dataCategoriasBar }) => {

    return (
        <Layaut pagina={'Nosotros'}>
            <main>
                <BannerHeroThreeProvider dataBannerHeroThree={dataBannerHeroThree}>
                    <CategoriasBarProvider dataCategoriasBar={dataCategoriasBar}>
                        <NosotrosM dataNosotros={dataNosotros} />
                        <NosotrosW dataNosotros={dataNosotros} />
                    </CategoriasBarProvider>
                </BannerHeroThreeProvider>
            </main>
        </Layaut>
    );
}

export async function getStaticProps() {
    const urlEndPoint = 'nosotros'
    const dataBannerHeroThree = await getBannerHeroThree(urlEndPoint)
    const dataNosotros = await getNosotrosInfo()
    const dataCategoriasBar = await getCategoriasBar()
    return {
        props: {
            dataBannerHeroThree,
            dataNosotros,
            dataCategoriasBar
        }
    }

}

export default Nosotros;
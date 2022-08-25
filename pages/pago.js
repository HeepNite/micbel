import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import { BannerHeroThreeProvider } from "../components/context/BannerHeroThreeC";
import Layaut from "../components/general/Layout";
import PagosM from "../components/mobile/PagosM";
import PagosW from "../components/web/PagosW";

const Pagos = ({ dataBannerOne, dataBannerHeroThree }) => {
    return (
        <Layaut pagina={'Pagos'}>
            <main>
                <BannerHeroOneProvider initialData={dataBannerOne}>
                    <BannerHeroThreeProvider initialData={dataBannerHeroThree}>
                        <PagosM />
                        <PagosW />
                    </BannerHeroThreeProvider>
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}


export async function getStaticProps() {

    const urlPagos = ''
    const urlBannerOne = 'http://localhost:1337/banner-ones?Pagina=pagos'
    const urlBannerHeroThree = 'http://localhost:1337/banner-threes?Pagina=pagos';


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


export default Pagos;
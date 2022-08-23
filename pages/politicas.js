import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import Layaut from "../components/general/Layout";
import PoliticasM from "../components/mobile/PoliticasM";
import PoliticasW from "../components/web/PoliticasW";

const Politicas = ({ dataPoliticas, dataBannerOne }) => {

    return (
        <Layaut pagina={'Politicas y Privacidad'}>
            <main>
                <BannerHeroOneProvider initialData={dataBannerOne}>
                    <PoliticasM dataPoliticas={dataPoliticas} />
                    <PoliticasW dataPoliticas={dataPoliticas} />
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}

export async function getStaticProps() {
    const urlPoliticas = 'http://localhost:1337/paginas-generales?Pagina=politicas-de-privacidad';
    const urlBannerOne = 'http://localhost:1337/banner-ones?Pagina=politicas-de-privacidad';

    const [dataPoliticas, dataBannerOne] = await Promise.all([
        fetch(urlPoliticas).then(res => res.json()),
        fetch(urlBannerOne).then(res => res.json())
    ])
    return {
        props: {
            dataPoliticas,
            dataBannerOne
        }
    }
}

export default Politicas;

import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import Layaut from "../components/general/Layout";
import TerminosM from "../components/mobile/TerminosM";
import TerminosW from "../components/web/TerminosW";

const Terminos = ({ dataTerminos, dataBannerOne }) => {


    return (
        <Layaut pagina={'Terminos y condiciones'}>
            <main>
                <BannerHeroOneProvider initialData={dataBannerOne}>
                    <TerminosM dataTerminos={dataTerminos} />
                    <TerminosW />
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}
export async function getStaticProps() {
    const urlTerminos = 'http://localhost:1337/paginas-generales?Pagina=terminos-y-condiciones';
    const urlBannerOne = 'http://localhost:1337/banner-ones?Pagina=terminos-y-condiciones';

    const [dataTerminos, dataBannerOne] = await Promise.all([
        fetch(urlTerminos).then(res => res.json()),
        fetch(urlBannerOne).then(res => res.json())
    ])

    return {
        props: {
            dataTerminos,
            dataBannerOne
        }
    }
}
export default Terminos;

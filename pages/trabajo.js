import { BannerHeroOneProvider } from "../components/context/BannerHeroOneC";
import Layaut from "../components/general/Layout";
import TrabajoM from "../components/mobile/TrabajoM";

const Trabajo = ({ dataTrabajos, dataBannerOne }) => {

    return (
        <Layaut pagina={'Trabaja con nosotros'}>
            <main>
                <BannerHeroOneProvider initialData={dataBannerOne}>
                    <TrabajoM dataTrabajos={dataTrabajos} />
                </BannerHeroOneProvider>
            </main>
        </Layaut>
    );
}

export async function getStaticProps() {
    const urlTrabajos = 'http://localhost:1337/paginas-generales?Pagina=trabaja-con-nosotros';
    const urlBannerOne = 'http://localhost:1337/banner-ones?Pagina=trabaja-con-nosotros';

    const [dataTrabajos, dataBannerOne] = await Promise.all([
        fetch(urlTrabajos).then(res => res.json()),
        fetch(urlBannerOne).then(res => res.json())
    ])

    return {
        props: {
            dataTrabajos,
            dataBannerOne
        }
    }
}

export default Trabajo;
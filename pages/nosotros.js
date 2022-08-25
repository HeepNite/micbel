import { BannerHeroThreeProvider } from "../components/context/BannerHeroThreeC";
import Layaut from "../components/general/Layout";
import NosotrosM from "../components/mobile/NosotrosM";
import NosotrosW from "../components/web/NosotrosW";

const Nosotros = ({ dataNosotros, dataBannerHeroThree }) => {

    return (
        <Layaut pagina={'Nosotros'}>
            <main>
                <BannerHeroThreeProvider initialData={dataBannerHeroThree}>
                    <NosotrosM dataNosotros={dataNosotros} />
                    <NosotrosW dataNosotros={dataNosotros} />
                </BannerHeroThreeProvider>
            </main>
        </Layaut>
    );
}

export async function getStaticProps() {
    const urlBannerHeroThree = 'http://localhost:1337/banner-threes?Pagina=nosotros';
    const urlNosotros = 'http://localhost:1337/nosotros'

    const [dataBannerHeroThree, dataNosotros] = await Promise.all([
        fetch(urlBannerHeroThree).then(res => res.json()),
        fetch(urlNosotros).then(res => res.json())

    ])

    return {
        props: {
            dataBannerHeroThree,
            dataNosotros
        }
    }

}

export default Nosotros;
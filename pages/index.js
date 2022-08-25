import { BannerHeroThreeProvider } from "../components/context/BannerHeroThreeC";
import Layaut from "../components/general/Layout";
import IndexM from "../components/mobile/IndexM";
import IndexW from "../components/web/IndexW";
import { getCategorias } from "../helper/Ssr";

const Index = ({ dataBannerHeroThree }) => {
  getCategorias()

  return (
    <Layaut pagina={"Inicio"}>
      <main>
        <BannerHeroThreeProvider initialData={dataBannerHeroThree}>
          <IndexM />
          <IndexW />
        </BannerHeroThreeProvider>
      </main>
    </Layaut>
  );
}


export async function getStaticProps() {

  const urlBannerHeroThree = 'http://localhost:1337/banner-threes?Pagina=inicio'

  const [dataBannerHeroThree] = await Promise.all([
    fetch(urlBannerHeroThree).then(res => res.json())
  ])

  return {
    props: {
      dataBannerHeroThree,

    }
  }
}

export default Index;

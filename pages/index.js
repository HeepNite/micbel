import { BannerHeroThreeProvider } from "../components/context/BannerHeroThreeC";
import { CategoriasBarProvider } from "../components/context/CategoriasBarC";
import { ProductosProvider } from "../components/context/ProductosC";
import Layaut from "../components/general/Layout";
import IndexM from "../components/mobile/IndexM";
import IndexW from "../components/web/IndexW";
import { getBannerHeroThree, getCategoriasBar, getProductos } from "../helper/services";

const Index = ({ dataBannerHeroThree, dataCategoriasBar, dataProductos }) => {


  return (
    <Layaut pagina={"Inicio"}>
      <main>
        <BannerHeroThreeProvider dataBannerHeroThree={dataBannerHeroThree}>
          <CategoriasBarProvider dataCategoriasBar={dataCategoriasBar}>
            <ProductosProvider dataProductos={dataProductos}>
              <IndexM />
              <IndexW />
            </ProductosProvider>
          </CategoriasBarProvider>
        </BannerHeroThreeProvider>
      </main>
    </Layaut>
  );
}


export async function getStaticProps() {
  const urlEndPoint = 'inicio'
  const dataBannerHeroThree = await getBannerHeroThree(urlEndPoint)
  const dataProductos = await getProductos()
  const dataCategoriasBar = await getCategoriasBar()
  return {
    props: {
      dataBannerHeroThree,
      dataCategoriasBar,
      dataProductos
    }
  }
}

export default Index;

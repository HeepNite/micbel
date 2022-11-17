import Image from "next/image";
import styles from '../../styles/components/pages/Index.module.css';
import BannerHeroThree from "../general/banners/BannerHeroThree";
import Categoriesbar from "../general/CategoriesBar";
import ProductSlider from "../general/ProductSlider";
import ProductsBanner from "../general/ProductsBanner";
import ReviewBaner from "../general/ReviewBanner";

const IndexM = () => {

    return (
        <div className={styles.indexMContainer}>
            <section className={styles.indexHero}>

                {/* crear hook reducer (redux) para la carga de elementos */}
                <BannerHeroThree />

            </section>

            {/* crear la coneccion con la base de datos para traer las categorias y las imagenes  */}
            <section className={styles.IndexCategories}>
                <Categoriesbar />
            </section>

            {/* grid de productos con slider y barra de categorias */}
            <section className={styles.indexPrincipalProduct}>
                <ProductSlider />

            </section>

            {/* banner grid de los productos nuevos mas imagenes en slider */}
            <section className={styles.indexBannerProducts}>
                <ProductsBanner />
            </section>

            {/* grid de productos con slider y barra de categorias */}
            <section className={styles.indexPrincipalProduct}>
               <ProductSlider /> 
            </section>


            {/* banner grid de las imagenes en slider */}
            <section className={styles.indexDestacateProduct}>

                <Image src="/img/pexels-4.jpeg" alt="producto" width={170} height={120} />
                <Image src="/img/pexels-4.jpeg" alt="producto" width={170} height={120} />

            </section>

            {/* grid de productos con slider y barra de categorias */}
            <section className={styles.indexPrincipalProduct}>
                 <ProductSlider /> 
            </section>

            {/* banner testiomoniales con slider*/}
            <section className={styles.indexTestimonials}>
                <ReviewBaner />
            </section>
        </div>
    );
}

export default IndexM;
import { useRouter } from "next/router"
import { getProducto } from "../../helper/services"

import Image from 'next/image';
import Layaut from "../../components/general/Layout";
import styles from '../../styles/components/pages/Producto.module.css'
import BannerHeroOne from "../../components/general/BannerHeroOne";
import RelatesProducts from "../../components/general/RelatesProducts";
import BannerHeroThree from "../../components/general/BannerHeroThree";


const Producto = ({ dataProducto }) => {
    console.log(dataProducto)
    const { Titulo, DescripcionUno, DescripcionCorta, ImagenDescripcionDos, ImagenDescripcionUno, DescripcionDos, DescripcionTres, Precio, DescripcionImagenDesDos, DescripcionImagenDesUno, TituloBannerHero, BannerHero, DescripcionBannerHero, ImagenBannerHero, ImagenDestacada, Descuento
    } = dataProducto[0] || []

    console.log(dataProducto)



    if (!dataProducto) {
        return null
    }

    return (
        <Layaut>
            <div className={styles.productoMContainer}>
                {/* banner desarrollado como componnte estatico */}
                <section className={styles.ProductoHero}>
                    <article className={styles.BannerHeroContent}>
                        <div>
                            <h1> {TituloBannerHero}</h1>
                            <p>{DescripcionBannerHero}</p>
                        </div>
                        {<Image src={ImagenBannerHero.url} alt="Nosotros" width={140} height={100} />}
                    </article>
                    <article className={styles.BannerHeroImg}>
                        {<Image src={BannerHero.url} alt="Nosotros" width={500} height={350} priority />}
                    </article>
                </section>
                {/* obtener datos de la base de datos */}
                <section className={styles.productoCart}>
                    <article className={styles.productoName}>
                        {/* colocar las estrellas antes */}
                        <form action="">
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                        </form>
                        <h1>{Titulo}</h1>
                        <h4>20 reviews</h4>
                    </article>

                    <article className={styles.productoImage}>
                        <Image width={400} height={200} src={ImagenDestacada.url} alt="Micbel Logo" />
                    </article>

                    <article className={styles.productoPriceInfo}>
                        <div className={styles.innerPriceInfo}>
                            <h6>Lorem Ipsum is simply domy</h6>
                            <div >
                                <h3>${Precio}</h3>
                                <h4>${Descuento}</h4>
                            </div>
                        </div>
                        <div className={styles.innerImage}>
                            <Image width={20} height={20} src="/img/clock.png" alt="Micbel Logo" />
                            <h6>Lorem Ipsum is dom</h6>
                        </div>
                    </article>

                    <article className={styles.ProductoDetail}>
                        <h3>lorem ipsum</h3>
                        <p>
                            {DescripcionCorta}
                        </p>
                        <span> Lorem Ipsum is simply dummy text.</span>
                        <div></div>
                    </article>
                    {/* coloar el timer en esta aprte */}
                    <article className={styles.productoTimeBanner}>
                        <p>reloj</p>
                        <h3>lorem ipsum</h3>
                    </article>

                    <article className={styles.productoDeliveryBanner}>
                        <Image width={35} height={35} src="/img/shipped.png" alt="Micbel Logo" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                    </article>

                    <article className={styles.productoCartBtn}>
                        <form action="">
                            <input type="number" placeholder='1' />
                            <button className={styles.addCart}>
                                <Image width={30} height={30} src="/img/grocery-cart.png" alt="Micbel Logo" />
                                agregar
                            </button>
                            <button>
                                <Image width={25} height={25} src="/img/hearts.png" alt="Micbel Logo" />
                            </button>
                        </form>

                    </article>
                </section>

                <section className={styles.productoBanner}>
                    <article className={styles.productoBannerDivider}>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                    </article>
                </section>

                <section className={styles.productoDescription}>

                    <article className={styles.productoDescriptionText}>
                        <p>
                            {DescripcionUno}
                        </p>

                        <div className={styles.productoDescriptionImg}>
                            <Image width={400} height={450} src={ImagenDescripcionUno.url} alt="Micbel Logo" priority />
                            <p>
                                {DescripcionImagenDesUno}
                            </p>

                        </div>
                        <p>
                            {DescripcionDos}
                        </p>
                        <div className={styles.productoDescriptionImg}>

                            <p>
                                {DescripcionImagenDesDos}
                            </p>
                            <Image width={400} height={150} src={ImagenDescripcionDos.url} alt="Micbel Logo" />
                        </div>



                        <p>
                            {DescripcionTres}

                        </p>

                    </article>
                </section>

                <section className={styles.productoRelates}>

                    <article>
                        <RelatesProducts />
                    </article>

                </section>

            </div>
        </Layaut>
    );
}

export async function getServerSideProps({ query: { producto } }) {

    const dataProducto = await getProducto(producto)


    return {
        props: {
            dataProducto
        }
    }
}

export default Producto
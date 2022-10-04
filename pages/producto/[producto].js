import { getProducto } from "../../helper/services"
import Image from 'next/image';
import Layaut from "../../components/general/Layout";
import styles from '../../styles/components/pages/Producto.module.css'
import RelatesProducts from "../../components/general/RelatesProducts";
import { useState } from "react";
import { useCarrito } from "../../components/hooks/useCarrito";


const Producto = ({ dataProducto }) => {

    const [cantidadProducto, setcantidadProducto] = useState({ cantidad: 1 })
    const { name, images, regular_price, sale_price, short_description, description, slug } = dataProducto[0] || []

    if (!dataProducto) {
        return null
    }

    const imageUrl = images[0].src
    const imageAlt = images[0].alt

    const productImageOne = images[1].src
    const productImageTow = images[2].src

    const regularPrice = parseInt(regular_price)
    const salePrice = parseInt(sale_price)

    const { agregarCarrito } = useCarrito()

    const handleSubmit = (e) => {
        e.preventDefault()
        let cantidad = parseInt(cantidadProducto.cantidad)
        if (cantidad <= 0) {
            alert('Debes seleccionar una cantidad mayor a 0')
        }
        else {
            const carritoProductos = {
                name,
                salePrice,
                regularPrice,
                short_description,
                cantidad,
                imageUrl,
                imageAlt,
                slug
            }
            agregarCarrito(carritoProductos)
        }
    }

    return (
        <Layaut>
            <div className={styles.productoMContainer}>
                {/* banner desarrollado como componnte estatico */}
                <section className={styles.ProductoHero}>
                    <article className={styles.BannerHeroContent}>
                        <div>
                            {/*  <h1> {TituloBannerHero}</h1>
                            <p>{DescripcionBannerHero}</p> */}
                        </div>
                        {/*              {<Image src={ImagenBannerHero.url} alt="Nosotros" width={140} height={100} />} */}
                    </article>
                    <article className={styles.BannerHeroImg}>
                        {/*   {<Image src={BannerHero.url} alt="Nosotros" width={500} height={350} priority />} */}
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
                        <h1>{name}</h1>
                        <h4>20 reviews</h4>
                    </article>

                    <article className={styles.productoImage}>
                        <Image width={400} height={300} src={imageUrl} alt="Micbel Logo" />
                    </article>

                    <article className={styles.productoPriceInfo}>
                        <div className={styles.innerPriceInfo}>
                            <h6>Lorem Ipsum is simply domy</h6>
                            {
                                !salePrice ?
                                    <h3>${regularPrice}</h3>
                                    :
                                    <div>
                                        <h4> $ <strike>{regularPrice}</strike></h4>
                                        <h3>$ {salePrice}</h3>
                                    </div>
                            }
                        </div>
                        <div className={styles.innerImage}>
                            <Image width={20} height={20} src="/img/clock.png" alt="Micbel Logo" />
                            <h6>Lorem Ipsum is dom</h6>
                        </div>
                    </article>

                    <article className={styles.ProductoDetail}>

                        <p dangerouslySetInnerHTML={{ __html: short_description }}></p>
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
                        <form action="" onSubmit={handleSubmit}>
                            <input type="number" name="cantidad" min="1" max="10" id="cantidad" value={cantidadProducto.cantidad} onChange={(e) => setcantidadProducto({ cantidad: e.target.value })} />
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
                        <p dangerouslySetInnerHTML={{ __html: description }}></p>

                        <div className={styles.productoDescriptionImg}>
                            <Image width={400} height={450} src={productImageOne} alt="Micbel  Logo" priority />
                            <p dangerouslySetInnerHTML={{ __html: short_description }}></p>

                        </div>
                        <p dangerouslySetInnerHTML={{ __html: short_description }}></p>
                        <div className={styles.productoDescriptionImg}>

                            <p dangerouslySetInnerHTML={{ __html: short_description }}></p>
                            <Image width={400} height={150} src={productImageTow} alt="Micbel  Logo" />
                        </div>

                        <p dangerouslySetInnerHTML={{ __html: short_description }}></p>

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
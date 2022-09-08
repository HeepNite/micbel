import styles from '../../styles/components/pages/Producto.module.css'
import Image from 'next/image';
import RelatesProducts from '../general/RelatesProducts';
import BannerHeroOne from '../general/BannerHeroOne';

const ProduyctoM = () => {
    return (
        <div className={styles.productoMContainer}>
            {/* banner desarrollado como componnte estatico */}
            <section className={styles.poductoHeroBanner}>
            <BannerHeroOne />
                
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
                    <h1>Producto</h1>
                    <h4>20 reviews</h4>
                </article>

                <article className={styles.productoImage}>
                    <Image width={400} height={200} src="/img/pexels-3.jpeg" alt="Micbel Logo" />
                </article>

                <article className={styles.productoPriceInfo}>
                    <div className={styles.innerPriceInfo}>
                        <h6>Lorem Ipsum is simply domy</h6>
                        <div >
                            <h3>$400</h3>
                            <h4>$800</h4>
                        </div>
                    </div>
                    <div className={styles.innerImage}>
                        <Image width={25} height={25} src="/img/clock.png" alt="Micbel Logo" />
                        <h6>Lorem Ipsum is dom</h6>
                    </div>
                </article>

                <article className={styles.ProductoDetail}>
                    <h3>lorem ipsum</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        <br />
                        <br />
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        <br />
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
              
                    <br />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className={styles.productoDescriptionImg}>
                        <Image width={400} height={450} src="/img/pexels-3.jpeg" alt="Micbel Logo" />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            ince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className={styles.productoDescriptionImg}>
                       
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            ince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <Image width={400} height={150} src="/img/pexels-3.jpeg" alt="Micbel Logo" />
                    </div>
                   
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <br />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       
                    </p>

                </article>
            </section>

            <section className={styles.productoRelates}>
             
                <article>
                    <RelatesProducts />
                </article>

            </section>

        </div>
    );
}

export default ProduyctoM;
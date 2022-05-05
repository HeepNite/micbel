import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/general/ProductsBanner.module.css";
const ProductsBanner = () => {
    return (
        <>
            <article className={styles.BannerPcontent}>
                <h2>Nuevos Productos</h2>
                <ul>
                    <li>
                        <Link href='/cuenta' passHref>
                            <Image src="/img/pexels-4.jpeg" alt="producto" width={80} height={80} />
                        </Link>
                        <div>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem Ipsum is simply dumm.</p>
                            <h4>$400</h4>
                            <form action="">

                                <div>
                                    <Image src="/img/shopping-cart.png" alt="carrito" width={25} height={25} /> agregar

                                </div>
                            </form>
                        </div>
                    </li>
                </ul>
            </article>
            <article className={styles.BannerProductsImg}>
                <Image src="/img/pexels-4.jpeg" alt="producto" width={400} height={370} />
                <Image src="/img/pexels-4.jpeg" alt="producto" width={400} height={800} />
            </article></>
    );
}

export default ProductsBanner;
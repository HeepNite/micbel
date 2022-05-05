
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/general/ProductSlider.module.css";

const ProductSlider = () => {
    return (
        <>
            <article className={styles.productContent}>
                <h2>Lorem Ipsum</h2>
                <h4>Lorem Ipsum</h4>
                <div>Filtros</div>
            </article>

            <ul className={styles.PrincipalProduct}>
                <li>
                    <article className={styles.productInnerContent}>

                        <Link href='/cuenta' passHref>
                            <Image src="/img/pexels-4.jpeg" alt="producto" width={380} height={200} />
                        </Link>
                        <h5>Lorem Ipsum is simply dummy text of the</h5>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <h3>$300</h3>
                    </article>

                    <form action="">
                        <article className={styles.AddCart}>
                            <input type="number" name="cantidad" id="cantidad" />
                            <div>
                                <Image src="/img/shopping-cart.png" alt="producto" width={25} height={25} />
                                agregar
                            </div>
                        </article>

                        <article className={styles.Stars}>
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                            <input type="radio" />
                        </article>

                    </form>

                    <article className={styles.FavoritebBtn}>
                        <div>
                            <Image src="/img/hearts.png" alt="carrito" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/img/hearts.png" alt="carrito" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/img/hearts.png" alt="carrito" width={20} height={20} />
                        </div>
                    </article>

                </li>
            </ul>
        </>
    );
}

export default ProductSlider;
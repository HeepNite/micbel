import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/general/RelatesProducts.module.css";
const Relates = () => {
    return (
        <>
            <ul className={styles.RelatesProduct}>
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

export default Relates;
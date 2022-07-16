import Image from "next/image";
import styles from "../../styles/components/pages/Carrito.module.css";
const CarritoM = () => {
    return (
        <div className={styles.carritoContainer}>
            <section className={styles.carritoInnerContainer}>
                <ul>
                    <li>
                        <Image src="/img/pexels-4.jpeg" alt="carrito" width={200} height={200} />
                        <h3>lorem Ipsum</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <form action="">
                            <input type="number" placeholder="Cantidad" />
                            <input type="submit" value="Actualizar" />
                        </form>
                        <button>Eliminar</button>
                    </li>
                    <li>
                        <Image src="/img/pexels-5.jpeg" alt="carrito" width={300} height={300} />
                        <h3>lorem Ipsum</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <form action="">
                            <input type="number" placeholder="Cantidad" />
                            <input type="submit" value="Actualizar" />
                        </form>
                        <button>Eliminar</button>
                    </li>
                    <li>
                        <Image src="/img/pexels-2.jpeg" alt="carrito" width={300} height={300} />
                        <h3>lorem Ipsum</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <form action="">
                            <input type="number" placeholder="Cantidad" />
                            <input type="submit" value="Actualizar" />
                        </form>
                        <button>Eliminar</button>
                    </li>
                </ul>

            </section>
            <section className={styles.fechaCarritoContainer}>
                <article>
                    <h3 className={styles.fechaCarito}>Fecha</h3>
                </article>
                <article>
                    <h3>lorem Ipsum</h3>
                </article>
            </section>
            <section className={styles.informacionCarritoContainer}>
                <article>
                    <p>
                        <span>Lorem Ipsum is simply dummy </span>text of the printing and typesetting industry.
                        Lorem Ipsum has been the standard dummy text ever since the 1500s, <span> when an unknown printer took a galley</span> of type and scrambled it to make a type specimen book.
                    </p>
                </article>
                <form action="">
                    <input type="text" placeholder="Codigo" />
                    <input type="submit" value="Aplicar" />
                    <ul>
                        <li>
                            <h4>Sub total</h4>
                            <h4>$300</h4>
                        </li>
                        <li>
                            <h4>Sub total</h4>
                            <h4>$300</h4>
                        </li>
                        <li>
                            <h4>Sub total</h4>
                            <h4>$300</h4>
                        </li>
                    </ul>
                    <div>
                        <button>Comprar</button>
                        <button>Limpiar</button>
                    </div>


                </form>
            </section>
        </div>
    );
}

export default CarritoM;
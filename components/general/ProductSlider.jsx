
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/general/ProductSlider.module.css";
import { useProductos } from "../hooks/useProductos";
import { BsArrowLeftCircleFill, BsFillArrowRightCircleFill, } from "react-icons/bs";
import { useEffect, useState } from "react";

const ProductSlider = () => {

    const { dataProductos } = useProductos() || []

    if (!dataProductos) {
        return null
    }
    /*  const target = useRef() */

    const [producto, setProducto] = useState([
        {
            element: {},
            i: 0
        }])

    const [index, setIndex] = useState(0)

    const calculate = (index) => {
        dataProductos.forEach((element, i) => {
            if (i == 0 || i == index) {
                setProducto({ element, i })
            }
        })
    }

    useEffect(() => {
        calculate(index)

    }, [producto.i, index])

    const { Titulo, DescripcionCorta, Precio, ImagenDestacada, UID, Descuento } = producto.element || {}

    if (!producto.element) {
        return null
    }

    const handLeft = () => {

        if (index == 0) {
            let newIndex = dataProductos.length - 1
            setIndex(newIndex)
        } else {
            let newIndex = index
            setIndex(newIndex -= 1)
        }
    }
    const handleRight = () => {
        if (index == dataProductos.length) {
            let newIndex = 1
            setIndex(newIndex)
        } else {
            let newIndex = index
            setIndex(newIndex += 1)
        }
    }

    
    return (
        <>
            <article className={styles.productContent}>
                <h2>Lorem Ipsum</h2>
                <h4>Lorem Ipsum</h4>
                <div>Filtros</div>
            </article>

            <article className={styles.PrincipalproductContainer}>
                <div className={styles.Arrows}>
                    <button onClick={handLeft} className={styles.ArrowsLeft}><BsArrowLeftCircleFill /></button>
                    <button onClick={handleRight} className={styles.ArrowsRight}><BsFillArrowRightCircleFill /></button>
                </div>
                {/*  <div className={styles.productCard}> */}
                <ul className={styles.PrincipalProduct}>
                    {/*  {dataProductos.map(producto => (
                            <li key={producto.id}>
                                <article className={styles.productInnerContent}>

                                    <Link href='/' passHref>
                                        <a>
                                            <Image src={producto.imagenDestacada.url} alt="producto" width={380} height={250} />
                                        </a>
                                    </Link>
                                    <h5>{producto.Titulo}</h5>
                                    <p> {producto.DescripcionCorta} </p>
                                    <h3>{producto.Precio}</h3>
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
                        ))} */}
                    <li>
                        <article className={styles.productInnerContent}>

                            <Link href={`/producto/${UID}`} passHref>
                                <a>
                                    <Image src={ImagenDestacada.url} alt="producto" width={380} height={250} />
                                </a>
                            </Link>
                            <h5>{Titulo}</h5>
                            <p> {DescripcionCorta} </p>
                            <h3> $ {Precio}</h3>
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
                {/*       </div> */}
            </article>

        </>
    );
}

export default ProductSlider;

import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/general/ProductSlider.module.css";
import { useProductos } from "../hooks/useProductos";
import { BsArrowLeftCircleFill, BsFillArrowRightCircleFill, } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useCarrito } from "../hooks/useCarrito";


const ProductSlider = () => {

    const { dataProductos } = useProductos() || []

    const { agregarCarrito, agregarCarrito2 } = useCarrito()

    if (!dataProductos) {
        return null
    }

    const [producto, setProducto] = useState([
        {
            element: {},
            i: 0
        }])

    const [index, setIndex] = useState(0)

    const [cantidadProducto, setcantidadProducto] = useState(1)

    const [carritoItem, setCarritoItem] = useState(false)

    const [isLoading, setLoading] = useState(false)

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

    const { name, short_description, price, sale_price, regular_price, images, slug } = producto.element || {}


    if (!producto.element) {
        return null
    }

    const imageUrl = images[0].src
    const imageAlt = images[0].alt

    const salePrice = parseInt(sale_price)
    const regularPrice = parseInt(regular_price)




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
    const handleCantidadProducto = (e) => {
        let cantidad = parseInt(e.target.value)
        setcantidadProducto(cantidad)
    }

    let totalPriceReg = 0
    let totalPriceDes = 0

    const handleSubmit = (e) => {
        e.preventDefault()

        totalPriceDes = cantidadProducto * salePrice
        totalPriceReg = cantidadProducto * regularPrice
        const carritoProductos = {
            name,
            salePrice,
            regularPrice,
            totalPriceReg,
            totalPriceDes,
            short_description,
            cantidadProducto,
            imageUrl,
            imageAlt,
            slug
        }

        agregarCarrito(carritoProductos)

        setcantidadProducto(1)

        setTimeout(() => {
            setLoading(true)
        }, 100);
        setTimeout(() => {
            setLoading(false)
            setCarritoItem(true)
        }, 1000);
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

                <ul className={styles.PrincipalProduct}>
                    <li>
                        <article className={styles.productInnerContent}>

                            <Link href={`/producto/${slug}`} passHref>
                                <a>
                                    <Image src={imageUrl} alt={imageAlt} title={name} width={380} height={250} />
                                </a>
                            </Link>
                            <h5>{name}</h5>
                            <p dangerouslySetInnerHTML={{ __html: short_description.substr(0, 180) }}></p>
                            <div>
                                {
                                    !salePrice ?
                                        <h3> $ {price}</h3>
                                        :
                                        <div>
                                            <h4> $ <strike>{regularPrice}</strike></h4>
                                            <h3>$ {salePrice}</h3>
                                        </div>
                                }
                            </div>
                        </article>

                        <form onSubmit={handleSubmit}>
                            <article className={styles.AddCart}>
                                <input type="number" name="cantidad" id="cantidad" min="1" max="10" value={cantidadProducto} onChange={handleCantidadProducto} />
                                <button>
                                    <Image src="/img/shopping-cart.png" alt="producto" width={25} height={25} />
                                    {!isLoading ? "agregar" : "agregando..."}
                                </button>

                                {!carritoItem
                                    ? null : <Link href="/carrito" passHref>
                                        <a>
                                            <Image src="/img/shopping-cart.png" alt="producto" width={25} height={25} />
                                            ver carrito
                                        </a>
                                    </Link>}




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

            </article>

        </>
    );
}

export default ProductSlider;

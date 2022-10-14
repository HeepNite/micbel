
import Image from "next/future/image";
import Link from "next/link";
import styles from "../../styles/components/general/ProductSlider.module.css";
import { BsArrowLeftCircleFill, BsFillArrowRightCircleFill, } from "react-icons/bs";

import { useProductos } from "../hooks/contexHooks/useProductos";
import { useSlider } from "../hooks/useSlider";
import { useAddCarrito } from "../hooks/crudCarrito/useAddCarrito";


const ProductSlider = () => {

    const { dataProductos } = useProductos() || []

    const { producto, handLeft, handleRight } = useSlider(dataProductos) || []

    const { isLoading, carritoItem, handleSubmit } = useAddCarrito(producto) || []

    const { name, shortDescription, salePrice, regularPrice, img, slug } = producto || []

    if (!producto) {
        return null
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
                                  <Image src={img} alt={name} title={name} width={300} height={200} /> 
                                </a>
                            </Link>
                            <h5>{name}</h5>
                            <p dangerouslySetInnerHTML={{ __html: shortDescription.substr(0, 180) }}></p>
                            <div>
                                {
                                    !salePrice ?
                                        <h3> $ {regularPrice}</h3>
                                        :
                                        <div>
                                            <h4> $ <strike>{parseInt(regularPrice)}</strike></h4>
                                            <h3>$ {parseInt(salePrice)}</h3>
                                        </div>
                                }
                            </div>
                        </article>

                        <form onSubmit={handleSubmit}>
                            <article className={styles.AddCart}>
                                {/*   <input type="number" name="cantidad" id="cantidad" min="1" max="10" value={cantidadProducto} onChange={(e) => { setcantidadProducto(parseInt(e.target.value)) }} /> */}
                                <button>
                                    <Image src="/img/shopping-cart.png" alt="producto" width={25} height={25} />
                                    {!isLoading ? "agregar" : "agregando..."}
                                </button>

                                {!carritoItem
                                    ? null
                                    : <Link href="/carrito" passHref>ver carrito...</Link>}

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

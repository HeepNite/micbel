import Image from "next/image";
import { useEffect, useState } from "react";
import { MdTagFaces } from 'react-icons/md'
import styles from "../../styles/components/pages/Carrito.module.css";
import Link from "next/link";
import { useCarrito } from "../hooks/contexHooks/useCarrito";
import { useUpdateCarrito } from "../hooks/crudCarrito/useUpdateCarrito";
import { useDeleteCarrito } from "../hooks/crudCarrito/useDeleteCarrito";


const CarritoM = () => {

    const { carrito, totalProd, } = useCarrito() || []
    const { actualizarCantidad } = useUpdateCarrito() || []
    const { eliminarProducto, onReset, cleanCart, } = useDeleteCarrito() || []
    const [isMounted, setMount] = useState(false)

    useEffect(() => {
        setMount(true)
    }, [])


    const { precioTotalDes, precioTotalReg } = totalProd

    return (
        <>
            {isMounted
                ?
                <div className={styles.carritoContainer}>

                    <section className={styles.carritoInnerContainer}>
                        {carrito.length === 0
                            ?
                            <>
                                <div className={styles.warningCarrito}>
                                    <p>Como! no agregaste nada aun... no te preocupes, puedes volver a nuestra area de productos, e llevarte lo que necesites a solo un click; que esperas estan ansiosos de irse con vos! </p>
                                    <Link href="/">Tienda</Link>
                                    <MdTagFaces /><MdTagFaces /><MdTagFaces /><MdTagFaces />
                                </div>

                            </>
                            :
                            (
                                <ul>

                                    {carrito?.map(producto => (
                                        <li key={producto.slug}>
                                            <Link href={`/producto/${producto.slug}`} passHref>
                                                <a>
                                                    <Image src={producto.img} alt={producto.imageAlt} title={producto.name} width={200} height={200} />
                                                </a>
                                            </Link>

                                            <h3 >{producto.name}</h3>
                                            <p dangerouslySetInnerHTML={{ __html: producto.shortDescription.substr(0, 40) }}></p>

                                            {!producto.salePrice ? <h3>$ {producto.regularPrice * producto.cantidad}</h3> :
                                                <div>
                                                    <h4> $ <strike>{producto.regularPrice * producto.cantidad}</strike></h4>
                                                    <h3>$ {producto.salePrice * producto.cantidad}</h3>
                                                </div>
                                            }
                                            <article>
                                                <input type="number" placeholder="Cantidad" min="1" max="10" value={producto.cantidad} onChange={(e) => actualizarCantidad({
                                                    cantidad: parseInt(e.target.value), slug: producto.slug, salePrice: producto.salePrice, regularPrice: producto.regularPrice
                                                })} />


                                                <button onClick={() => { eliminarProducto(producto.slug) }}> Eliminar</button>
                                            </article>

                                        </li>
                                    ))}

                                </ul>
                            )}

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
                                    <h4>Precio Regular total</h4>
                                    <h4>${precioTotalReg}</h4>
                                </li>
                                <li>
                                    <h4>Precio total Descuento</h4>
                                    <h4>${precioTotalDes}</h4>
                                </li>
                                <li>
                                    <h4> total</h4>
                                    <h4>${precioTotalDes + precioTotalReg}</h4>
                                </li>
                            </ul>
                            <div>
                                <button>
                                    <Link href={'/pago'}>
                                        Procesar Pago
                                    </Link>
                                </button>

                                <button onClick={onReset}>
                                    {!cleanCart ? 'Limpiar' : 'Limpiando...'}
                                </button>
                            </div>


                        </form>
                    </section>
                </div>
                : null
            }
        </>
    );
}

export default CarritoM;
import Image from "next/image";
const CarritoM = () => {
    return (
        <div>
            <section>

                <ul>
                    <li>
                        <Image src="/images/carrito.png" alt="carrito" width={300} height={300} />
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
                        <Image src="/images/carrito.png" alt="carrito" width={300} height={300} />
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
                        <Image src="/images/carrito.png" alt="carrito" width={300} height={300} />
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
            <section>
                <article>
                    <h2>Fecha</h2>
                </article>
                <article>
                    <h2>lorem Ipsum</h2>
                </article>
            </section>
            <section>
                <article>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                    <input type="submit" value='realizar pedido' />
                    <input type="submit" value='Limpiar carrito' />

                </form>
            </section>
        </div>
    );
}

export default CarritoM;
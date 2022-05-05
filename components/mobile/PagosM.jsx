import styles from '../../styles/components/pages/Pagos.module.css';
import Image from 'next/image';
import BannerHeroOne from '../general/BannerHeroOne';
import BannerHeroThree from '../general/BannerHeroThree';
const PagosM = () => {
    return (
        <div className={styles.pagosMContainer}>
            {/* esta parte sera estatica y un componente */}
            <section className={styles.pagosHero}>
                <BannerHeroOne />
            </section>

            {/* formulario de registro o logueo dependiendo de la cuenta esto debe ir en un coponente aparte */}
            <section className={styles.pagosFormularioRegistro}>
                <article>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </article>

                <article>
                    <form className={styles.Registration} action="">
                        <input type="text" placeholder="Nombre" />
                        <input type="text" placeholder="Apellido" />
                        <input type="email" placeholder="Correo" />
                        <input type="tel" placeholder="Telefono" />
                        <input type="password" placeholder="Contraseña" />
                        <input type="password" placeholder="Confirmar Contraseña" />
                        <input type="text" placeholder="Direccion" />
                        <input type="text" placeholder="Ciudad" />
                        <input type="text" placeholder="Estado" />
                        <input type="number" placeholder="Codigo Postal" />
                        <input type="text" placeholder="País" />
                        <input type="text" placeholder="Nombre de Usuario" />

                        <textarea name="" id="" cols="30" rows="10" placeholder="Detalle"></textarea>
                        <input type="radio" value="Registrarme" />
                        <label>guardar esta direccion como principal</label>
                        <input type="submit" value="Registrarse" />
                    </form>

                    {/*  <form className={styles.LogIn} action="">
                        <input type="text" placeholder="Nombre de Usuario" />
                        <input type="password" placeholder="Contraseña" />
                        <input type="submit" value="Iniciar Sesión" />
                    </form> */}
                </article>
            </section>

            {/* guardar nueva dieccion de facturacion dar tambien la chance de que puedan mandar a otras personas o negocios*/}
            <section className={styles.pagosFormularioFacturacion}>
                <article>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </article>

                <article>
                    <form className={styles.Facturacion} action="">
                        <input type="tel" placeholder="Telefono" />
                        <input type="text" placeholder="Direccion" />
                        <input type="text" placeholder="Ciudad" />
                        <input type="text" placeholder="Estado" />
                        <input type="text" placeholder="Codigo Postal" />
                        <input type="text" placeholder="País" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Detalle"></textarea>
                        <input type="radio" value="Registrarme" />
                        <label>guardar la direccion como principal</label>
                        <input type="submit" value="guardar" />
                    </form>
                </article>
            </section>

            {/* eleccion de horarios para el delivery  verificar si solo activar en el momento de elegir el metodo de pago */}
            <section className={styles.pagosDelivery}>
                <article>
                    <h2>Lorem Ipsum</h2>
                </article>
                <form action="">
                    <input type="radio" value="" />
                    <label>Lorem Ipsum from do 10pm</label>
                    <input type="radio" value="" />
                    <label>Lorem Ipsum from do 10pm</label>
                    <input type="radio" value="" />
                    <label>Lorem Ipsum from do 10pm</label>
                </form>
            </section>

            {/* cupones de descuento */}
            <section className={styles.pagosCupones}>
                <article>
                    <h2>lorem Ipsum</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </article>
                <form action="">
                    <input type="text" placeholder="Codigo" />
                    <input type="submit" value="Aplicar" />
                </form>
            </section>

            {/* metodos de pago */}
            <section className={styles.metodoPago}>
                <article>
                    <h2>Lorem Ipsum</h2>
                </article>
                <form action="">
                    <input type="radio" value="" />
                    <label>pago en tarjetas</label>
                    <input type="radio" value="" />
                    <label>pago en efectivo</label>
                    <input type="radio" value="" />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer
                    </p>
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
                </form>
            </section>

            {/* banner grid de las imagenes en slider */}
            <section className={styles.indexDestacateProduct}>
                <BannerHeroThree />
            </section>
        </div>
    );
}

export default PagosM;
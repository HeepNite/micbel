import styles from '../../styles/components/pages/Pagos.module.css';
import BannerHeroOne from '../general/banners/BannerHeroOne';
import BannerHeroThree from '../general/banners/BannerHeroThree';
import { PagoDetalle } from '../general/cart/PagoDetalle';
import { DIfAddress } from '../general/users/DIfAddress';
import { LoginUsuario } from '../general/users/loginUsuario';
import { RegUsuario } from '../general/users/RegUsuario';


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
                    <h2>Ya tienes cuenta?</h2>
                    <p>Genial! ingresa para continuar con tu pedido...</p>
                    <LoginUsuario />
                    <h2>No posees cuenta?</h2>
                    <p>No te preocupes lo solucionamos en un minuto! registrate y disfruta de tu proceso de compra.</p>
                    <RegUsuario />
                </article>

            </section>
            {/* guardar nueva dieccion de facturacion dar tambien la chance de que puedan mandar a otras personas o negocios*/}
            <section className={styles.pagosFormularioFacturacion}>
                <article>
                    <h2>Para otra persona o negocio?</h2>
                    <p>Eres lo mas! registra su direccion... nos encargaremos del resto.</p>
                </article>
                <DIfAddress />
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
                    <PagoDetalle />
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
export default PagosM

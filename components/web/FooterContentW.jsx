import Link from "next/link";
import { FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare } from 'react-icons/fa';
import Image from "next/image";
import styles from '../../styles/components/general/FooterContentW.module.css';
const FooterContentW = () => {
    return (
        <div className={styles.footerContainerW}>
            <section>
                <form action="">
                    <article>
                        <input type="email" placeholder="Sumate y se el primero en enterarte" />
                        <input type="submit" value="Suscribirse" />
                    </article>
                </form>
            </section>
            <section>
                <article>
                    <img src="#" alt="logo" />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the standard dummy text ever since the 1500s,
                    </p>
                    <div>
                        <a href="https://facebook.com"><FaFacebookSquare /></a>
                        <a href="https://instagram.com"><FaInstagramSquare /></a>
                        <a href="https://whatsapp.com"><FaWhatsappSquare /></a>
                    </div>
                </article>
                <article>
                    <h5>Nuestras Locaciones</h5>
                    <ul>
                        <li>
                            <Link href="/" >Salta</Link>
                            <Link href="/" >Tucuman</Link>
                            <Link href="/" >Santiago</Link>
                            <Link href="/" >Jujuy</Link>
                        </li>
                    </ul>
                </article>
                <article>
                    <h5>Nuestros Proveedores</h5>
                    <ul>
                        <li>Catalogos</li>
                        <li>Marcas</li>
                        <li>Destacados</li>
                        <li>Proximamente</li>
                    </ul>
                </article>
                <article>
                    <h5>MicBel</h5>
                    <ul>
                        <li>Politicas de Privacidad</li>
                        <li>Terminos y Condiciones</li>
                        <li>Nuestas Promociones</li>
                        <li>Trabaja con nosotros</li>
                    </ul>
                </article>
                <article>
                    <h5>Servicio al cliente</h5>
                    <ul>
                        <li>Como comprar</li>
                        <li>Formas de pago</li>
                        <li>Cambios y devoluciones</li>
                        <li>Preguntas Frecuentes</li>
                    </ul>
                </article>
            </section>
        </div>
    );
}

export default FooterContentW;
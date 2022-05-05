import styles from '../../styles/components/pages/Cuenta.module.css';
import Link from 'next/link';
import Image from 'next/image';
import BannerHeroOne from '../general/BannerHeroOne';
import BannerHeroThree from '../general/BannerHeroThree';
import ProductSlider from '../general/ProductSlider';
import ReviewBaner from '../general/ReviewBanner';
const CuentaM = () => {
    return (
        <div className={styles.cuentaMContainer}>
            {/* esta parte sera estatica y un componente */}
            <section className={styles.cuentaHero}>
                <BannerHeroOne />
            </section>
            {/* esta parte genera un nuevo seccion dependiendo del menu */}
            <section className={styles.cuentaProfile}>
                <article>
                    <Image src="/img/profile.jpg" alt="Nosotros" width={100} height={100} />
                </article>
                <article>
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </article>
                <article>
                    <h3>Lorem Impsum</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typeset industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    </p>
                </article>
            </section>
            {/* toma los valores del perfil de la persona */}
            <section className={styles.cuentaQuali}>
                <article>
                    <div className={styles.qualiContent}>
                        <h3>Lorem Impsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        </p>
                        <Image src="/img/pexels-2.jpeg" alt="Nosotros" width={100} height={100} />
                    </div>
                    <div className={styles.qualiUser}>
                        <span>Nombre</span>
                        <h5>Mariano</h5>
                        <span>Apellido</span>
                        <h5>Barrionuevo</h5>
                    </div>
                    <form action="">
                        <textarea name="" id="" cols="30" rows="10" placeholder='Lorem Impsum'></textarea>
                        <div>
                            <input className={styles.calificar} type="submit" value="Calificar" />
                            <input className={styles.limpiar} type="submit" value="Limpiar" />
                        </div>
                    </form>

                </article>
            </section>
            {/* banner desde la base de datos */}
            <section className={styles.cuentaBanner}>
               <BannerHeroThree/>
            </section>
            {/* productos guardados (favoritos, recomprar, especiales etc) */}
            <section className={styles.cuentaProducts}>
             <ProductSlider/>
            </section>
            {/* testimonios sobre productos recomendados para este cliente (proximamente) */}
            <section className={styles.cuentaTestimonials}>
            <ReviewBaner/>
            </section>
        </div>



    );
}

export default CuentaM;
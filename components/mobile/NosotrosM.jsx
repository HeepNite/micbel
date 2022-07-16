import Image from 'next/image';
import styles from '../../styles/components/pages/Nosotros.module.css';
import BannerHero from '../general/BannerHero';
import BannerHeroThree from '../general/BannerHeroThree';
import CategoriesBar from '../general/CategoriesBar';

const NosotrosM = () => {
    return (
        <div className={styles.nosotrosMContainer}>
            {/* imagenes e info desde la base de datos */}
            <section className={styles.nosotrosHero}>
                <BannerHero />
            </section>
            {/* categorias */}
            <section className={styles.nosotrosCategories}>
                <CategoriesBar />
            </section>
            {/* verificar si es estatico solo cargar la info (mision vision etc) */}
            <section className={styles.nosotrosMicbelInfo}>
                <article className={styles.infoImg}>
                    <Image src="/img/pexels-3.jpeg" alt="Nosotros" width={500} height={200} />
                </article>
                <article className={styles.infoContent}>
                    <h2>Historia</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
                    </p><br />
                    <div className={styles.infoInnerContent}>
                        <div>
                            <h2>Visión</h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div>
                            <h2>Visión</h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </article>

            </section>
            {/* si es estatico cagar las imagenes del banner  */}
            <section className={styles.nosotrosBannerImages}>
                <BannerHeroThree />

            </section>
            {/* verificar si vamos a cargar mas datos en caso que sea solo texto carlo estatico (trabajo) */}
            <section className={styles.nosotrosMicbelInfo}>
                <article className={styles.infoImg}>
                    <Image src="/img/pexels-3.jpeg" alt="Nosotros" width={500} height={200} />
                </article>
                <article className={styles.infoContent}>
                    <h2>Historia</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
                    </p><br />
                    <div className={styles.infoInnerContent}>
                        <div>
                            <h2>Visión</h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div>
                            <h2>Visión</h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </article>

            </section>
            {/* verificar si ellos daran trabajos podemos agregar la categoria para que cargen pdf (curriculm) */}
            <section className={styles.nosotrosContactForm}>
                <article className={styles.formImg}>
                    <Image src="/img/pexels-3.jpeg" alt="Nosotros" width={550} height={500} />
                </article>
                <div className={styles.formContent}>
                    <form action="">
                        <input type="text" placeholder="Nombre" />
                        <input type="text" placeholder='Apellido' />
                        <input type="email" placeholder="Correo" />
                        <input type="tel" placeholder='Telefono' />
                        <input type="text" placeholder="Asunto" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                        <button>Enviar</button>
                    </form>
                 
                </div>
            </section>
            {/* cargar de manera estatica la info de las empresas con la que trabajan */}
            <section className={styles.nosotrosMicbelInfo}>
                <article className={styles.infoImg}>
                    <Image src="/img/pexels-3.jpeg" alt="Nosotros" width={400} height={200} />
                </article>
                <article className={styles.infoContent}>
                    <h2>Historia</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
                    </p><br />
                    <div className={styles.infoInnerContent}>
                        <div>
                            <h2>Visión</h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div>
                            <h2>Visión</h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </article>

            </section>
        </div>
    );
}

export default NosotrosM;
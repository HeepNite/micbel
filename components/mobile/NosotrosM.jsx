import Image from 'next/image';
import styles from '../../styles/components/pages/Nosotros.module.css';
import BannerHero from '../general/BannerHero';
import BannerHeroThree from '../general/BannerHeroThree';
import CategoriesBar from '../general/CategoriesBar';

const NosotrosM = ({ data }) => {

    const { ImagenBannerUno, TituloUno, DescripcionUno,
        TituloDos, DescripcionDos,
        TituloTres, DescripcionTres, ImagenBannerDos, ImagenBannerFondo,
        TituloCuatro, DescripcionCuatro, TituloCinco, DescripcionCinco,
        TituloSeis, DescripcionSeis, ImagenBannerTres, TituloSiete, DescripcionSiete,
        TituloOcho, DescripcionOcho, TituloNueve, DescripcionNueve,
    } = data;

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
                    <Image src={ImagenBannerUno.url} alt="Nosotros" width={500} height={200} />
                </article>
                <article className={styles.infoContent}>
                    <h2>{TituloUno}</h2>
                    <p>{DescripcionUno}</p>
                    <br />
                    <div className={styles.infoInnerContent}>
                        <div>
                            <h2>{TituloDos}</h2>
                            <p>{DescripcionDos}</p>
                        </div>
                        <div>
                            <h2>{TituloTres}</h2>
                            <p> {DescripcionTres} </p>
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
                    <Image src={ImagenBannerDos.url} alt="Nosotros" width={500} height={200} />
                </article>
                <article className={styles.infoContent}>
                    <h2>{TituloCuatro}</h2>
                    <p>{DescripcionCuatro}</p>
                    <br />
                    <div className={styles.infoInnerContent}>
                        <div>
                            <h2>{TituloCinco}</h2>
                            <p>{DescripcionCinco}</p>
                        </div>
                        <div>
                            <h2>{TituloSeis}</h2>
                            <p>{DescripcionSeis}</p>
                        </div>
                    </div>
                </article>

            </section>
            {/* verificar si ellos daran trabajos podemos agregar la categoria para que cargen pdf (curriculm) */}
            <section className={styles.nosotrosContactForm}>
                <article className={styles.formImg}>
                    <Image src={ImagenBannerFondo.url} alt="Nosotros" width={550} height={500} />
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
                    <Image src={ImagenBannerTres.url} alt="Nosotros" width={400} height={200} />
                </article>
                <article className={styles.infoContent}>
                    <h2>{TituloSiete}</h2>
                    <p>{DescripcionSiete}</p>
                    <br />
                    <div className={styles.infoInnerContent}>
                        <div>
                            <h2>{TituloOcho}</h2>
                            <p>{DescripcionOcho}</p>
                        </div>
                        <div>
                            <h2>{TituloNueve}</h2>
                            <p>{DescripcionNueve}</p>
                        </div>
                    </div>
                </article>

            </section>
        </div>
    );
}

export default NosotrosM;
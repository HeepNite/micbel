import Image from 'next/image';
import styles from "../../styles/components/general/GeneralPages.module.css";
import BannerHeroOne from "../general/BannerHeroOne";


const TerminosM = ({ dataTerminos }) => {




    const { Titulo, Descripcion, DescripcionDos,
        DescripcionBannerDos, DescripcionBannerTres, ImagenBannerDes,
        ImagenBannerDesDos, ImagenBannerDesTres
        , ImagenBannerDesCuatro } = dataTerminos[0]

    return (
        <div className={styles.GeneralPagesMContainer}>

            <section className={styles.GeneralPagesHero}>

            <BannerHeroOne /> 

            </section>

            <section className={styles.GeneralPagesContent}>
                <h2>{Titulo}</h2>
                <article>
                    <p>
                        {Descripcion}
                    </p>
                </article>
                <article className={styles.GeneralPagesImg}>
                    <Image src={ImagenBannerDes.url} alt="politicas" width={400} height={150} priority />
                </article>
                <article>
                    <p>
                        {DescripcionDos}
                    </p>
                </article>
                <article className={styles.GeneralPagesImgThree}>
                    <div className={styles.GeneralPagesInnerImgThree}>
                        <Image src={ImagenBannerDesDos.url} alt="politicas" width={300} height={100} priority />
                        <Image src={ImagenBannerDesTres.url} alt="politicas" width={300} height={110} priority />
                        <Image src={ImagenBannerDesCuatro.url} alt="politicas" width={300} height={140} priority />
                    </div>
                    <div className={styles.GeneralPagesInnercContent}>
                        <p>
                            {DescripcionBannerDos}
                        </p>
                        <p>
                            {DescripcionBannerTres}
                        </p>
                    </div>

                </article>
            </section>
        </div>
    );
}

export default TerminosM;
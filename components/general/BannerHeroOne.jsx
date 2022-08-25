import Image from "next/image";
import styles from "../../styles/components/general/BannerHeroOne.module.css";
import { useBannerHeroOne } from "../hooks/useBannerHeroOne";

const BannerHeroOne = () => {

    const { BannerHeroOne } = useBannerHeroOne()

    const { TituloBanner, DescripcionBanner, ImagenFondo } = BannerHeroOne[0]

    return (
        <>
            <article className={styles.BannerHeroOneContent}>
                <div>
                    <h1>{TituloBanner}</h1>
                    <p>{DescripcionBanner}</p>
                </div>

            </article>
            <article className={styles.BannerHeroOneImg}>
                <Image src={ImagenFondo.url} alt="Nosotros" width={500} height={330} priority />
            </article>
        </>
    );
}

export default BannerHeroOne;
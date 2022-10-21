import Image from "next/future/image";
import styles from '../../../styles/components/general/BannerHeroOne.module.css'
import{useBannerHeroOne} from '../../hooks/contexHooks/index'


const BannerHeroOne = () => {

    const { dataBanerHeroOne } = useBannerHeroOne() || []

    if (!dataBanerHeroOne) {
        return null
    }

    const { TituloBanner, DescripcionBanner, ImagenFondo } = dataBanerHeroOne[0] || {}

    return (
        <>
            <article className={styles.BannerHeroOneContent}>
                <div>
                    <h1>{TituloBanner}</h1>
                    <p>{DescripcionBanner}</p>
                </div>

            </article>
            <article className={styles.BannerHeroOneImg}>
                <Image src={ImagenFondo.url} alt="Nosotros" width={330} height={230} priority />
            </article>
        </>
    );
}

export default BannerHeroOne;
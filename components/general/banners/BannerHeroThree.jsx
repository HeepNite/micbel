import Image from "next/image";
import styles from '../../../styles/components/general/BannerHeroThree.module.css'
import { useBannerHeroThree } from '../../hooks/contexHooks'


const BannerHeroThree = () => {

    const dataBannerHeroThree = useBannerHeroThree() || [];

    if (!dataBannerHeroThree) {
        return null;
    }

    const { ImagenUno, ImagenDos, ImagenTres } = dataBannerHeroThree[0] || {};

    return (
        <div className={styles.BannerHeroThreeContainer}>
            <article>
                <Image src={ImagenUno.url} alt="logo" width={220} height={250} />
            </article>
            <article>
                <Image src={ImagenDos.url} alt="logo" width={220} height={115} priority />
            </article>
            <article>
                <Image src={ImagenTres.url} alt="logo" width={220} height={123} />
            </article>
        </div>
    );
}

export default BannerHeroThree;
import Image from "next/image";
import styles from "../../styles/components/general/BannerHeroThree.module.css";
import { useBannerHeroThree } from "../hooks/useBannerHeroThree";


const BannerHeroThree = () => {

    const { BannerHeroThree } = useBannerHeroThree()

    const { ImagenUno, ImagenDos, ImagenTres } = BannerHeroThree[0]




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
import Image from "next/image";
import styles from "../../styles/components/general/BannerHeroThree.module.css";
const BannerHeroThree = () => {
    return (
        <div className={styles.BannerHeroThreeContainer}>
            <article>
                <Image src="/img/pexels-1.jpeg" alt="logo" width={220} height={250} />
            </article>
            <article>
                <Image src="/img/pexels-2.jpeg" alt="logo" width={220} height={115} />
            </article>
            <article>
                <Image src="/img/pexels-3.jpeg" alt="logo" width={220} height={123} />
            </article>
        </div>
    );
}

export default BannerHeroThree;
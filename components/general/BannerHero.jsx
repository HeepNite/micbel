import Image from "next/image";
import styles from "../../styles/components/general/BannerHero.module.css";
const BannerHero = () => {
    return (
        <>
            <article className={styles.BannerHeroContent}>
                <div>
                    <h1>Lorem Ipsum</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p><br />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry

                    </p>
                </div>
                <Image src="/img/pexels-5.jpeg" alt="Nosotros" width={140} height={100} />
            </article>
            <article className={styles.BannerHeroImg}>
                <Image src="/img/pexels-2.jpeg" alt="Nosotros" width={500} height={350} priority />
            </article>
        </>
    );
}

export default BannerHero;
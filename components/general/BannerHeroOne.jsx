import Image from "next/image";
import styles from "../../styles/components/general/BannerHeroOne.module.css";
const BannerHeroOne = () => {
    return (
        <>
            <article className={styles.BannerHeroOneContent}>
                <div>
                    <h1>Lorem Ipsum</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p><br />

                </div>

            </article>
            <article className={styles.BannerHeroOneImg}>
                <Image src="/img/pexels-2.jpeg" alt="Nosotros" width={500} height={330} />
            </article>
        </>
    );
}

export default BannerHeroOne;
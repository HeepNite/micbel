import styles from '../../styles/components/general/FooterContentM.module.css';
import Image from 'next/image';
const FotterContentM = () => {
    return (
        <div className={styles.footerContainerM}>
            <section className={styles.footerInnerContainer}>
                <article className={styles.subsContent}>
                    <h2>Lorem Ipsum</h2>
                    <h5>Lorem Ipsum</h5>
                    <form action="">
                        <div>
                            <input type="text" placeholder='Quieres ser el primero en enterarte ?' />
                            <input type="submit" value="Suscribirse" />
                        </div>
                    </form>
                </article>

                <article className={styles.higline}>
                <Image width={35} height={35} src="/img/logoMicbel.png" alt="Micbel Logo" />
                <p>
                Todos los derechos reservados Micbelgrup.com || By HeepNite Brand 
                </p>
                <Image width={32} height={32} src="/img/chat.png" alt="Micbel Logo" />
                </article>
            </section>
        </div>
    );
}

export default FotterContentM;
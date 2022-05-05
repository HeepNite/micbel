
import Image from "next/image";
import styles from "../../styles/components/general/ReviewBanner.module.css";
const ReviewBaner = () => {
    return ( 
        <>
         <article className={styles.testimonialsContent}>
                    <h2>Testimonios</h2>
                    <ul>
                        <li>
                            <Image src="/img/profile.jpg" alt="testimoniales" width={80} height={80} />
                            <h3>
                                Lorem Ipsum
                            </h3>
                            <h5>
                                Lorem Ipsum
                            </h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an
                            </p>
                        </li>
                    </ul>

                </article>
                <article className={styles.testimonialsImages}>
                    <Image src="/img/pexels-4.jpeg" alt="producto" width={400} height={870} />
                    <Image src="/img/pexels-4.jpeg" alt="producto" width={400} height={490} />
                </article>
        </>
     );
}
 
export default ReviewBaner;
import Image from "next/image"
import styles from "../../styles/components/general/BannerCarrito.module.css"
const CarritoBanner = () => {
    return (
        <div className={styles.CarritoBannerContainer}>
            <article className={styles.bannerCarritoContent}>
                <Image className={styles.img} src="/img/pexels-3.jpeg" alt="carrito" width={200} height={200} />
                <h4><strike>$200 </strike> </h4>
                <h3>$100</h3>
                <p> te ahorraras en esta compra $100 ( 50% )</p>
            </article>
            <article className={styles.CarritoBannerForm}>
                <form action="">
                    <input type="number" placeholder="cantidad" />
                    <button>Agregar al carrito</button>
                    <input type='radio' />
                    <input type='radio' />
                    <input type='radio' />
                    <input type='radio' />
                    <input type='radio' />
                </form>
                <p>guardar para mas tarde</p>
                <button>Guardar</button>
            </article>
        </div>
    )
}

export default CarritoBanner
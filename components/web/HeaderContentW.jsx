import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/components/general/HeaderContentW.module.css';
const HeaderContentW = () => {
    return (
        <div className={styles.headerContainerW}>
            <section className={styles.headline}>
                <p>Aprovecha el dia de <span>MicBel</span> te damos <span>50%</span> de descuento</p>
                {/* selector by locations */}
                <h5>Locaciones</h5>
                {/* show numper phone depending locations */}
                <h5>telefonos</h5>
            </section>
            <section className={styles.headerContent}>

                <article className={styles.logo}>
                    <Link href='/' passHref>
                        <Image width={80} height={40} src="/img/logoMicbel.png" alt="Micbel Logo" />
                    </Link>
                </article>

                <article className={styles.menu}>
                    <form action="">
                        <div className={styles.search}>
                            <input type="text" placeholder="Mas de 10000 productos para vos!" />
                            <input type="submit" value="Buscar" />
                        </div>
                    </form>
                    <nav className={styles.nav}>
                        <Link href="/">Inicio</Link>
                        <Link href="/productos">Productos</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/cuenta">Cuenta</Link>
                    </nav>
                </article>

                {/* transform in hamburger menu */}
                <article className={styles.admin}>
                    <Link href="/carrito">ingresar registro</Link>
                    <Link href="/carrito">Favoritos</Link>
                    <Link href="/carrito">carrito</Link>
                </article>
            </section>
        </div>
    );
}

export default HeaderContentW;
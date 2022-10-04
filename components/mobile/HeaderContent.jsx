import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/components/general/HeaderContentM.module.css';

import { RiMenuFoldFill } from 'react-icons/ri';
import { GiShoppingCart } from 'react-icons/gi'

import HamburgerMenu from "./HamburgerMenu";
import { useCarrito } from "../hooks/useCarrito";

const HeaderContentM = () => {

    const { carrito } = useCarrito()
    console.log(carrito)

    return (
        <div className={styles.headerContainerM}>

            <section className={styles.headerContentM}>

                <div className={styles.principalBar}>
                    <article className={styles.menuIcons}>
                        <RiMenuFoldFill />
                    </article>
                    <article className={styles.logo}>
                        <Link href='/' passHref>
                            <a>
                                <Image width={80} height={50} src="/img/logoMicbel.png" alt="Micbel Logo" />
                            </a>
                        </Link>
                    </article>
                    {/* transform in hamburger menu */}
                    <article className={styles.menuIcons}>
                        <Link href="/carrito" passHref>
                            <a>
                            {carrito.map(producto => (
                                <div>

                                </div>
                            ))}
                            <GiShoppingCart />
                            </a>
                           
                        </Link>
                    </article>
                </div>

                <article className={styles.menuM}>
                    <form action="">
                        <div className={styles.search}>
                            <input type="text" placeholder="Mas de 10000 productos para vos!" />
                            <input type="submit" value="Buscar" />
                        </div>
                    </form>
                    <nav className={styles.nav}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/cuenta">Cuenta</Link>

                    </nav>
                </article>


            </section>
        </div>

    );
}

export default HeaderContentM;
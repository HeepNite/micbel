import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/components/general/HeaderContentM.module.css';

import { RiMenuFoldFill } from 'react-icons/ri';

import HamburgerMenu from "./HamburgerMenu";
const HeaderContentM = () => {
    return (
        <div className={styles.headerContainerM}>

            <section className={styles.headerContentM}>

                <div className={styles.principalBar}>
                    <article className={styles.logo}>
                        <Link href='/' passHref>
                            <a>
                                <Image width={80} height={50} src="/img/logoMicbel.png" alt="Micbel Logo" />
                            </a>
                        </Link>
                    </article>
                    {/* transform in hamburger menu */}
                    <article className={styles.admin}>
                        <RiMenuFoldFill />
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
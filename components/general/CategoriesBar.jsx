import Link from "next/link";
import Image from 'next/image';
import styles from "../../styles/components/general/CategoriesBar.module.css";
const Categoriesbar = () => {
    return (

        <article className={styles.globalCategories}>
            <ul>
                <li>

                    <Link href='/' passHref>
                        <a>
                            <Image src="/img/olives.png" alt="logo" width={50} height={50} />
                        </a>
                    </Link>

                </li>
                <li>

                    <Link href='/' passHref>
                        <a>
                            <Image src="/img/ham.png" alt="logo" width={50} height={50} />
                        </a>
                    </Link>

                </li>
                <li>

                    <Link href='/' passHref>
                        <a>
                            <Image src="/img/cheese.png" alt="logo" width={50} height={50} />
                        </a>
                    </Link>

                </li>
                <li>

                    <Link href='/' passHref>
                        <a>
                            <Image src="/img/healthy-food.png" alt="logo" width={50} height={50} />
                        </a>
                    </Link>

                </li>
                <li>
                    <Link href='/' passHref>
                        <a>
                            <Image src="/img/milk.png" alt="logo" width={50} height={50} />
                        </a>
                    </Link>
                </li>
            </ul>
        </article>
    );
}

export default Categoriesbar;
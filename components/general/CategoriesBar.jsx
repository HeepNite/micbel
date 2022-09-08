import Link from "next/link";
import Image from 'next/image';
import styles from "../../styles/components/general/CategoriesBar.module.css";
import { useCategoriasBar } from "../hooks/useCategoriasBar";

const Categoriesbar = () => {

    const { dataCategoriasBar } = useCategoriasBar() || []


    if (!dataCategoriasBar) {
        return null
    }

    return (

        <article className={styles.globalCategories}>
            <ul>
                {dataCategoriasBar.map(categoria => (
                    <li key={categoria.id}>
                        <Link href={`/categorias/${categoria.UID}`} passHref>
                            <a>
                                <Image src={categoria.ImagenCategoria.url} alt="logo" width={50} height={50} priority />
                            </a>
                        </Link>

                    </li>
                ))}
            </ul>

        </article>

    );


}

export default Categoriesbar;
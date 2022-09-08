import { useRouter } from "next/router"
import { getCategoria, getCategoriasBar } from "../../helper/services"
const Categorias = () => {

    const router = useRouter()


    return (
        <div>Categorias</div>
    )
}


export async function getStaticPaths() {
    const dataCategorias = await getCategoriasBar()

    const paths = dataCategorias.map(cat => ({
        params: { categoria: cat.UID }

    }))

    return {
        paths,
        fallback: false
    }

}


export async function getStaticProps({ params: { categoria } }) {

     const dataCategoria = await getCategoria(categoria) 

    return {
        props: {
            dataCategoria
        }
    }
}

export default Categorias
import Layaut from "../components/general/Layout"
import User from "../components/general/User"




const usuario = ({ post }) => {
 
    return (
        <Layaut pagina={'Usuario'}>
            <main>
                <User />
            </main>
        </Layaut>
    )
}

export async function getStaticProps() {

    const res = await fetch(`${process.env.API_URL_WORDPRESS}/wp-json/wp/v2/posts`)
    const post = await res.json()

    return {
        props: {
            post

        }
    }
}
export default usuario
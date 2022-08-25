import Layaut from "../components/general/Layout"
import User from "../components/general/User"
import { getCategorias } from "../helper/Ssr"


const usuario = ({ }) => {

  const data = getCategorias().then(res => console.log(res))

    return (
        <Layaut pagina={'Usuario'}>
            <main>
                <User />
            </main>
        </Layaut>
    )
}

export async function getServerSideProps() {

    return {

        props: {

            data: 'hola'
        }
    }
}


export default usuario
import Layaut from "../components/general/Layout"
import User from "../components/general/User"
import { getProvincias } from "../helper/services"




const usuario = ({ dataProvincias }) => {
    console.log(dataProvincias)

    return (
        <Layaut pagina={'Usuario'}>
            <main>
                <User />
            </main>
        </Layaut>
    )
}

export async function getStaticProps() {
    const dataProvincias = await getProvincias()
    return {
        props: {
            dataProvincias

        }
    }
}
export default usuario
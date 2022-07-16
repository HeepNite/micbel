import Layaut from "../components/general/Layout"
import User from "../components/general/User"


const usuario = () => {
    return (
        <Layaut pagina={'Usuario'}>
            <main>
                <User />
            </main>
        </Layaut>
    )
}

export default usuario
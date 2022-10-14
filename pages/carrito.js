import Layaut from "../components/general/Layout"
import CarritoM from "../components/mobile/CarritoM"


const carrito = () => {
    return (
        <Layaut pagina={'carrito'}>
            <main>
                <CarritoM/>
            </main>
        </Layaut>
    )
}

export default carrito

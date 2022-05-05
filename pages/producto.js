import Layaut from "../components/general/Layout";
import ProductoM from "../components/mobile/ProductoM";
import ProductoW from "../components/web/ProductoW";
const Producto = () => {
    return (
        <Layaut pagina={'Producto'}>
            <main>
                <ProductoM />
                <ProductoW />
            </main>
        </Layaut>
    );
}

export default Producto;
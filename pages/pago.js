import Layaut from "../components/general/Layout";
import PagosM from "../components/mobile/PagosM";
import PagosW from "../components/web/PagosW";

const Pagos = () => {
    return (
        <Layaut pagina={'Pagos'}>
            <main>
                <PagosM />
                <PagosW />
            </main>
        </Layaut>
    );
}

export default Pagos;
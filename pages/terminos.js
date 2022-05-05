import Layaut from "../components/general/Layout";
import TerminosM from "../components/mobile/TerminosM";
import TerminosW from "../components/web/TerminosW";

const Terminos = () => {
    return (
        <Layaut pagina={'Terminos y condiciones'}>
            <main>
                <TerminosM />
                <TerminosW />
            </main>
        </Layaut>
    );
}

export default Terminos;
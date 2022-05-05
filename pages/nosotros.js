import Layaut from "../components/general/Layout";
import NosotrosM from "../components/mobile/NosotrosM";
import NosotrosW from "../components/web/NosotrosW";

const Nosotros = () => {
    return (
        <Layaut pagina={'Nosotros'}>
            <main>
                <NosotrosM />
                <NosotrosW />
            </main>
        </Layaut>
    );
}

export default Nosotros;
import Layaut from "../components/general/Layout";
import PoliticasM from "../components/mobile/PoliticasM";
import PoliticasW from "../components/web/PoliticasW";

const Politicas = () => {
   
    return (
        <Layaut pagina={'Politicas y Privacidad'}>
            <main>
                <PoliticasM />
                <PoliticasW />
            </main>
        </Layaut>
    );
}

export default Politicas;
import Carrito from "../components/general/Carrito";
import Layaut from "../components/general/Layout";
import User from "../components/general/User";
import CuentaM from "../components/mobile/CuentaM";
import CuentaW from "../components/web/CuentaW";

const Cuenta = () => {
    return (
        <Layaut pagina={'Cuenta'}>
            <main>
              {/*   <Carrito />
                <User /> */}
                <CuentaM />
                <CuentaW />
            </main>

        </Layaut>
    );
}

export default Cuenta; 
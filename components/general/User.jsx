import LoginM from "../mobile/LoginM";
import RegistroM from "../mobile/RegistroM";
import styles from "../../styles/components/pages/Usuario.module.css";
import CarritoBanner from "./CarritoBanner";
const User = () => {
    return (
        <main>
            <section className={styles.UsuarioContainerM} >
                <form action="">
                    <span> Ya tienes una cuenta activa en Micbel?</span>
                    <input type="radio" />
                    <label> Iniciar Sesion</label>
                    <LoginM />

                    <span> Aun no tienes una cuenta activa en Micbel?</span>
                    <input type="radio" />
                    <label> Registrar</label>
                    <RegistroM />
                </form>

                <CarritoBanner />
            </section>
        </main>
    );
}

export default User;
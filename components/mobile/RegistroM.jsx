
import styles from "../../styles/components/pages/Registro.module.css";

const RegistroM = () => {

    return (
        <section className={styles.RegistroContainerM}>
            <form>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Registrar" />
            </form>


            <article className={styles.AditionalContent}>
                <p>
                    Al continuar, aceptas <a href="#">las Condiciones de uso </a>
                    y <a href="#"> el Aviso de privacidad </a> de Micbel.
                </p>

                <ul>
                    <li>Necesitas Ayuda?
                        <ul>
                            <li> Olvide mi contraseña</li>
                            <li> Otros Problemas de Inicio de sesion</li>
                        </ul>
                    </li>

                </ul>
            </article>

        </section>

    );
}

export default RegistroM;
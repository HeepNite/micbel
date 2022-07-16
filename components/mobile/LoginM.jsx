import styles from "../../styles/components/pages/Login.module.css";

const LoginM = () => {
    return (
        <section className={styles.LoginContainerM}>
            <form action="">
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Login" />
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

export default LoginM;
import styles from '../../../styles/components/general/Forms.module.css';

export const LoginUsuario = () => {
    return (
        <article>
            <form className={styles.LogIn} action="">
                <input type="text" placeholder="Nombre de Usuario" />
                <input type="password" placeholder="Contraseña" />
                <input type="submit" value="Iniciar Sesión" />
            </form>
        </article>
    )
}

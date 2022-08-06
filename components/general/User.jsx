import LoginM from "../mobile/LoginM";
import RegistroM from "../mobile/RegistroM";
import CarritoBanner from "./CarritoBanner";
import styles from "../../styles/components/pages/Usuario.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/slices/PaginasGenerales/PoliticasSlice";
import { useState } from "react";




const User = () => {

    const [name, setName] = useState("");
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const addNewUser = () => {
        dispatch(addUser(name));
    };
    const handleChange = (event) => {
        setName(event.target.value);
    };


    return (
        <main>
            <section className={styles.UsuarioContainerM} >
                {/*  <form action="">
                    <span> Ya tienes una cuenta activa en Micbel?</span>
                    <input type="radio" />
                    <label> Iniciar Sesion</label>
                    <LoginM />

                    <span> Aun no tienes una cuenta activa en Micbel?</span>
                    <input type="radio" />
                    <label> Registrar</label>
                    <RegistroM />
                </form>
                <CarritoBanner /> */}
                <h1>

                    {users}

                </h1>
                <input type="text" value={name} onChange={handleChange} />
                <button onClick={addNewUser}>Add</button>
            </section>
        </main>
    );
}

export default User;
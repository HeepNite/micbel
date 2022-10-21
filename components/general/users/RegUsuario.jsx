import { useState } from 'react';
import styles from '../../../styles/components/general/Forms.module.css';

export const RegUsuario = () => {

    const [registroForm, setRegistroForm] = useState({
        nombre: 'jhon',
        apellido: 'do',
        email: 'jhondo@gmail.com',
        tel: 55555555,
        pass: '',
        passConfirm: '',
        direccion: 'barrio el mirador Mz f Casa 4',
        ciudad: 'Yerba Buena',
        provincia: 'Tucuman',
        codigoPostal: 4105,
        pais: 'Argentina',
        detalle: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer',
        nombreUsuario: 'jhonDo'
    })


    const handleRegData = (e) => {
        setRegistroForm({
            ...registroForm, [e.target.name]: e.target.value
        })
    }

    console.log(registroForm)

    return (

        <article>
            <form className={styles.Registration}>
                <input type="text" placeholder="Nombre" name='nombre' onChange={e => handleRegData(e)} />
                <input type="text" placeholder="Apellido" name='apellido' onChange={e => handleRegData(e)} />
                <input type="email" placeholder="Correo" name='email' onChange={e => handleRegData(e)} />
                <input type="tel" placeholder="Telefono" name='tel' onChange={e => handleRegData(e)} />
                <input type="password" placeholder="Contraseña" name='pass' onChange={e => handleRegData(e)} />
                <input type="password" placeholder="Confirmar Contraseña" name='passConfirm' onChange={e => handleRegData(e)} />
                <input type="text" placeholder="Direccion" name='direccion' onChange={e => handleRegData(e)} />
                <input type="text" placeholder="Ciudad" name='ciudad' onChange={e => handleRegData(e)} />
                <input type="text" placeholder="Provincia" name='provincia' onChange={e => handleRegData(e)} />
                <input type="number" placeholder="Codigo Postal" name='codigoPostal' onChange={e => handleRegData(e)} />
                <input type="text" placeholder="País" name='pais' onChange={e => handleRegData(e)} />
                <input type="text" placeholder="Nombre de Usuario" name='nombreUsuario' onChange={e => handleRegData(e)} />

                <textarea name="detalle" id="" cols="30" rows="10" placeholder="Detalle" onChange={e => handleRegData(e)}></textarea>
                <input type="radio" value="Registrarme" />
                <label>guardar esta direccion como principal</label>
                <input type="submit" value="Registrarse" />
            </form>
        </article>
    )
}

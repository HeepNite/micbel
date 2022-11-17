import { useEffect } from "react";
import { IoWarningOutline } from "react-icons/io5"
import { getProvinciaEnd } from "../../../helper/services";
import { validarRegistro } from '../../../helper/validatios';
import styles from '../../../styles/components/general/Forms.module.css';
import { useValidacionUser } from '../../hooks/validaciones/useValidacionUser';

export const RegUsuario = () => {

    const initialState = {
        nombre: '', apellido: '', email: '', tel: '', pass: '', passConfirm: '', direccion: '', ciudad: '', provincia: '', codigoPostal: '',
        pais: '', usuario: '', detalle: ''
    }

    const { handleSubmit, handleChange, handlerBlur, errores, vacio, valores } = useValidacionUser(initialState, validarRegistro) || []

    const { nombre, apellido, email, tel, pass, passConfirm, direccion, ciudad, provincia, codigoPostal, usuario, detalle } = valores || []
    getProvinciaEnd(provincia)

    return (

        <article>
            <form className={styles.Registration} onSubmit={handleSubmit}>
                {vacio
                    ? <>
                        <span>
                            <div>
                                < IoWarningOutline />
                            </div>
                            <div>
                                Debes completar todos los campos para poder procesar su informacion
                                <br /><br />
                                pd: modificar el <strong>DOM</strong> de esta web proboca que un boton haga la llamada al <strong> FBI!!!</strong>
                                <br /><br />
                                <strong>  Y TENDRAS QUE EXPLICAR EL MOTIVO DE LA EDICION ANTE DONALD TRUMP LOL.</strong>
                                <br /><br />
                                Porfa no lo modifiques por que puedes pasar tus años constuyendo muros
                            </div>
                        </span>
                        <input type="text" placeholder="Nombre *" name='nombre' value={nombre} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="text" placeholder="Apellido *" name='apellido' value={apellido} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="email" placeholder="Correo *" name='email' value={email} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="tel" placeholder="Telefono *" name='tel' value={tel} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="password" placeholder="Contraseña *" name='pass' value={pass} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="password" placeholder="Confirmar Contraseña *" name='passConfirm' value={passConfirm} onChange={e => handleChange(e)} onBlur={handlerBlur} required />

                        <select name='pais' onChange={e => handleChange(e)} onBlur={handlerBlur} required >
                            <option value=''>Seleccionar Pais</option>
                            <option value='Argentina'>Argentina</option>
                        </select>
                        <select name='provincia' onChange={e => handleChange(e)} required >
                            <option value=''>Seleccionar provincia</option>
                            <option value='salta'>Salta</option>
                            <option value='tucuman'>Tucuman</option>
                            <option value='santiago del estero'>Santiago del estero</option>
                        </select>

                        <select name='ciudad' onChange={e => handleChange(e)} required>
                            <option value=''>Seleccionar ciudad</option>
                            <option value='salta'>Salta</option>
                            <option value='tucuman'>Tucuman</option>
                            <option value='santiago del estero'>Santiago del estero</option>
                        </select>

                        <input type="text" placeholder="Direccion *" name='direccion' value={direccion} onChange={e => handleChange(e)} onBlur={handlerBlur} required />

                        <input type="number" placeholder="Codigo Postal *" name='codigoPostal' value={codigoPostal} onChange={e => handleChange(e)} onBlur={handlerBlur} required />

                        <input type="text" placeholder="Nombre de Usuario" name='usuario' value={usuario} onChange={e => handleChange(e)} />
                        <textarea name="detalle" id='2' cols="30" rows="10" placeholder="Detalle" value={detalle} onChange={e => handleChange(e)}></textarea>
                        <input type="radio" value="Registrarme" />
                        <label>guardar esta direccion como principal</label>
                        <input type="submit" value="Registrarse" />
                    </>
                    : <>
                        {errores
                            ? <span>
                                <div>
                                    < IoWarningOutline />
                                </div>
                                <div>
                                    {errores.nombre}
                                    {errores.apellido}
                                    {errores.email}
                                    {errores.tel}
                                    {errores.pass}
                                    {errores.pais}
                                    {errores.provincia}
                                    {errores.ciudad}
                                    {errores.direccion}
                                    {errores.codigoPostal}
                                </div>
                            </span>
                            : null}
                        <input type="text" placeholder="Nombre *" name='nombre' value={nombre} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="text" placeholder="Apellido *" name='apellido' value={apellido} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="email" placeholder="Correo *" name='email' value={email} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="tel" placeholder="Telefono *" name='tel' value={tel} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="password" placeholder="Contraseña *" name='pass' value={pass} onChange={e => handleChange(e)} onBlur={handlerBlur} required />
                        <input type="password" placeholder="Confirmar Contraseña *" name='passConfirm' value={passConfirm} onChange={e => handleChange(e)} onBlur={handlerBlur} required />

                        <select name='pais' onChange={e => handleChange(e)} onBlur={handlerBlur} required >
                            <option defaultValue='pais'>Seleccionar País</option>
                            <option value='Argentina'>Argentina</option>
                        </select>
                        <select name='provincia' onChange={e => handleChange(e)} onBlur={handlerBlur} required >
                            <option defaultValue='provincia'>Seleccionar provincia</option>
                            <option value='salta'>Salta</option>
                            <option value='tucuman'>Tucuman</option>
                            <option value='santiago del estero'>Santiago del estero</option>
                        </select>

                        <select name='ciudad' onChange={e => handleChange(e)} onBlur={handlerBlur} required >
                            <option defaultValue='ciudad'>Seleccionar ciudad</option>
                            <option value='salta'>Salta</option>
                            <option value='tucuman'>Tucuman</option>
                            <option value='santiago del estero'>Santiago del estero</option>
                        </select>

                        <input type="text" placeholder="Direccion *" name='direccion' value={direccion} onChange={e => handleChange(e)} onBlur={handlerBlur} required />

                        <input type="number" placeholder="Codigo Postal *" name='codigoPostal' value={codigoPostal} onChange={e => handleChange(e)} onBlur={handlerBlur} required />

                        <input type="text" placeholder="Nombre de Usuario" name='usuario' value={usuario} onChange={e => handleChange(e)} />
                        <textarea name="detalle" id="" cols="30" rows="10" placeholder="Detalle" value={detalle} onChange={e => handleChange(e)}></textarea>
                        <input type="radio" value="Registrarme" />
                        <label>guardar esta direccion como principal</label>
                        <input type="submit" value="Registrarse" />
                    </>
                }

            </form>
        </article>
    )

}

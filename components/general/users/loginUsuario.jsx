import { IoWarningOutline } from 'react-icons/io5';
import { validarlogin } from '../../../helper/validatios';
import styles from '../../../styles/components/general/Forms.module.css';
import { useValidacionUser } from '../../hooks/validaciones/useValidacionUser';

export const LoginUsuario = () => {

    const initialState = { email: '', pass: '' }
    const { handleChange, handleSubmit, handlerBlur, errores, vacio } = useValidacionUser(initialState, validarlogin)
    console.log(vacio)
    return (
        <article>
            <form className={styles.LogIn} onSubmit={handleSubmit}>
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
                        <input type="email" placeholder="Email" name='email' onChange={e => handleChange(e)} required onBlur={handlerBlur} />
                        <input type="password" placeholder="Contraseña" name='pass' onChange={e => handleChange(e)} required onBlur={handlerBlur} />
                        <input type="submit" value="Iniciar Sesión" />
                    </>
                    :
                    <>

                        {errores
                            ? <span>
                                <div>
                                    < IoWarningOutline />
                                </div>
                                <div>
                                    {errores.email}
                                    {errores.pass}
                                </div>
                            </span>
                            : null}
                        <input type="email" placeholder="Email" name='email' onChange={e => handleChange(e)} required onBlur={handlerBlur} />
                        <input type="password" placeholder="Contraseña" name='pass' onChange={e => handleChange(e)} required onBlur={handlerBlur} />
                        <input type="submit" value="Iniciar Sesión" />
                    </>
                }
            </form>
        </article>
    )
}

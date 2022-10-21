import React from 'react'
import styles from '../../../styles/components/general/Forms.module.css';

export const DIfAddress = () => {
    return (
        <article>
            <form className={styles.Facturacion} action="">
                <input type="tel" placeholder="Telefono" />
                <input type="text" placeholder="Direccion" />
                <input type="text" placeholder="Ciudad" />
                <input type="text" placeholder="Estado" />
                <input type="text" placeholder="Codigo Postal" />
                <input type="text" placeholder="País" />
                <textarea name="pago" id="pago" cols="30" rows="10" placeholder="Detalle"></textarea>
                <input type="radio" value="Registrarme" />
                <label>guardar esta direccion </label>
                <input type="submit" value="guardar" />
            </form>
        </article>
    )
}

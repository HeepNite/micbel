import React from 'react'
import { useCarrito } from '../../hooks/contexHooks'

export const PagoDetalle = () => {
    const { totalProd } = useCarrito() || []
    return (
        <ul>
            <li>
                <h4>Precio Regular total</h4>
                <h4>${totalProd.precioTotalReg}</h4>
            </li>
            <li>
                <h4>Precio total Descuento</h4>
                <h4>${totalProd.precioTotalDes}</h4>
            </li>
            <li>
                <h4> total</h4>
                <h4>${totalProd.precioTotalDes + totalProd.precioTotalReg}</h4>
            </li>
        </ul>
    )
}

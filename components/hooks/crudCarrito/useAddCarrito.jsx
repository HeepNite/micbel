import { useState } from 'react'
import { useCarrito } from '../contexHooks/useCarrito'

export const useAddCarrito = (producto) => {

    const { carrito, setCarrito } = useCarrito()

    const [carritoItem, setCarritoItem] = useState(false)

    const [isLoading, setLoading] = useState(false)

    if (!producto) {
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!carrito.length) {
            producto.totalPriceDes += producto.salePrice
            producto.totalPriceReg += producto.regularPrice
            setCarrito([producto])
        }
        else if (carrito.some(itemCarrito => itemCarrito.slug === producto.slug)) {

            const carritoActualizado = carrito.map(itemCarrito => {
                if (itemCarrito.slug === producto.slug) {
                    itemCarrito.cantidad++
                    itemCarrito.totalPriceDes = producto.salePrice * itemCarrito.cantidad
                    itemCarrito.totalPriceReg = producto.regularPrice * itemCarrito.cantidad
                }
                return itemCarrito
            })
            setCarrito(carritoActualizado)
        }
        else {
            producto.totalPriceDes = producto.salePrice
            producto.totalPriceReg = producto.totalPriceReg
            setCarrito([...carrito, producto])
        }

        setCarritoItem(false)
        setTimeout(() => {
            setLoading(true)
        }, 100);
        setTimeout(() => {
            setLoading(false)
            setCarritoItem(true)
        }, 1000);
    }

    return {
        isLoading,
        carritoItem,
        handleSubmit,
    }
}
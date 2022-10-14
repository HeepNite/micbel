import { useState } from "react"
import { useCarrito } from "../contexHooks/useCarrito"

export const useDeleteCarrito = () => {

    const { carrito, setCarrito } = useCarrito()

    const [cleanCart, setCleanCart] = useState(false)

    const eliminarProducto = slugProducto => {
        const carritoActualizado = carrito.filter(producto => producto.slug !== slugProducto)
        setCarrito(carritoActualizado)
    }

    const onReset = (e) => {
        e.preventDefault()
        setCleanCart(true)
        setTimeout(() => {
            setCleanCart(false)
            setCarrito([])
        }, 1000);

    }

    return {
        eliminarProducto,
        onReset,
        cleanCart,
        setCleanCart
    }
}

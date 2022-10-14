

import { useCarrito } from '../contexHooks/useCarrito'

export const useUpdateCarrito = () => {
    const { carrito, setCarrito } = useCarrito()
    const actualizarCantidad = carritoProductos => {
 
        const carritoActualizado = carrito.map(producto => {
            if (producto.slug === carritoProductos.slug) {
                if (carritoProductos.cantidad >= 1) {
                    producto.cantidad = carritoProductos.cantidad
                    producto.totalPriceDes = carritoProductos.cantidad * carritoProductos.salePrice
                    producto.totalPriceReg = carritoProductos.cantidad* carritoProductos.regularPrice
                }
                else {

                    alert(`debes agregar al menos 1 producto para realizar el pedido`)
                }
            }
            return producto
        })
        setCarrito(carritoActualizado)
    }


    return {
        actualizarCantidad
    }
}

import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarCarrito = carritoProductos => {

        if (carrito.some(producto => producto.slug === carritoProductos.slug)) {

            const carritoActualizado = carrito.map(producto => {
                if (producto.slug === carritoProductos.slug) {
                    producto.cantidad = carritoProductos.cantidad
                }
                return producto
            })
            setCarrito(carritoActualizado)
        }
        else {
            setCarrito([...carrito, carritoProductos])
        }
    }

    const actualizarCantidad = carritoProductos => {
        const carritoActualizado = carrito.map(producto => {
            if (producto.slug === carritoProductos.slug) {
                producto.cantidad = carritoProductos.cantidad
            }
            return producto
        })
        setCarrito(carritoActualizado)
    }


    const eliminarProducto = uidProducto => {

        const carritoActualizado = carrito.filter(producto => producto.slug !== uidProducto)
        setCarrito(carritoActualizado)
    }

    useEffect(() => {
        const carritoLs = JSON.parse(localStorage.getItem('carrito')) ?? []
        setCarrito(carritoLs)
    }, [])

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    return (

        <CarritoContext.Provider value={{ carrito, agregarCarrito, actualizarCantidad, eliminarProducto }}>
            {children}
        </CarritoContext.Provider>
    )
}









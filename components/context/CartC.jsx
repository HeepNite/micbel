import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [totalProd, setTotalProd] = useState(0)



    const agregarCarrito = carritoProductos => {

        if (!carrito.length) {
            setCarrito([carritoProductos])
        }
        else {
            if (carrito.some(producto => producto.slug === carritoProductos.slug)) {
                const carritoActualizado = carrito.map(producto => {
                    if (producto.slug === carritoProductos.slug) {
                        producto.cantidadProducto += carritoProductos.cantidadProducto
                        producto.totalPriceDes += carritoProductos.totalPriceDes
                        producto.totalPriceReg += carritoProductos.totalPriceReg
                    }
                    return producto
                })
                setCarrito(carritoActualizado)
            } else {
                setCarrito([...carrito, carritoProductos])
            }
        }
    }

    const actualizarCantidad = carritoProductos => {
        const carritoActualizado = carrito.map(producto => {
            if (producto.slug === carritoProductos.slug) {
                if (carritoProductos.cantidadProducto >= 1) {
                    producto.cantidadProducto = carritoProductos.cantidadProducto
                    producto.totalPriceDes = carritoProductos.cantidadProducto * carritoProductos.salePrice
                    producto.totalPriceReg = carritoProductos.cantidadProducto * carritoProductos.regularPrice

                }
                else {

                    alert(`debes agregar al menos 1 producto para realizar el pedido`)
                }
            }
            return producto
        })
        setCarrito(carritoActualizado)

    }
    const eliminarProducto = slugProducto => {

        const carritoActualizado = carrito.filter(producto => producto.slug !== slugProducto)
        setCarrito(carritoActualizado)
    }

    const getTotales = () => {

        const totales = {
            cantidadTotal: 0,
            precioTotalReg: 0,
            precioTotalDes: 0,
        }
        carrito.forEach(element => {
            if (!element.salePrice) {
                totales.cantidadTotal += element.cantidadProducto
                totales.precioTotalReg += element.totalPriceReg
            } else {

                totales.cantidadTotal += element.cantidadProducto
                totales.precioTotalDes += element.totalPriceDes
            }

        })

        setTotalProd(totales)
    }

    useEffect(() => {
        const carritoLs = JSON.parse(localStorage.getItem('carrito')) ?? []
        setCarrito(carritoLs)
    }, [])

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
        getTotales()
    }, [carrito])
console.log(carrito)

    return (

        <CarritoContext.Provider value={{ carrito, totalProd,setCarrito, agregarCarrito, actualizarCantidad, eliminarProducto }}>
            {children}
        </CarritoContext.Provider>
    )
}









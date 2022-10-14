import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []

    const [carrito, setCarrito] = useState(carritoLS)

    const [totalProd, setTotalProd] = useState(0)

    const getTotales = () => {

        const totales = {
            cantidadTotal: 0,
            precioTotalReg: 0,
            precioTotalDes: 0,
        }
        carrito.forEach(element => {
            if (!element.salePrice) {
                totales.cantidadTotal += element.cantidad
                totales.precioTotalReg += element.totalPriceReg
            } else {

                totales.cantidadTotal += element.cantidad
                totales.precioTotalDes += element.totalPriceDes
            }

        })

        setTotalProd(totales)
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
        getTotales()
    }, [carrito])

    return (

        <CarritoContext.Provider value={{ carrito, totalProd, setCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}

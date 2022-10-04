import { useContext } from "react"
import { CarritoContext } from "../context/CartC"
export const useCarrito = () => {
    return useContext(CarritoContext)
}
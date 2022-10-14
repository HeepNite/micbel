import { useContext } from "react"
import { ProductosContext } from "../../context/ProductosC"

export const useProductos = () => {
    return useContext(ProductosContext)
}
import { createContext } from "react";

export const ProductosContext = createContext()

export const ProductosProvider = ({ children, dataProductos }) => {


    return (
        <ProductosContext.Provider value={{ dataProductos }}>
            {children}
        </ProductosContext.Provider>
    )

}
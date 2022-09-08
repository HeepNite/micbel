import { createContext } from "react";

export const CategoriasBarContext = createContext()

export const CategoriasBarProvider = ({ children, dataCategoriasBar }) => {


    return (
        <CategoriasBarContext.Provider value={{ dataCategoriasBar }}>
            {children}
        </CategoriasBarContext.Provider>

    )

}
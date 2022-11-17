import { createContext, useState } from "react";

export const ProvinciasContext = createContext()

export const ProvinciasProvider = ({ children }) => {

    const [provinciaEndPoint, setProvinciaEndPoint] = useState()


    return (
        <ProvinciasContext.Provider value={{ provinciaEndPoint, setProvinciaEndPoint }}>
            {children}
        </ProvinciasContext.Provider>
    )

}


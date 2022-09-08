import { createContext} from "react"

export const BannerHeroOneContext = createContext()

export const BannerHeroOneProvider = ({ children, dataBanerHeroOne }) => {

    return (
        <BannerHeroOneContext.Provider value={{ dataBanerHeroOne }}>
            {children}
        </BannerHeroOneContext.Provider>
    )
}

import { createContext, useMemo, useState } from "react";

export const BannerHeroOneContext = createContext();

export const BannerHeroOneProvider = ({ children, initialData }) => {

    const { TituloBanner, DescripcionBanner, ImagenFondo } = initialData[0]

    const [BannerHeroOneC, setBannerHeroOneC] = useState({
        TituloBanner,
        DescripcionBanner,
        ImagenFondo
    })

    const BannerHeroOne = useMemo(() => ({ BannerHeroOneC, setBannerHeroOneC }), [BannerHeroOneC])

    return (
        <BannerHeroOneContext.Provider value={{ BannerHeroOne }}>
            {children}
        </BannerHeroOneContext.Provider>
    )
}

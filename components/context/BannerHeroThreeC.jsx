import { createContext, useMemo, useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";

export const BannerHeroThreeContext = createContext()

export const BannerHeroThreeProvider = ({ children, initialData }) => {

    const { ImagenUno, ImagenDos, ImagenTres } = initialData[0]

    const [BannerHeroThreeC, setBannerHeroThreeC] = useState({
        ImagenUno,
        ImagenDos,
        ImagenTres
    })

    const BannerHeroThree = useMemo(() => ({ BannerHeroThreeC, setBannerHeroThreeC }, [BannerHeroThreeC]))

    return (
        <BannerHeroThreeContext.Provider value={{ BannerHeroThree }}>
            {children}
        </BannerHeroThreeContext.Provider>
    )

}

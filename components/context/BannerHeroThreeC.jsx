import { createContext, useMemo, useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";

export const BannerHeroThreeContext = createContext()

export const BannerHeroThreeProvider = ({ children, dataBannerHeroThree }) => {

    return (
        <BannerHeroThreeContext.Provider value={dataBannerHeroThree}>
            {children}
        </BannerHeroThreeContext.Provider>
    )
}

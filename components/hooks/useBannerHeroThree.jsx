import { useContext } from "react"
import { BannerHeroThreeContext } from "../context/BannerHeroThreeC"

export const useBannerHeroThree = () => {
    return useContext(BannerHeroThreeContext)
}
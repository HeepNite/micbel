import { useContext } from "react"
import { BannerHeroOneContext } from "../context/BannerHeroOneC"

export const useBannerHeroOne = () => {
    return useContext(BannerHeroOneContext)
}
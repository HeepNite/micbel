import { useContext } from "react"
import { CategoriasBarContext } from "../context/CategoriasBarC"

export const useCategoriasBar = () =>{
    return useContext(CategoriasBarContext)
}
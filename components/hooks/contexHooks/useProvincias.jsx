import { useContext } from "react";
import { ProvinciasContext } from "../../context/provicinasC";

export const useProvincias = () => {

    return useContext(ProvinciasContext)
}

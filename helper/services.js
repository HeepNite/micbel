

/* Productos y categorias Woocommerce */

import { PRODUCTOS_WOO_CATEGORIAS, PRODUCTO_WOO } from "./endPoints"

export const getCategoriasBar = async () => {

    const urlCategorias = `${process.env.API_URL_INFORMATION}/categorias`
    const dataCategorias = await fetch(urlCategorias)
    const categoriasRes = await dataCategorias.json()
    return categoriasRes
}


export const getCategoria = async (urlEndPoint) => {

    const urlCategoria = `${PRODUCTOS_WOO_CATEGORIAS}=${urlEndPoint}`
    const dataCategoria = await fetch(urlCategoria)
    const categoriaRes = await dataCategoria.json()
    return categoriaRes
}

export const getProductos = async () => {

    const urlProductos = `${process.env.API_URL_LOCAL_PRODUCTOS}`
    const dataProductos = await fetch(urlProductos)
    const productosRes = await dataProductos.json()
    return productosRes

}

export const getProducto = async (urlEndPoint) => {
    const urlProducto = `${PRODUCTO_WOO}=${urlEndPoint}`
    const dataProducto = await fetch(urlProducto)
    const productoRes = await dataProducto.json()
    return productoRes

}

/*  provincias, departamentos, municipios, barrios */
export const getProvinciaEnd = (endPoint) => {
    if (!endPoint || endPoint === 'Seleccionar provincia') {
        console.log(endPoint)
    }
    else {
        console.log(endPoint)
        return endPoint
    }
}
export const getProvincias = async () => {
    const urlPaises = `https://apis.datos.gob.ar/georef/api/departamentos?provincia=salta&max=23`
    const dataPaises = await fetch(urlPaises)
    const paisesRes = await dataPaises.json()
    return paisesRes
}

/* paginas */

export const getNosotrosInfo = async () => {

    const urlNosotros = `${process.env.API_URL_INFORMATION}/nosotros`
    const dataNosotros = await fetch(urlNosotros)
    const nosotrosRes = await dataNosotros.json()
    return nosotrosRes;

}

export const getPaginasGeneneralesInfo = async (urlEndPoint) => {
    const urlPoliticas = `${process.env.API_URL_INFORMATION}/paginas-generales?Pagina=${urlEndPoint}`;
    const dataPoliticas = await fetch(urlPoliticas)
    const politicasRes = await dataPoliticas.json()
    return politicasRes

}

/* banners */

export const getBannerHeroThree = async (urlEndPoint) => {

    const urlBannerHeroThree = `${process.env.API_URL_INFORMATION}/banner-threes?Pagina=${urlEndPoint}`;
    const dataBannerHeroThree = await fetch(urlBannerHeroThree)
    const bannerHeroThreeRes = await dataBannerHeroThree.json()
    return bannerHeroThreeRes

}

export const getBannerHeroOne = async (urlEndPoint) => {

    const urlBannerHeroOne = `${process.env.API_URL_INFORMATION}/banner-ones?Pagina=${urlEndPoint}`
    const databannerHeroOne = await fetch(urlBannerHeroOne)
    const bannerHeroOneRes = await databannerHeroOne.json()
    return bannerHeroOneRes
}




export const getCategorias = async () => {

    const urlCategorias = 'http://localhost:1337/categorias'
    const dataCategorias = await fetch(urlCategorias)
    const res = await dataCategorias.json()
    return res
}



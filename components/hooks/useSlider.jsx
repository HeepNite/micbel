import { useState, useEffect } from 'react'


export const useSlider = (dataProductos) => {

 

    const [producto, setProducto] = useState() || {}

    const [index, setIndex] = useState(0)

    const calculate = () => {
        dataProductos?.forEach((element, i) => {
            if (index === i) {
                const dataProd = {
                    slug: element.slug,
                    name: element.name,
                    cantidad: 1,
                    salePrice: parseInt(element.sale_price),
                    regularPrice: parseInt(element.regular_price),
                    totalPriceReg: 0,
                    totalPriceDes: 0,
                    shortDescription: element.short_description,
                    img: element.images[0].src

                }
                setProducto(dataProd)

            }
        })
    }
    const handLeft = () => {

        if (index === 0) {
            let newIndex = dataProductos.length - 1
            setIndex(newIndex)
        } else {
            let newIndex = index
            setIndex(newIndex -= 1)
        }
    }
    const handleRight = () => {
        if (index === dataProductos.length - 1) {
            let newIndex = 0
            setIndex(newIndex)
        } else {
            let newIndex = index
            setIndex(newIndex += 1)
        }
    }

    useEffect(() => {
        calculate(index)

    }, [index])

    return {
        handLeft,
        handleRight,
        producto
    }

}

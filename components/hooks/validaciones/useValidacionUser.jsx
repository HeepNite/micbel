import { useEffect, useState } from 'react'
import { ciudadEndopoint } from '../../../helper/services'

export const useValidacionUser = (initialState, validar, fn) => {
    const [valores, setValores] = useState(initialState)
    const [errores, setErrores] = useState(null)
    const [vacio, setVacio] = useState(null)
    const [submitForm, setSubmitForm] = useState(false)

    useEffect(() => {
        if (submitForm) {

            if (errores === null) {
                console.log(`paso todo`)

            }
            setSubmitForm(false)
        }
    }, [errores])

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        setValores({
            ...valores, [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errorValidacion = validar(valores)
        if (errorValidacion.camposVacios.length !== 0) {
            setVacio(true)
            setErrores(errorValidacion)
        } else {
            setVacio(false)
        }

        if (Object.keys(errorValidacion.erroresVal).length === 0) {
            setErrores(null)
        }
        else {
            setErrores(errorValidacion.erroresVal)
        }
        setSubmitForm(true)
    }

    const handlerBlur = () => {
        const errorValidacion = validar(valores)
        const ciudadEnd = valores.ciudad

        if (errorValidacion.camposVacios.length !== 0) {
            setErrores(errorValidacion)
        }
    

        if (Object.keys(errorValidacion.erroresVal).length === 0) {
            setErrores(null)
        }
        else {
            setErrores(errorValidacion.erroresVal)
        }
    }

    return {
        vacio,
        valores,
        errores,
        handleChange,
        handleSubmit,
        handlerBlur
    }
}

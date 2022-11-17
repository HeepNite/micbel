const expresionesReg = {
    nombreApellido: /^[a-zA-ZÀ-ÿ\s]{6,40}$/,
    usuario: /^[a-zA-Z0-9\_\-]{5,12}$/,
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    pass: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/,
    tel: /^([(]?[0-9]{3}[)]?[\s\-\.])([0-9]{3}[\s\-\.])([0-9]{4})$/,
    direccion: /^[a-zA-Z\˚\o\.-a-zA-Z?=\s]+[0-9]$/,
    codigoPostal: /^\d{4}$/
}

export const validarRegistro = (valores) => {
    let camposVacios = []
    let erroresVal = {}
    for (let [key, value] of Object.entries(valores)) {
        if (key !== 'detalle' && key !== 'usuario') {
            if (value === '' || value === 0) {
                camposVacios.push({ input: key })
                erroresVal.inputVacio = 'Todos los camos deben estar completos'
            }
        }
    }
    if (!expresionesReg.nombreApellido.test(valores.nombre)) {
        erroresVal.nombre = <>
            <strong>Nombre no valido:</strong>
            <p>
                verifica que poseas mas de 6 letras o que no poseas ningun caracter especial en el nombre como ser
                <strong>.,  @, -,  _'</strong>
            </p>
        </>
    }
    if (!expresionesReg.nombreApellido.test(valores.apellido)) {
        erroresVal.apellido = <>
            <strong> Apellido no valido:</strong>
            <p>
                verifica que poseas mas de 6 letras que no poseas ningun caracter especial en el apellido como ser <strong>., @,  -, _'</strong>
            </p>
        </>
    }
    if (!expresionesReg.tel.test((valores.tel))) {
        console.log(valores.tel)
        erroresVal.tel = <>
            <strong>Telefono no valido:</strong>
            <p>
                verifica que tu telefo cumpla con estandares de un numero de Argentina <strong>(387)-555-5555 (10 numeros en total) </strong> que no posea ningun caracter especial <strong>@, /, +</strong>
            </p>
        </>
    }

    if (!expresionesReg.email.test(valores.email)) {
        erroresVal.email = <>

            <strong> Email no valido:</strong>
            <p>
                verifica que tu email posee los estandares de un email <strong> nombre@gmail.com o nombre@gmail.com.ar</strong>
            </p>
        </>
    }

    if (!expresionesReg.pass.test(valores.pass)) {
        erroresVal.pass = <>
            <strong> Contraseña no valida:</strong>
            <p>
                verifica que tu contraseña posee al menos; 1 mayuscula, 1 minuscula, 1 numero, 1 caracter especial, como ser: <br />
                <strong> @, ., -, _</strong>
            </p>
        </>
    }
    else if (valores.pass !== valores.passConfirm) {
        erroresVal.pass =
            <>
                <strong>Contraseña distinta: </strong>
                <p>
                    verifica que las contraseñas sean iguales
                </p>
            </>
    }
    if (valores.pais === 'Seleccionar País' || valores.pais === '') {
        erroresVal.pais = <>
            <strong>País no valida:</strong>
            <p>Verifica que hayas seleccionado un país valido</p>
        </>
    }
    if (valores.provincia === 'Seleccionar provincia' || valores.provincia === '') {
        erroresVal.provincia = <>
            <strong>Provincia no valida:</strong>
            <p>Verifica que hayas seleccionado una provincia valida</p>
        </>
    }

    if (valores.ciudad === 'Seleccionar ciudad' || valores.ciudad === '') {
        erroresVal.ciudad = <>
            <strong>ciudad no valida:</strong>
            <p>Verifica que hayas seleccionado una provincia valida</p>
        </>
    }

    if (!expresionesReg.direccion.test(valores.direccion)) {
        erroresVal.direccion = <>
            <strong>Direccion no valida:</strong>
            <p>
                Verifica que la direccion no posea caracteres especiales como ser <strong>@, *, &, #, !, ( ) </strong>
            </p>

        </>
    }
    if (!expresionesReg.codigoPostal.test(valores.codigoPostal)) {
        erroresVal.codigoPostal = <>
            <strong> Codigo postal no valido:</strong>
            <p>
                Verifica que el codigo postal posea 4 numeros
            </p>
        </>
    }


    return {
        camposVacios,
        erroresVal
    }

}

export const validarlogin = (valores) => {
    let camposVacios = []
    let erroresVal = {}
    for (let [key, value] of Object.entries(valores)) {
        if (value === '' || value === 0) {
            camposVacios.push({ input: key })
            erroresVal.inputVacio = 'Todos los camos deben estar completos'
        }
    }
    if (!expresionesReg.email.test(valores.email)) {
        erroresVal.email = <>

            <strong> Email no valido:</strong>
            <p>
                verifica que tu email posee los estandares de un email <strong> nombre@gmail.com o nombre@gmail.com.ar</strong>
            </p>
        </>
    }
    if (!expresionesReg.pass.test(valores.pass)) {
        erroresVal.pass = <>
            <strong> Contraseña no valida:</strong>
            <p>
                verifica que tu contraseña posee al menos; 1 mayuscula, 1 minuscula, 1 numero, 1 caracter especial, como ser: <br />
                <strong> @, ., -, _</strong>
            </p>
        </>
    }
    return {
        camposVacios,
        erroresVal
    }
}
export const validarDifDireccion = (valores) => {
    let camposVacios = []
    let erroresVal = {}
    for (let [key, value] of Object.entries(valores)) {
        if (key !== 'detalle' && key !== 'usuario') {
            if (value === '' || value === 0) {
                camposVacios.push({ input: key })
                erroresVal.inputVacio = 'Todos los camos deben estar completos'
            }
        }
    }
    if (!expresionesReg.nombreApellido.test(valores.nombre)) {
        erroresVal.nombre = <>
            <strong>Nombre no valido:</strong>
            <p>
                verifica que poseas mas de 6 letras o que no poseas ningun caracter especial en el nombre como ser
                <strong>.,  @, -,  _'</strong>
            </p>
        </>
    }
    if (!expresionesReg.nombreApellido.test(valores.apellido)) {
        erroresVal.apellido = <>
            <strong> Apellido no valido:</strong>
            <p>
                verifica que poseas mas de 6 letras que no poseas ningun caracter especial en el apellido como ser <strong>., @,  -, _'</strong>
            </p>
        </>
    }
    if (!expresionesReg.tel.test((valores.tel))) {
        console.log(valores.tel)
        erroresVal.tel = <>
            <strong>Telefono no valido:</strong>
            <p>
                verifica que tu telefo cumpla con estandares de un numero de Argentina <strong>(387)-555-5555 (10 numeros en total) </strong> que no posea ningun caracter especial <strong>@, /, +</strong>
            </p>
        </>
    }
    if (valores.pais === 'Seleccionar País' || valores.pais === '') {
        erroresVal.pais = <>
            <strong>País no valida:</strong>
            <p>Verifica que hayas seleccionado un país valido</p>
        </>
    }
    if (valores.provincia === 'Seleccionar provincia' || valores.provincia === '') {
        erroresVal.provincia = <>
            <strong>Provincia no valida:</strong>
            <p>Verifica que hayas seleccionado una provincia valida</p>
        </>
    }

    if (valores.ciudad === 'Seleccionar ciudad' || valores.ciudad === '') {
        erroresVal.ciudad = <>
            <strong>ciudad no valida:</strong>
            <p>Verifica que hayas seleccionado una provincia valida</p>
        </>
    }

    if (!expresionesReg.direccion.test(valores.direccion)) {
        erroresVal.direccion = <>
            <strong>Direccion no valida:</strong>
            <p>
                Verifica que la direccion no posea caracteres especiales como ser <strong>@, *, &, #, !, ( ) </strong>
            </p>

        </>
    }
    if (!expresionesReg.codigoPostal.test(valores.codigoPostal)) {
        erroresVal.codigoPostal = <>
            <strong> Codigo postal no valido:</strong>
            <p>
                Verifica que el codigo postal posea 4 numeros
            </p>
        </>
    }


    return {
        camposVacios,
        erroresVal
    }
}
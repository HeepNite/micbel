import React from 'react'
import { useValidacionUser } from '../../hooks/validaciones/useValidacionUser';


export const InputForm = ({ handleChange, placeholder, name, type }) => {

    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={e => handleChange(e)}
          
            required />
    )
}

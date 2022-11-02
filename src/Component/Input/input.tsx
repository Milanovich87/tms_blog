import { useState } from 'react'
import './Input.scss'

export interface InputProps {
    label?: string
    type?: string
    className?: string
    placeholder?: string
    disabled?: boolean
    required?: boolean
    error?: boolean
    errorText?: string
}

export const Input = (props: any) => {
    const dataInput = props.prop

    return (
        <fieldset className={`${dataInput.className}`}>
            <label>{dataInput.label}
                <input
                    type={dataInput.type}
                    required={dataInput.required}
                    placeholder={dataInput.placeholder}
                    disabled={dataInput.disabled}
                />
            </label>
        </fieldset>
    )
}
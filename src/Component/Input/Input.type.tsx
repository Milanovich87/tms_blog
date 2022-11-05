type InputType = {
    className?: string
    label?: string
    placeholder?: string
    disabled?: boolean
    styles?: string
    type?: string
    required?: boolean
    error?: boolean
    errorText?: string
}

export type InputMain = {
    input: InputType
    inputDisabled: InputType
}
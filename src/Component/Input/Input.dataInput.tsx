import { InputMain } from './Input.type';

export const dataInput: InputMain = {
    input: {
        className: 'input',
        label: 'Title',
        placeholder: 'Placeholder',
        disabled: false,
        type: 'text',
        required: true,
        error: false,
        errorText: 'Error text'
    },
    inputDisabled: {
        className: 'input',
        label: 'Title',
        placeholder: 'Placeholder',
        disabled: true,
        type: 'text',
        required: true,
        error: false,
        errorText: 'Error text'
    }
}
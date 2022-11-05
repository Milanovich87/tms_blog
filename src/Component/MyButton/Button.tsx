import React, { ButtonHTMLAttributes, ReactElement } from 'react' // { useState }
import './Buttons.scss'
import { SvgDisLike } from '../MyIcons/SvgDisLike';
import { SvgLike } from '../MyIcons/SvgLike';
import { SvgBookMark } from '../MyIcons/SvgBooMark';

type ButtonProps = {
    text?: string
    disabled?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    className: string
    icon?: ReactElement
    alt?: string
}

export const dataButtons: ButtonProps[] = [
    {
        text: 'Primary',
        className: 'button-primary',
    },
    {
        text: 'Secondary',
        className: 'button-secondary',
    },
    {
        text: 'Secondary 2',
        className: 'button-secondary2',
    },
    {
        icon: <SvgDisLike />,
        className: 'button-dis-like'
    },
    {
        icon: <SvgLike />,
        className: 'button-like'
    },
    {
        text: 'Button with icon',
        icon: <SvgBookMark />,
        className: 'button-book-mark'
    },
]

export const Button = ({
    text,
    disabled = false,
    onClick,
    className,
    icon,
    ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={`btn ${className}`}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {icon}
            {text && <span className="button__text">{text}</span>}
        </button >
    )
}
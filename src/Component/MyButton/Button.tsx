import React from 'react'
import './Buttons.scss'


export const Button = (props: any) => {
    const data = props.prop

    return (
        <button
            onClick={data.active}
            disabled={data.disabled}
            className={data.styles}
        >
            {data.img}
            {data.content}
        </button>
    )
}

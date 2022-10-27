import React from 'react'

export const Button = (props: any) => {
    const data = props

    return (
        <button onClick={props.func} disabled={props.disabled}>
            {data.content}
        </button>
    )
}

import React from 'react'

export const CTA = (props) => {
    return (
        <button className={props.kind} onClick={props.click}>{props.text}</button>
    )
}
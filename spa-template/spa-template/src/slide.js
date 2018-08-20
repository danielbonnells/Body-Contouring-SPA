import React from 'react'

export const Slide = (props) => {
    return (
        <div className="slide">
            <img src={props.source} alt={props.alt} id={props.id} />
        </div>
    )
}
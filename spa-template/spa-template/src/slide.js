import React from 'react'

export const Slide = (props) => {
    return (
        <div className="slide" id={props.id} style={{zIndex:props.zindex}} onClick={props.next}>
            <img src={props.source} alt={props.alt} />
        </div>
    )
}
import React from 'react'

export const SlideControl = (props) => {
    return(
        <button className="slide-control" slideid={props.targetSlide} onClick={() => props.goToSlide(props.targetSlide)}></button>
    )
}
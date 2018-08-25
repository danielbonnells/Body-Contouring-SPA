import React from 'react'

export const SlideControl = (props) => {
    return(
        <div className="slide-control" slideid={props.targetSlide} onClick={() => props.goToSlide(props.targetSlide)}></div>
    )
}
import React, { Component } from 'react'
import { Slide } from './slide'

export class Slider extends Component {

    constructor(props){
        super(props)

        this.state = {
            current: null,
            previous: null,
            next: null
        }

        this.handleClick = this.handleClick.bind(this)
    }

handleClick = () => {
    console.log(this)
}
    next = () => {

    }



  

    render(){
        const images = [
            {
                id: 1,
                source: "https://picsum.photos/1920/1080?random",
                alt: ""
            },
            {
                id: 2,
                source: "https://picsum.photos/1920/1080?random",
                alt: ""
            },
            {
                id: 3,
                source: "https://picsum.photos/1920/1080?random",
                alt: ""
            }
        ]

        const slides = images.map((image) => {
            return (<Slide source={image.source} id={image.id} alt={image.alt} key={image.id} onClick={this.handleClick} />)
        })


        return (
            <div className="slide-container">
                {slides}
            </div>
            
        )

    }
  
}
import React, { Component } from 'react'
import { Slide } from './slide'
import { TextBlock } from './textblock'
export class Slider extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentIndex: 0,
            slides: [0,1,2],
            odd: true
        }
    }

    render(){
        
        const images = [
            {
                id: 0,
                source: "https://www.cstatic-images.com/car-pictures/xl/USC70CHC021E021001.jpg",
                alt: "",
                z: 3
            },
            {
                id: 1,
                source: "https://cms.kelleybluebookimages.com/content/dam/kbb-editorial/make/acura/nsx/2017/first-review/01-2017-acura-nsx.jpg",
                alt: "",
                z: 2
            },
            {
                id: 2,
                source: "https://media.wired.com/photos/59b1a378a0df4b47dcf7ccb0/master/w_2400,c_limit/LamborghiniRoadsterTA.jpg",
                alt: "",
                z: 1
            }
        ]

        const slides = images.map((image) => {
            return (<Slide source={image.source} id={image.id} alt={image.alt} key={image.id} zindex={image.z} next={this.getSlides}/>)
        })   



        return (
            <div className="slide-container">
                <div className="slides-box">
                    {slides}
                </div>
                <TextBlock />
            </div>
            
        )

    }
  
}
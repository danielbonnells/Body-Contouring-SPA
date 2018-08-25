import React, { Component } from 'react'
import { Slide } from './slide'
import { TextBlock } from './textblock'
import {SlideControl } from './slide-control'
export class Slider extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentSlide: 0,
            previousSlide: 0,
            slides: [0,1,2],
            auto: false
        }
    }

    changeSlides = (slideId) => {

        let currentSlide //the index 

        let previousSlide = this.state.previousSlide

        let current //the elements
        let next
        let previous

        if(slideId){
            currentSlide = slideId

            this.setState(() => ({
                previousSlide: this.state.currentSlide,
                currentSlide: slideId
            }))

            current = document.getElementById(currentSlide)
            previous = document.getElementById(previousSlide)

            if(previous == current){
                console.log('same same')
                return null
            } else{
                console.log(previous, current)
                previous.classList.remove('slide-current', 'slide-next')
                previous.classList.add('slide-visibility')
                //the current slide gets moved to the center/current position
                current.classList.remove('slide-next', 'slide-visibility')
                current.classList.add('slide-current')
            }
        } else {
            currentSlide = this.state.currentSlide

            //if currentSlide == last item in the slides array
            if(currentSlide == this.state.slides[this.state.slides.length - 1]){ 
                next = document.getElementById(this.state.slides[0])
                previous = document.getElementById(currentSlide - 1)
            } else if(currentSlide == 0){
                next = document.getElementById(currentSlide + 1)
                previous = document.getElementById(this.state.slides[this.state.slides.length - 1])
            }else {
                next = document.getElementById(currentSlide + 1)
                previous = document.getElementById(currentSlide - 1)
            }

            current = document.getElementById(currentSlide)

               //previous slide
                //setTimeout(() => previous.classList.add('slide-visibility'), 500)
                previous.classList.remove('slide-current', 'slide-next')
                previous.classList.add('slide-visibility')
                //the current slide gets moved to the center/current position
                current.classList.remove('slide-next', 'slide-visibility')
                current.classList.add('slide-current')
                //next slide gets current position
                next.classList.remove('slide-current', 'slide-visibility')
                next.classList.add('slide-next')

        }

        
       
     
        
        // only matters if we have auto === true
        if(currentSlide == this.state.slides[this.state.slides.length - 1]){
            this.setState({
                currentSlide: 0
            })
         }
        else {
            this.setState((prevState) => ({
                currentSlide: prevState.currentSlide + 1
            }))
        }
        console.log('current state slide ' + this.state.currentSlide)
       if(this.state.auto){
        setTimeout(this.changeSlides, 3000)
       }
        
    }

    goToSlide = (slideId) => {
        console.log('slide selected ' + slideId)
        this.changeSlides(slideId)
    }

    render(){
        
        const images = [
            {
                id: 0,
                source: "https://www.cstatic-images.com/car-pictures/xl/USC70CHC021E021001.jpg",
                alt: "",
                z: 1
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
                z: 3
            }
        ]

        const slides = images.map((image) => {
            return (
                        <Slide source={image.source} id={image.id} alt={image.alt} key={image.id}/>
                   
                )
        })   

        const slideControls = images.map((image) => {
            return(
                <SlideControl targetSlide={image.id} goToSlide={this.goToSlide} />
            )
        })


        return (
            <div className="slide-container">
                <div className="slides-box">
                    {slides}
                </div>
                <div className="slide-controls">
                    {slideControls}
                </div>
                <TextBlock />
            </div>
            
        )

    }
  
}
import React, { Component } from 'react'
import { Slide } from './slide'
import { TextBlock } from './textblock'
import {SlideControl } from './slide-control'

export class Slider extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentSlide: 0,
            clickedSlides: [],
            slides: [0,1,2],
            auto: true // true means the slider will move on its own when the page loads
        }
    }

    changeSlides = (slideId) => {

        
        let currentSlide //the index 
        let current //the elements
        let next
        let previous

        if(!isNaN(slideId)){ //if slideID is a number, including zero
            
            currentSlide = slideId

            this.setState(() => ({
                currentSlide: currentSlide,
                auto: false
            }))
        
            current = document.getElementById(currentSlide)
            
            let slides = Array.from(document.getElementsByClassName('slide'))
                    
            slides.map(slide => {
                slide.classList.remove('slide-current', 'slide-next', 'slide-visibility')
                
            })

            if(slideId == this.state.currentSlide && this.state.clickedSlides.length > 2){
                //console.log('same same')
                this.styleControl(slideId)
                current.classList.add('slide-current')
                return null
            } else{
                this.styleControl(slideId)
                current.classList.add('slide-current')
            }
            
        } else if(this.state.auto){

            //console.log("Slides on Auto Rotation")
            

            currentSlide = this.state.currentSlide
            this.styleControl(currentSlide)
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
        }
        // iterates the function 
       if(this.state.auto){
        setTimeout(this.changeSlides, 5000)
       }
        
    }

    goToSlide = (slideId) => {


        let arr = this.state.clickedSlides

        if(slideId != this.state.clickedSlides[this.state.clickedSlides.length - 1]){
            arr.push(slideId)
        }

        this.setState({
            clickedSlides: arr
        })

        //console.log(arr)

        this.changeSlides(slideId)
    }

    styleControl = (id) => {
        //console.log(id)
        const currentSlide = id
     
        let controls = Array.from(document.querySelectorAll('.slide-control[slideid]'))

        controls.map(control => {
            if(control.getAttribute("slideid") == currentSlide){
                
                control.classList.add('slide-control-active')
            } else {
                
                control.classList.remove('slide-control-active')
            }
        })


    }

    componentDidMount(){
        this.changeSlides()
    }

    // future features
    //--- keyboard functionality by listening to arrow keys and calling goToSlide with this.state.currentSlide as the parameter
    //--- aria labels/controls
  

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
                <SlideControl targetSlide={image.id} goToSlide={this.goToSlide} key={image.id} />
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
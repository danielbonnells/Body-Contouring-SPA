import React, { Component } from 'react'
import { Slide } from './slide'

export class Slider extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentIndex: 3,
            zindex: [4, 5, 6]
        }

    
    }
    changeIndex = (slide) => {
        console.log("slide index was " + slide.style.zIndex)
        // if(parseInt(slide.style.zIndex, 10) === 1){
        //     slide.style.zIndex = 4
        // } else if(parseInt(slide.style.zIndex, 10) === 2){
        //     slide.style.zIndex = 5
        // } else if(parseInt(slide.style.zIndex, 10) === 3){
        //     slide.style.zIndex = 6
        // }

        switch(parseInt(slide.style.zIndex, 10)){
            case 1:
                slide.style.zIndex = 4;
                break;
            case 2:
                slide.style.zIndex = 5;
                break;
            case 3:
                slide.style.zIndex = 6;
                break;
            case 4:
                slide.style.zIndex = 1;
                break;
            case 5:
                slide.style.zIndex = 2;
                break;   
            case 6:
                slide.style.zIndex = 3;
                break; 
        }

        slide.style.left = "0px"
        //slide.style.zIndex = slide.style.zIndex - 3
        console.log("slide index is now " + slide.style.zIndex)
    }
    
    changeSlide = () => {

        if(this.state.currentIndex === 1){
            console.log("hello")
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + 3
            }))
        }

        let slide = document.getElementById(`slide${this.state.currentIndex}`)

        console.log(slide.id)

        slide.style.left = "-100%"

        setTimeout(this.changeIndex, 1000, slide)

        console.log(this.state.currentIndex)

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }))
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
            return (<Slide source={image.source} id={`slide${image.id}`} alt={image.alt} key={image.id} zindex={this.state.zindex[image.id - 1]} next={this.changeSlide}/>)
        })   



        return (
            <div className="slide-container">
            {slides}
                <div className="home-text-container">
                <h1>Title Here</h1>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <button>CTA</button>
            </div> 
                
            </div>
            
        )

    }
  
}
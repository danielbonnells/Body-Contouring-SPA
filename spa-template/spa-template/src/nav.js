import React from 'react'
import { Logo } from './logo'

export const Nav = () => {

    window.addEventListener('scroll', function() {
        let y = window.pageYOffset
       //console.log(y)
       let nav = document.getElementById('navigation-container')
       
       if( y > 100){
           //console.log('y is greater than 100')
           nav.classList.remove('navIsAtTop')
           nav.classList.add('navIsNotAtTop')
        
       } else {
        nav.classList.add('navIsAtTop')
        nav.classList.remove('navIsNotAtTop')
       }

      })

      //let links = document.querySelectorAll('li')
      //console.log(links)

    return (
        <div id="navigation-container" className="navigation-container">
            <Logo />
            <ul>
                <li><a href="#home" rel="noopener" className="active-nav">Home</a></li>
                <li><a href="#services" rel="noopener">Services</a></li>
                <li><a href="#testimonials" rel="noopener">Testimonials</a></li>
                <li><a href="#photogallery" rel="noopener">Photo Gallery</a></li>
                <li><a href="#contactus" rel="noopener">Contact Us</a></li>
            </ul>
        </div>
    ) 

}
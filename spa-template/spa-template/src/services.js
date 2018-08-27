import React from 'react'
import {CTA} from './cta'

export const Services = () => {
    return (
        <div id="services" className="services-container">
            <h1 className="services-title">Services</h1>
            <div className="services-list left-services">
                <h3>Face Treatments</h3>
                <ul>
                    <li>Text Here</li>
                    <li>Text Here</li>
                    <li>Text Here</li>
                    <li>Text Here</li>
                    <li>Text Here</li>
                    <li>Text Here</li>
                </ul>
            </div>
            <div className="services-list right-services">
                <h3>Body Treatments</h3>
                <ul>
                    <li>Text Here</li>
                    <li>Text Here</li>
                    <li>Text Here</li>
                    <li>Text Here</li>
                    <li>Text Here</li>
                    <li>Text Here</li>
                </ul>
            </div>
            <div className="services-btn-container">
                <CTA kind="cta cta-services" text="Book A Slot On Our Calendar"/>
            </div>
            

        </div>
    )
}
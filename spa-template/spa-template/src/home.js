import React from 'react'
import { Slider } from './slider'

export const Home = () => {
    return(
        <div className="home-container">
            <div className="home-text-container">
                <h1>Title Here</h1>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <button>CTA</button>
            </div> 
            <Slider />
            
        </div>
    )
}
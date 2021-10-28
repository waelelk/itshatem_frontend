import React from 'react'
import Education from '../components/Education'
import Working from '../components/Working' 
import Blog from './Blog'

import './Home.css'

function Home() {
    return (
        <>
            <div className="sliding-text-container">
                <div className="big-text">
                    i. DESIGN. i. DEVELOP. i. BUILD.
                </div>
                <div className="small-text">
                    <span>ITS.HATEM. <br/> A. FULLSTACK. DEVELOPER.</span>
                </div>
            </div>
            <Education />      
            <Working />
            <Blog />
        </>
    )
}

export default Home

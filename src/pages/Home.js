import React from 'react'

import Nav from "../components/Nav";
import Education from '../components/Education'
import Working from '../components/Working'
import Project from '../components/Project';
import Contact from '../components/Contact'

import './Home.css'

function Home() {
    return (
        <>
            <Nav />
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
            <Project />
            <Contact />
        </>
    )
}

export default Home

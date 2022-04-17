import React from 'react'

import Education from '../components/Education'
import Working from '../components/Working'
import Project from '../components/Project'
import Contact from '../components/Contact'

import './Home.css'

function Home() {
    return (
        <>
        
            <div className="sliding-text-container">
                <div className="small-text">
                    <p className='title-lines'>
                    <span>”</span>
                    C
                    <span>o</span>
                    DE
                    <span>R</span>
                    ,
                    </p>
                    <p className='title-lines'>
                    <span>d</span>
                    ESI
                    <span>G</span>
                    N 
                    <span>A</span>
                    DDICT
                    </p>
                    <p className='title-lines'>
                    <span>A</span>
                    BST
                    <span>RA</span>
                    CT
                    </p>
                    <p className='title-lines'>
                    T
                    <span>H</span>
                    INKE
                    <span>R.”</span>
                    </p>
                    
                   
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

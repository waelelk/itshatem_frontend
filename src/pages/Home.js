import React, {useEffect} from 'react'

import Aos from "aos"
import "aos/dist/aos.css"

import Education from '../components/Education'
import Working from '../components/Working'
import Project from '../components/Project'
import Contact from '../components/Contact'

import './Home.css'

function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <div className="sliding-text-container dark:bg-black">
                <div data-aos="fade-up" className="small-text dark:text-white">
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
            <div className=' dark:bg-black lg:py-44 p-10'>
                <div data-aos="fade-up" className=' font-medium lg:pb-32 pb-10 lg:text-8xl text-5xl text-center dark:text-white'>
                    <p>WHO AM I?</p>
                </div>  
                <div data-aos="fade-up" className='lg:px-20 p-0 '>
                    <p className='dark:text-white  lg:text-6xl text-2xl pb-10'>
                        HEY I'M HATEM
                     </p>
                    <p className='dark:text-white lg:text-5xl text-xl leading-loose font-extralight'> 27 years old, graduated from computer science majored in <span className='text-red-200 line-through'> Artificial Intelligence </span>, where I picked up numerous skills. Meanwhile,I entered as a web designer and gradually started doing development as well. I’ve had experiences in using multiple programming languages and frameworks to achieve the goal.</p>
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

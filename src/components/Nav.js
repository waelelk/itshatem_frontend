import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import Aos from "aos"
import "aos/dist/aos.css"



function Nav() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
        <div>
            <div data-aos="fade-down" className="sticky flex justify-between mt-10 mx-10">
                <Link to={`/`} >
                <img src="/Hatem.png" alt="Logo" className="w-10 h-6 lg:w-16 lg:h-10" />
                </Link>
                <Link to={`/blog`} id="plus" className="cursor-pointer font-bold">
                <h1 className="text-white text-base lg:text-2xl md:text-2xl">
                    + INFORMATION  
                </h1>
                </Link>
        </div> 
        </div> 
        </>
    )
}

export default Nav

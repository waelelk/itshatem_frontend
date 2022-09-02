import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import "aos/dist/aos.css"

export default function Nav() {

    const toggleDarkMode = () => document.querySelector('body').classList.toggle('dark');

    return (
        <>
        <div className="dark:bg-black  top-0 z-50">
            <div className="sticky flex justify-between p-6">
                <Link to={`/`} >
                <h1 className="dark:text-white font-bold lg:text-2xl md:text-2xl">
                            +HATEM
                        </h1>
                </Link>
                <div className="grid grid-cols-2 gap-2 content-center">
                    <button onClick={toggleDarkMode} for="small-toggle" className="">
                    <span class="dark:text-white px-3 text-sm font-bold">CHANGE MODE</span>
                    </button>
                    <Link to={`/blog`} id="plus" className="cursor-pointer font-bold ">
                        <h1 className="dark:text-white text-base lg:text-2xl md:text-2xl">
                            + INFORMATION
                        </h1>
                    </Link>                                  
                </div> 
            </div>
        </div>  
        </>
    )
}

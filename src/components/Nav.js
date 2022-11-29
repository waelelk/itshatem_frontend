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
                <div className="">
                    <button onClick={toggleDarkMode}>
                    <span class="dark:text-white px-3 text-sm font-bold ">CHANGE MODE</span>
                    </button>                                  
                </div> 
            </div>
        </div>  
        </>
    )
}

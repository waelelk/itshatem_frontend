import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <>
            <div className="flex justify-between my-8 mx-10">
            <Link to={`/`} >
            <img src="/Images/Hatem.png" alt="Logo" className="w-10 h-6 lg:w-20 lg:h-12" />
            </Link>
            <Link to={`/blog`} id="plus" className="cursor-pointer font-bold">
            <h1 className="text-white text-base lg:text-2xl md:text-2xl">
                + INFORMATION  
            </h1>
            </Link>
        </div>
            
            
        </>
    )
}

export default Nav

import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <>
        <div className="flex justify-between my-8 mx-10">
            <img src="/Images/Hatem.png" className="w-8 h-8 lg:w-12 h-12" />
            <Link to={`/blog`} id="plus" className="cursor-pointer font-bold">
            <h1 className="text-white text-xl lg:text-2xl md:text-2xl">
                + INFORMATION  
            </h1>
            </Link>
        </div>
            
            
        </>
    )
}

export default Nav

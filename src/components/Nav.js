import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <>
        <div className="flex justify-between my-8 mx-10">
            <h1 className="text-white text-2xl">
                
            </h1>
            <Link to={`/blog`} id="plus" className="cursor-pointer font-bold">
            <h1 className="text-white text-2xl hidden md:block">
                + INFORMATION  
            </h1>
            </Link>
            </div>
            
            
        </>
    )
}

export default Nav

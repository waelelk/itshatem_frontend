import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <>
        <div className='relative absolute z-50'>
            <div className="absolute top-0 right-0 mt-8 mx-10">
                {/* <Link to={`/`} >
                    <img src="/Images/Hatem.png" alt="Logo" className="w-10 h-6 lg:w-16 lg:h-10" />
                </Link> */}
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

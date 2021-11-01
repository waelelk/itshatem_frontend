import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';

import useFetch from '../hooks/useFetch'

function Blog() {
    const { loading, error, data } = useFetch('https://murmuring-bastion-23285.herokuapp.com/blogs')
    console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>



    return ( 
        <>
            <div className=" p-6">
                <Link to={`/`}>
                    <div class="text-white">
                        <h3 class="text-xl mb-3 font-base inline-flex">
                            <svg class="mr-2 text-white" width="24" height="30" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                                    fill="currentColor" /></svg>
                            Prev
                        </h3>
                </div>
                </Link>
            </div>
            <div className="p-10 lg:p-24 md:p-24 md:px-28">
                <div className="flex flex-wrap lg:p-24">
                    {data.map(blog => (
                        <div className="lg:pr-6 pt-6" key={blog.id}>
                            <div>
                                <Link to={`/blogs/${blog.id}`}>
                                    <div className="text-white w-50 lg:w-96 cursor-pointer overflow-hidden transform lg:hover:scale-105 duration-500">
                                        <img alt="blog_img" src={blog.image[0].formats.medium.url} />
                                        <div className="p-4 ">
                                            <p className="inline text-white bg-gray-600 py-1 px-4 rounded-lg text-xs">
                                                <Moment format="MMM Do YYYY">{blog.created_at}</Moment>
                                            </p>
                                            <h3 className="text-white font-regular text-base lg:text-xl md:text-xl tracking-tight mt-3" id="title">
                                                {blog.title}
                                            </h3>
                                            <p className="text-white text-sm mt-1">
                                                {blog.desc.substring(0, 70)}....
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog

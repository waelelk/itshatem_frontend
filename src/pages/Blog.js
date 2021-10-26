import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';

import useFetch from '../hooks/useFetch'

function Blog() {
    const { loading, error, data } = useFetch('https://morning-caverns-72229.herokuapp.com/blogs')
    console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>



    return ( 
        <>
            <div className="bg-white p-10 lg:p-24 md:p-24 md:px-28">
            <h1 className=" text-3xl lg:text-6xl md:text-4xl mb-6 font-semibold">Blog</h1>
                <div className="flex flex-wrap lg:p-24">
                    {data.map(blog => (
                        <div className="lg:pr-6 pt-6 " key={blog.id}>
                            <div>
                                <Link to={`/blogs/${blog.id}`}>
                                    <div className="w-50 lg:w-96 cursor-pointer overflow-hidden transform lg:hover:scale-105 duration-500">
                                        <img alt="blog_img" src={blog.Image[0].formats.medium.url} />
                                        <div className="p-4 bg-gray-100 ">
                                            <p className="inline text-white bg-gray-600 py-1 px-4 rounded-lg text-xs">
                                                <Moment format="MMM Do YYYY">{blog.created_at}</Moment>
                                            </p>
                                            <h3 className="font-regular text-base lg:text-xl md:text-xl tracking-tight mt-3" id="title">
                                                {blog.Title}
                                            </h3>
                                            <p className="text-sm mt-1">
                                                {blog.Desc.substring(0, 70)}....
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

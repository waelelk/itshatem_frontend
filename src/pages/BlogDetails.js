import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

import useFetch from '../hooks/useFetch'

function BlogDetails() {
    const { id } = useParams()
    const { loading, error, data } = useFetch('https://hatem-portfolio.herokuapp.com/blogs/' + id);
    console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <div>
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
            
            <div className="flex flex-col items-center pt-16">
            <img alt="Img" src={`https://hatem-portfolio.herokuapp.com${data.images.formats.medium.url}`} />
            </div>
            <article className="py-12 px-4">
                <h1 className="text-white text-4xl text-center mb-4 font-semibold font-heading font-semibold">
                    {data.title}
                </h1>
                <p className="mb-4 text-white text-center ">
                     <span>Publish date: </span>
                    <Moment format="MMM Do YYYY">
                         {data.created_at}
                    </Moment>
                </p>
                <div className="max-w-3xl mx-auto">
                    <p className="mb-4 text-white leading-relaxed">
                        <ReactMarkdown>{data.content}</ReactMarkdown>
                    </p>
                </div>
            </article>
        </div>
    )
}

export default BlogDetails

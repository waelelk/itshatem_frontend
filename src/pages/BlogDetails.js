import React from 'react'
import { useParams } from 'react-router-dom'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

import useFetch from '../hooks/useFetch'

function BlogDetails() {
    const { id } = useParams()
    const { loading, error, data } = useFetch('https://murmuring-bastion-23285.herokuapp.com/blogs/' + id)

    if (loading) return <p className="text-white">Loading...</p>
    if (error) return <p className="text-white">Error :(</p>
    return (
        <div>
            <div className="flex flex-col items-center pt-16">
            <img alt="Img" src={data.image[0].formats.small.url} />
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

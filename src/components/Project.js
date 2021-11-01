import React from 'react'
import ReactMarkdown from 'react-markdown'

import useFetch from '../hooks/useFetch'


function Project() {

    const { loading, error, data } = useFetch('https://murmuring-bastion-23285.herokuapp.com/Projects')
    console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div className="p-10 lg:p-24 md:p-24 md:px-28">
            {data.map(project => (
                <section className="p py-10">
                    <div className="mx-auto flex md:flex-row flex-col items-center jobcard">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                            <figure className="visible">
                                <div className="">
                                    <div className="px-2 sm:px-6 text-white">
                                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                                            {project.title}
                                        </h1>
                                        <ReactMarkdown className="text-base pb-6">
                                            {project.content}
                                        </ReactMarkdown>
                                        <ReactMarkdown className="title-font sm:text-2xl text-xl mb-4 font-medium">
                                            {project.desc}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div className="lg:w-7/12 opacity-60 ">
                            <img className="object-cover object-center rounded" alt="Project"
                                src={project.image[0].formats.medium.url} />
                        </div>
                    </div>      
                </section>
                 ))}
            
        </div>
    )
}

export default Project

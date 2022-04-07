import React from 'react'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import useFetch from '../hooks/useFetch'


function Project() {

    const { loading, error, data } = useFetch('https://murmuring-bastion-23285.herokuapp.com/Projects')
    console.log(data)

    if (loading) return <p className="text-white">Loading...</p>
    if (error) return <p className="text-white">Error :(</p>

    return (
        <div className="p-10 md:p-24 md:px-28">
            <h1 className="text-white text-3xl lg:text-6xl md:text-4xl mb-6 font-semibold">Projects</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {data.map(project => (
                    <div className="lg:pr-6 pt-6" key={project.id}>
                        <div>
                            {`/blogs/${project.id}`}
                                <div className="p-2 text-white w-50 lg:w-96 overflow-hidden">
                                    <img alt="blog_img" src={project.image[0].formats.medium.url} />
                                    <div className="p-4 ">
                                        <p className="inline text-white bg-gray-600 py-1 px-4 rounded-lg text-xs">
                                            <Moment format="MMM Do YYYY">{project.created_at}</Moment>
                                        </p>
                                        <h3 className="text-white font-regular text-base lg:text-xl md:text-xl tracking-tight mt-3" id="title">
                                            {project.title}
                                        </h3>                                              
                                        <ReactMarkdown className="title-font pt-4 sm:text-2xl text-xl mb-4 font-medium">
                                            {project.desc}
                                        </ReactMarkdown>
                                    </div>
                                </div>                                  
                        </div>
                    </div>
                ))}
            </div>
        </div>   
    )
}

export default Project

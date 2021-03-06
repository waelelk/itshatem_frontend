import React, {useEffect} from 'react'

import Aos from "aos"
import "aos/dist/aos.css"

function Work() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <section>
            <div className="dark:bg-black lg:pb-44 p-10 px-10 lg:p-24 md:p-24 md:px-28">
                <div className="container lg:flex flex-col items-start md:flex-row ">
                    <div data-aos="fade-up" className="flex flex-col w-full lg:sticky md:top-36 lg:w-2/3">
                        <h2 className="dark:text-white lg:text-xl md:text-4xl font-regular">My Current Position</h2>
                        <h1 className="dark:text-white text-3xl lg:text-4xl md:text-4xl font-semibold pt-3">Web Developer</h1>
                        <h2 className="dark:text-white lg:text-xl md:text-4xl font-regular pt-3">
                            Momentum Tutoring - New Zeland
                        </h2>
                    </div>
                    <div className="lg:w-2/3 pt-10 lg:pt-16">
                        <div className="container mx-auto">
                            <div className="relative wrap overflow-hidden ">
                                <div data-aos="fade-left" className="mb-8 lg:flex lg:justify-between lg:flex-row-reverse ">
                                    <div className="order-1 lg:w-5/12"></div>
                                    <div className="order-1 py-4">
                                        <p className="dark:text-white mb-3 text-xl lg:text-xl md:text-2xl">2012-2014</p>
                                        <h2 className="dark:text-white mb-3 text-2xl lg:text-xl md:text-4xl font-medium tracking-loose">
                                            Resaler - Family Business</h2>
                                        <h3 className="dark:text-white mb-3 text-lg font-light">
                                            Teknok - Libya
                                        </h3>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="mb-8 flex lg:justify-between">
                                    <div className="order-1"></div>
                                    <div className="order-1 py-4">
                                        <p className="dark:text-white mb-3 text-xl lg:text-xl md:text-2xl font-regular">2015-2016</p>
                                        <h2 className="dark:text-white mb-3 text-2xl lg:text-xl md:text-4xl font-medium tracking-loose">
                                            Wordpress Developer</h2>
                                        <h3 className="dark:text-white mb-3 text-xl lg:text-xl md:text-3xl font-regular">
                                            Aca.gov.ly - Libya
                                        </h3>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="mb-8 lg:flex lg:justify-between lg:flex-row-reverse ">
                                    <div className="order-1 lg:w-5/12"></div>
                                    <div className="order-1 py-4">
                                        <p className="dark:text-white mb-3 text-xl lg:text-xl md:text-2xl">2019-2020</p>
                                        <h2 className="dark:text-white mb-3 text-2xl lg:text-xl md:text-4xl font-medium tracking-loose">
                                            Content Specialist</h2>
                                        <h3 className="dark:text-white mb-3 text-lg font-light">
                                            Content Nation - Malaysia
                                        </h3>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="mb-8 flex lg:justify-between">
                                    <div className="order-1"></div>
                                    <div className="order-1 py-4">
                                        <p className="dark:text-white mb-3 text-xl lg:text-xl md:text-2xl font-regular">2020-2021</p>
                                        <h2 className="dark:text-white mb-3 text-2xl lg:text-xl md:text-4xl font-medium tracking-loose">
                                            Web Design And Development</h2>
                                        <h3 className="dark:text-white mb-3 text-xl lg:text-xl md:text-3xl font-regular">
                                            Freelancing - Worldwide
                                        </h3>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="mb-8 lg:flex lg:justify-between lg:flex-row-reverse ">
                                    <div className="order-1 lg:w-5/12"></div>
                                    <div className="order-1 py-4">
                                        <p className="dark:text-white mb-3 text-xl lg:text-xl md:text-2xl">2022-???</p>
                                        <h2 className="dark:text-white mb-3 text-2xl lg:text-xl md:text-4xl font-mediumtracking-loose">
                                            Your Open Position</h2>
                                        <h3 className="dark:text-white mb-3 text-lg font-light">
                                            Might be you - Anywhere in the world
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work

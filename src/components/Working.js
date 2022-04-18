import React, {useEffect} from 'react'

import Aos from "aos"
import "aos/dist/aos.css"

function Work() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <section>
            <div class="lg:pb-72 p-10 px-10 lg:p-24 md:p-24 md:px-28">
                <div class="container lg:flex flex-col items-start md:flex-row ">
                    <div data-aos="fade-up" class="flex flex-col w-full lg:sticky md:top-36 lg:w-2/3">
                        <h2 class="lg:text-xl md:text-4xl font-regular text-gray-200">My Current Position</h2>
                        <h1 class="text-3xl lg:text-4xl md:text-4xl font-semibold text-white pt-3">Cheif Design Officer</h1>
                        <h2 class="lg:text-xl md:text-4xl font-regular text-gray-200 pt-3">
                            Mozaic Gourmet - Kuala Lumpur, Malaysia
                        </h2>
                    </div>
                    <div class="lg:w-2/3 pt-10 lg:pt-16">
                        <div class="container mx-auto">
                            <div class="relative wrap overflow-hidden ">
                                <div data-aos="fade-left" class="mb-8 lg:flex lg:justify-between lg:flex-row-reverse ">
                                    <div class="order-1 lg:w-5/12"></div>
                                    <div class="order-1 py-4">
                                        <p class="mb-3 text-xl lg:text-xl md:text-2xl text-gray-400">2013-2014</p>
                                        <h2 class="mb-3 text-2xl lg:text-xl md:text-4xl font-medium text-white tracking-loose">
                                            Shop Owner - Resaler</h2>
                                        <h3 class="mb-3 text-lg font-light text-gray-200">
                                            Teknok / Benghazi, Libya
                                        </h3>
                                    </div>
                                </div>
                                <div data-aos="fade-left" class="mb-8 flex lg:justify-between">
                                    <div class="order-1"></div>
                                    <div class="order-1 py-4">
                                        <p class="mb-3 text-xl lg:text-xl md:text-2xl font-regular text-gray-400">2015-2016</p>
                                        <h2 class="mb-3 text-2xl lg:text-xl md:text-4xl font-medium text-white tracking-loose">
                                            Wordpress Developer</h2>
                                        <h3 class="mb-3 text-xl lg:text-xl md:text-3xl font-regular text-gray-400">
                                            Aca.gov.ly - Benghazi, Libya
                                        </h3>
                                    </div>
                                </div>
                                <div data-aos="fade-left" class="mb-8 lg:flex lg:justify-between lg:flex-row-reverse ">
                                    <div class="order-1 lg:w-5/12"></div>
                                    <div class="order-1 py-4">
                                        <p class="mb-3 text-xl lg:text-xl md:text-2xl font-regular text-gray-400"> 2018-2019</p>
                                        <h2 class="mb-3 text-2xl lg:text-xl md:text-4xl font-medium text-white tracking-loose">
                                            Front-End Developer</h2>
                                        <h3 class="mb-3 text-xl lg:text-xl md:text-3xl font-regular text-gray-400">
                                            Mina - Kuala Lumpur, Malaysia
                                        </h3>
                                    </div>
                                </div>
                                <div data-aos="fade-left" class="mb-8 flex lg:justify-between">
                                    <div class="order-1"></div>
                                    <div class="order-1 py-4">
                                        <p class="mb-3 text-xl lg:text-xl md:text-2xl font-regular text-gray-400">2019-2020</p>
                                        <h2 class="mb-3 text-2xl lg:text-xl md:text-4xl font-medium text-white tracking-loose">Content Specialist</h2>
                                        <h3 class="mb-3 text-xl lg:text-xl md:text-3xl font-regular text-gray-400">
                                            Content Nation - Malaysia
                                        </h3>
                                    </div>
                                </div>
                                <div data-aos="fade-left" class="mb-8 lg:flex lg:justify-between lg:flex-row-reverse ">
                                    <div class="order-1 lg:w-5/12"></div>
                                    <div class="order-1 py-4">
                                        <p class="mb-3 text-xl lg:text-xl md:text-2xl font-regular text-gray-400"> 2020-2022</p>
                                        <h2 class="mb-3 text-2xl lg:text-xl md:text-4xl font-medium text-white tracking-loose">
                                            Acoustic specialist</h2>
                                        <h3 class="mb-3 text-xl lg:text-xl md:text-3xl font-regular text-gray-400">
                                            Wug Accoustics - Selangor, Malaysia
                                        </h3>
                                    </div>
                                </div>
                                <div data-aos="fade-left" class="mb-8 flex lg:justify-between">
                                    <div class="order-1"></div>
                                    <div class="order-1 py-4">
                                        <p class="mb-3 text-xl lg:text-xl md:text-2xl font-regular text-gray-400">2022-present</p>
                                        <h2 class="mb-3 text-2xl lg:text-xl md:text-4xl font-medium text-white tracking-loose">Wordpress Developer</h2>
                                        <h3 class="mb-3 text-xl lg:text-xl md:text-3xl font-regular text-gray-400">
                                            Momentum Tutoring - Auckland, New Zeland
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
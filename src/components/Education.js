import React from 'react'

function Education() {
    return (
        <section class="p-10 lg:p-24 md:p-24 md:px-28 bg-white">
            <h1 class="text-3xl lg:text-6xl md:text-4xl mb-6 font-semibold">Education</h1>
            <div class="container mx-auto">
                    <div class="pb-8 md:pt-10 flex-nowrap lg:flex">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <h2 class="text-2xl lg:text-3xl md:text-2xl text-black font-medium">HIGH-SCHOOL</h2>
                            <p class="text-xl lg:text-xl md:text-xl font-regular text-black pt-3">2009-2012</p>
                        </div>
                        <div class="md:flex-grow lg:pt-0 md:pt-10">
                            <h2 class="text-xl lg:text-3xl md:text-4xl font-medium text-black">Al-Hadayik-Nomidjiya</h2>
                            <p class="text-base md:text-xl leading-relaxed text-black pt-5">I have completed the high school diploma in Al-Hadayik-Nomidjiya. I followed science stream back then where I studied basic engineering for three years.</p>
                        </div>
                    </div>
                    <div class=" pt-10 flex-nowrap lg:flex">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <h2 class="text-2xl font-medium text-black">BS: COMPUTER SCIENCE</h2>
                            <p class="text-xl lg:text-xl md:text-2xl font-regular text-black pt-3">2014-2020</p>
                        </div>
                        <div class="md:flex-grow lg:pt-0 md:pt-10">
                            <h2 class="text-xl lg:text-3xl md:text-4xl font-medium text-black">University of Malaya</h2>
                        <p class="text-base md:text-xl leading-relaxed text-black pt-5">
                        Later, I was offered a place in Computer Science in University of Malaya where I majored in Artificial Intelligence, and I obtained my bachelor’s degree in 2020.
                            </p>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Education
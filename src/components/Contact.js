import React, {useEffect} from 'react'

import Aos from "aos"
import "aos/dist/aos.css"

function Contact() {
     useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <div className="dark:bg-black p-10 lg:p-24 md:p-24 md:px-28">
            <h1 data-aos="fade-up" className="dark:text-white text-3xl lg:text-6xl md:text-4xl mb-6 font-semibold">Contact</h1>
                <form data-aos="fade-up" action="https://formsubmit.co/wael.alkezza21@gmail.com" method="POST" className="lg:pr-6 pt-6 text-gray-900 text-3xl space-y-10">
                    <div className="dark:bg-black flex flex-col space-x-3">
                        <label className="text-2xl lg:text-4xl md:text-4xl" for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Hatem Hussein" className="text-2xl flex-grow bg-transparent border-b-4 border-gray-900 pt-6 outline-none dark:bg-black focus:border-white placeholder-gray-400" />
                    </div>
                    <div className="dark:bg-black flex flex-col space-x-3">
                        <label className="text-2xl lg:text-4xl md:text-4xl" for="username">Email</label>
                        <input type="text" id="email" name="email" placeholder="@itshatem" className="text-2xl flex-grow bg-transparent border-b-4 border-gray-900 pt-6 outline-none dark:bg-black focus:border-white" />
                    </div>
                    <div className="dark:bg-black flex flex-col space-x-3">
                        <label className="text-2xl lg:text-4xl md:text-4xl" for="username">Message</label>
                        <input type="text" id="message" name="message" placeholder="Hey Hatem, I would like to..." className="text-2xl flex-grow bg-transparent border-b-4 border-gray-900 pt-6 outline-none dark:bg-black focus:border-white" />
                    </div>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://itshatem.tech/thanks" />
                    <div className="text-right">
                        <button className="dark:text-white text-2xl lg:text-4xl md:text-4xl py-4 px-8">Send</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact

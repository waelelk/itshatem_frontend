import React from 'react'

function Contact() {
    return (
        <div>
            <div className="p-10 lg:p-24 md:p-24 md:px-28">
            <h1 className="text-white text-3xl lg:text-6xl md:text-4xl mb-6 font-semibold">Contact</h1>
                <form action="https://formsubmit.co/wael.alkezza21@gmail.com" method="POST" className="lg:pr-6 pt-6 text-gray-900 text-3xl space-y-10">
                    <div className="text-white flex items-center space-x-3">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Hatem Hussein" className="flex-grow bg-transparent border-b-4 border-gray-900 p-6 outline-none text-white focus:border-white placeholder-gray-400" />
                    </div>
                    <div className="text-white flex items-center space-x-3">
                        <label for="username">Email</label>
                        <input type="text" id="email" name="email" placeholder="@itshatem" className="flex-grow bg-transparent border-b-4 border-gray-900 p-6 outline-none text-white focus:border-white" />
                    </div>
                    <div className="text-white flex items-center space-x-3">
                        <label for="username">Message</label>
                        <input type="text" id="message" name="message" placeholder="Hey Hatem, I would like to..." className="flex-grow bg-transparent border-b-4 border-gray-900 p-6 outline-none text-white focus:border-white" />
                    </div>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://itshatem.tech/Thanks.js" />
                    <div className="text-right">
                        <button className="bg-black text-white hover:bg-white hover:text-black py-4 px-8">Send</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact

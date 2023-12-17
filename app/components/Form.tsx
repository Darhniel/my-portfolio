'use client'
import {useState} from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e: any) {
        e.preventDefault()
        console.log(e)
        console.log(name, email, message);
    }

    return(
        <>
            <form action="https://formsubmit.co/nnadidarhniel20@gmail.com" className="md:w-1/2 mx-auto bg-white rounded-lg mt-8 p-8" onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value={"false"}/>
                <input type="text" name="_honey" style={{display: "none"}}/>
                {/* <input type="hidden" name="_next" value={"htt"}/> */}
                <div className="mb-6">
                    <label htmlFor="name" className="text-p-grey font-semibold block mb-2">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name" className="bg-p-bg-grey w-full py-2 px-4 rounded-lg outline-none placeholder:font-semibold" defaultValue={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="text-p-grey font-semibold block mb-2">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" className="bg-p-bg-grey w-full py-2 px-4 rounded-lg outline-none placeholder:font-semibold" defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="text-p-grey font-semibold block mb-2">Message</label>
                    <textarea name="message" id="message" cols={30} rows={10} placeholder="Enter Your Message" className="bg-p-bg-grey w-full py-2 px-4 rounded-lg outline-none placeholder:font-semibold" defaultValue={message} onChange={(e) => setMessage(e.target.value)}>

                    </textarea>
                </div>

                <input type="submit" value="submit" className="block rounded-lg uppercase py-4 px-16 w-full mt-8 bg-p-brown font-semibold text-white hover:transition-all hover:duration-500 hover:-translate-y-2 cursor-pointer" />
            </form>
        </>
    )
}
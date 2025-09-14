import React, { useState } from 'react'
import Button from '../button/Button'


function Contactpage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handlechange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}, we received your message!`);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div className='mt-30 mb-15 flex flex-col w-90 gap-y-6 bg-lime-500/60 shadow-xl rounded-xl p-10  gap-x-2 md:ml-130 mr-80 left-1/2 ml-10'>
            <h1 className='flex items-center justify-center'>Contact us</h1>
            <form onSubmit={handlesubmit} className='space-y-4'>
                <div>
                    <h1>Name</h1>
                    <input type="text" className='border-2 border-lime-700 h-[5vh] w-[42vh] px-3 focus:outline-none' placeholder='Enter your Name' value={formData.name} onChange={handlechange} name="name" required/>
                </div>
                <div>
                    <h1>Email</h1>
                    <input type="Email" className='border-2 border-lime-700 h-[5vh] w-[42vh] px-3 focus:outline-none' placeholder='Enter your email' value={formData.email} onChange={handlechange} name="email" required/>
                </div>
                <div>
                    <h1>Message</h1>
                    <input type="text " className='h-18 border-2 border-lime-700 rounuded-lg  w-[42vh] px-3 focus:outline-none' placeholder='Type your Message' value={formData.message} onChange={handlechange} name="message" required />
                </div>
                <button className='bg-gradient-to-b from-lime-400 to-lime-500 text-white flex items-center justify-center px- py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-lime-600 transition-all duration-300 cursor-pointer w-[15vh] h-[5vh] '>Submit</button>
            </form>
        </div>
    )
}

export default Contactpage

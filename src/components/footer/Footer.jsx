import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-20'>
            <div className=' flex flex-wrap gap-y-10 max-w-[1400px] mx-auto px-10'>
                <div className='flex-1 basis-[300px]'>
                    <a href="#" className='text-5xl font-Quicksand'>
                        Gr<span className='text-lime-500 uppercase'>o</span>cify
                    </a>
                    <p className='text-zinc-600 mt-6 max-w-[360px]'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                    </p>
                    <p className='text-zinc-800 mt-6'>
                        2025 &copy; all rights reserved
                    </p>
                </div>
                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-lime-500'>about</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-lime-500'>FAQ'S</a>
                    </li>
                </ul>
                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-lime-500'>support center</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-lime-500'>feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='hover:text-lime-500'>contact us</a>
                    </li>
                </ul>
                <div className='flex-1'>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Stay connected</h5>
                    <p className='mt-6 text-zinc-600'>
                        questions or Feedbacks?<br />
                        we'd love to hear from you
                    </p>
                    <div className='flex-1 flex p-1 rounded-lg mt-6 bg-white mr-40'>
                        <input className='flex-1 h-[5vh] ml-4 focus:outline-none' type='email' name='email' id='email' autoComplete='off' placeholder='email address' />
                        <button className='bg-gradient-to-b from-lime-400 to-lime-500 p-2 rounded-lg text-white text-2xl hover:to-lime-600 cursor-pointer'>
                            <IoIosArrowForward />
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer

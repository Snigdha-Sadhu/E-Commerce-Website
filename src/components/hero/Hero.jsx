import React from 'react'
import groce from '../../assets/groce.png'
import Button from '../button/Button';

const Hero = () => {
    return (

        <section >
            <div className='min-h-screen max-w-[1400px] max-auto flex md:flex-row flex-col items-start md:pt-25 pt-30'>
                <div className='flex-1 ml-9 '>
                    <img src={groce} className='max-w-[100%] mr-30' alt="hero image" />
                </div>
                <div className='bannertext ml-12 flex-1'>
                    <span className='bg-lime-100 text-lime-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                    <h1 className='md:text-7xl/20 text-5xl/15 mt-4 font-bold'>Tasty Organic <span className='text-lime-500'>Fruits</span> & <span className='text-lime-500'>Vegetables</span><br />In Your City.</h1>
                    <p className='max-w-[530px] text-zinc-800 md:text-3xl text-2xl text-md mt-5 mb-10'>Freshness Packed with Nutrition.</p>
                    <Button content="shop now"></Button>
                </div>
                
            </div>
        </section>
    );

}

export default Hero

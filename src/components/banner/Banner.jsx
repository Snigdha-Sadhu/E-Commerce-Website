import React from 'react'

const Banner = ({ title, bgimg }) => {
    return (
        <div className='bg-zinc-600 h-[50vh] mt-25 flex items-center justify-center bg-center bg-cover relative'
            style={{ backgroundImage: `url(${bgimg})` }} >
            <h2 className='text-5xl text-zinc-800 bg-white p-5 rounded-xl z-10'>{title}</h2>
            <div className='bg-black/50 absolute inset-0'>

            </div>
        </div>

    )
}

export default Banner


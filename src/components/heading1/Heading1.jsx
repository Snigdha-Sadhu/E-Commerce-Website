import React from 'react'

const Heading1 = ({ highlight, heading }) => {
    return (
        <div className='w-fit mx-auto'>
            <div className='md:text-5xl text-[2.5rem] font-bold'>
                <div><span className='text-lime-500'>{highlight}</span>{heading}
                </div>
                <div className='w-34 h-1 bg-lime-300 md:mt-6 mt-3 ml-auto'></div>
            </div>
        </div>
    )
}

export default Heading1

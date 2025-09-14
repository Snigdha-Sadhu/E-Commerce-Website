import React from 'react'

const Button = ({ content }) => {
    return (
        <button className='bg-gradient-to-b from-lime-400 to-lime-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-lime-600 transition-all duration-300 cursor-pointer'>{content}</button>
    )
}

export default Button

import React from 'react'
import Heading1 from '../heading1/Heading1'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import busket from '../../assets/basket-full-vegetables.png';

const Values = () => {
    const leftvalues = value.slice(0, 2).map(item => {
        return (
            <div key={item.id} className=' flex md:flex-row flex-row-reverse items-center gap-7'>
                <div className=' md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zink-600 mt-2' >{item.description}</p>
                </div>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-lime-400 to-lime-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
            </div>
        )
    })
    const rightvalues = value.slice(2).map(item => {
        return (
            <div key={item.id} className=' flex md: flex flex-row-reverse items-center gap-7'>
                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zink-600 mt-2' >{item.description}</p>
                </div>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-lime-400 to-lime-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className=' mt-15 max-w-[1400px] mx-auto px-10 py-20'>
                <Heading1 highlight="Our" heading=" Value"></Heading1>
                <div className='flex md:flex-row flex-col gap-8 md:gap-5'>
                    <div className=' md:min-h-100 gap-15 flex flex-col justify-between mt-10'>
                        {leftvalues}
                    </div>
                    <div className='md:flex w-1/2 hidden'>
                        <img src={busket} />
                    </div>
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between mt-10'>
                        {rightvalues}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values
const value = [
    {
        id: 1,
        title: 'Trust',
        description: 'It is a long established fact that a reader will be distracted by the readable',
        icon: <FaHeart />


    },
    {
        id: 2,
        title: 'Always Fresh',
        description: 'It is a long established fact that a reader will be distracted by the readable',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting induary',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100%Organic',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting induary',
        icon: <FaSeedling />
    }

]
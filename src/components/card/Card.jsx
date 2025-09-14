import React, { useState } from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../button/Button'
import Btn from '../btn1/Btn'
import { usewishlist } from '../wishlistContext/Wishlistcontext'


const Card = ({ image, name, price, addtobag }) => {
   const {wishlist,togglewishlist}=usewishlist();
   const Iswishlisted=wishlist[name] || false;
    return (

        <div className=' flex flex-col bg-zinc-100 p-5 rounded-lg'>
            <div className='flex justify-between'>
                <span className={`text-3xl ${Iswishlisted ? "text-red-500" : 'text-zinc-400'}`} onClick={()=>togglewishlist(name)}>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-lime-400 to-lime-500 text-white text-xl px-4 py-4 rounded-lg' onClick={addtobag}  >
                    <FaPlus></FaPlus>
                </button>
            </div>
            <div className='w-full h-60 mt-5 '>
                <img src={image} className='w-full h-60 ' />

            </div>
            <div className='flex flex-col justify-center items-center mt-3'>
                <h3 className='text-3xl font-semibold'>{name}</h3>
                <p className='text-2xl font-bold mt-2 mb-3'>${price.toFixed(2)}</p>
                <Btn content="shop now" />
            </div>

        </div>
    )
}

export default Card

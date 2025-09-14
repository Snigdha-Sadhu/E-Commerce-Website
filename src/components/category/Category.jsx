import React from 'react'
import diary from '../../assets/dairy-banner.jpg'
import meat from '../../assets/meat-and-seafood.png'
import Heading1 from '../heading1/Heading1'
import fruits from '../../assets/fruits-and-veggies.png';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const Category = () => {
    const renderCards = category.map(card => {
        return (
            <div className='flex-1 basis-[300px]' key={card.id}>
                <div className='bg-red-300 w-full min-h[30vh] relative -mb-10'>
                    <img src={card.image} className='absolute bottom-0' />
                </div>
                <div className='bg-zink-100 pt-17 p-8 rounded-xl'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Link to={card.path} className='bg-gradient-to-b from-lime-400 to-lime-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-lime-600 transition-all duration-300 cursor-pointer'>See all</Link>
                </div>
            </div>
        )
    })
    return (
        <section className=''>
            <div className='max-w-[1400px] mx-auto px-10 py-20 '>
                <Heading1 highlight="Shop" heading=" By Category"></Heading1>

                <div className='md:mt-64 mt-39 flex flex-wrap md:gap-10 gap-50 md:mt-15 '>
                    {renderCards}
                </div>
            </div>
        </section>

    )
}

export default Category
const category = [
    {
        id: 1,
        title: 'Fruits & Veggies',
        description: 'Straight from local farms to your table-enjoy fresh,organic fruits and vegetables bursting with flavor and nutrition.',
        image: fruits,
        path: '/fruits'
    },
    {
        id: 2,
        title: 'Diary & Eggs',
        description: 'Fresh,wholesome dairy and free-range eggs,crafted to bring creamy milk,rich yougurt,and artisanal cheeses straight to your table.',
        image: diary,
        path: 'dairy'
    },
    {
        id: 3,
        title: 'Meat & Seafood',
        description: 'High-quality,responsibly sourced meat and seafood.choose from fresh cuts,marinated option,and more.',
        image: meat,
        path: '/seafood'
    }
]

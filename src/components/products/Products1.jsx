import React, { useState } from 'react'
import Heading1 from '../heading1/Heading1'
import ProductList from '../productlist/ProductList'
import Card from '../card/Card'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Products1 = ({ addtobag, wishlist, togglewishlist }) => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActiveTab] = useState('All');
    let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab);
    const renderCards = filteredItems.slice(0, 8).map(product => {
        return (

            <Card image={product.image} name={product.name} price={product.price} addtobag={addtobag} ></Card>
        )
    })

    return (
        <section>
            <div className='mt-15 max-w-[1400px] mx-auto px-10 py-20'>
                <Heading1 highlight="Our" heading=" Products" ></Heading1>
                {/*tab */}
                <div className='flex  flex-wrap justify-center gap-3 mt-10 '>
                    {categories.map(category => {
                        return (
                            <button key={category} className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === category ? 'bg-gradient-to-b from-lime-400 to-lime-500 text-white' : 'bg-zinc-100'}`} onClick={() => setActiveTab(category)}>
                                {category}
                            </button>
                        )
                    })}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
                    {renderCards}
                </div>
                <div className='mt-15 flex justify-center'>
                    <Link to='/all' className='bg-gradient-to-b from-lime-400 to-lime-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-lime-600 transition-all duration-300 cursor-pointer'>view All</Link>
                </div>
            </div>
        </section>
    )
}

export default Products1

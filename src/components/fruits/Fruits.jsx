import React from 'react'
import Categorypage from '../CategoryPage/Categorypage'
import bgimg from '../../assets/AC-Fruits-and-Vegetables-1536x1246.jpg'

function Fruits({ addtobag,wishlist,togglewishlist }) {
    return (
        <div>
            <Categorypage title="Fruits & Veggies" bgimg={bgimg} categories={['Fruits', 'Vegetables']} addtobag={addtobag} wishlist={wishlist} togglewishlist={togglewishlist}/>
        </div>
    )
}

export default Fruits


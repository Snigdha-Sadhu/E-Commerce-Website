import React from 'react'
import Categorypage from '../CategoryPage/Categorypage'
import bgseafoods from '../../assets/istockphoto-594464350-612x612.jpg'


function Seafood({ addtobag ,wishlist,togglewishlist}) {
    return (
        <div>
            <Categorypage title="Seafoods & Meat" bgimg={bgseafoods} categories={['Meat', 'SeaFood']} addtobag={addtobag}wishlist={wishlist} togglewishlist={togglewishlist} />
        </div>
    )
}

export default Seafood

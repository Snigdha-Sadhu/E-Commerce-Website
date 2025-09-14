import React from 'react'
import Categorypage from '../CategoryPage/Categorypage'
import bgimg from '../../assets/real-food-pyramid-assortment-top-view.jpg'




function Allproduct({ addtobag }) {
    return (
        <div>
            <Categorypage title="All Products" bgimg={bgimg} categories={['All']} addtobag={addtobag}/>
        </div>
    )
}

export default Allproduct

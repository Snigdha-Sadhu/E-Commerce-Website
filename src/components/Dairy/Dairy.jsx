import React from 'react'
import Categorypage from '../CategoryPage/Categorypage'
import bgdairy from '../../assets/top-view-dairy-products.jpg'


function Dairy({ addtobag }) {
    return (
        <div>
            <Categorypage title="Dairy and Eggs" bgimg={bgdairy} categories={['Dairy']} addtobag={addtobag} />
        </div>
    )
}

export default Dairy

import React from 'react'
import Products1 from '../products/Products1'

function Productshow({ addtobag,wishlist,togglewishlist }) {
    return (
        <div>
            <Products1 addtobag={addtobag} wishlist={wishlist} togglewishlist={togglewishlist}/>
        </div>
    )
}

export default Productshow

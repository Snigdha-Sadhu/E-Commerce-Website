import React from 'react'
import ProductList from '../productlist/ProductList'
import Card from '../card/Card'
import { usewishlist } from '../wishlistContext/Wishlistcontext'

function Wishlistproduct({  addtobag }) {
const {wishlist}=usewishlist();
const filtereditems=ProductList.filter((p)=> wishlist[p.name]);

    return (
        <div className='mt-15 max-w-[1400px] mx-auto px-10 py-20'>
            <h2 className='flex items-center justify-center font-bold text-5xl mt-2'>My Wishlist</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-20'>
        
          {filtereditems.length >0 ? (
            filtereditems.map((p)=>  <Card image={p.image} name={p.name} price={p.price} addtobag={addtobag}></Card>

           ) ):(
            <p>No Items in wishlist</p>
          )}
            
            </div>
        </div>
    )
}

export default Wishlistproduct

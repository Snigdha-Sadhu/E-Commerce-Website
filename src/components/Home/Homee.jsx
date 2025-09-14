/*import React from 'react'
//import './App.css'
import Navbar from '../Navbar'
import Hero from '../hero/Hero'
import Category from '../category/Category'
import Values from '../values/Values'
import Products1 from '../products/Products1'
import Discount from '../discount/Discount'
import Process from '../process/Process'
import Testimonials from '../testimonial/Testimonials'
import { useState } from 'react'
import Wishlistproduct from '../wishlistproduct/Wishlistproduct'




function Homee({ addtobag }) {
const [wishlist,setwishlist]=useState({});
const togglewishlist=(product)=>{
    setwishlist({...wishlist,[product]: !wishlist[product]});
    alert(!wishlist[product] 
        ? `${product} added to your wishlist`
        : `${product} removed from your wishlist`

    );
;}
    return (
        <div>

            <Hero></Hero>
            <Category></Category>
            <Values></Values>
            <Products1 addtobag={addtobag} wishlist={wishlist} togglewishlist={togglewishlist}></Products1>
            <Discount></Discount>
            <Process></Process>
            <Testimonials></Testimonials>
            <Wishlistproduct/>

        </div>
    )
}

export default Homee*/

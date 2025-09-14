import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Home2 from '../Home2/Home2'
function Layout({ Bagcount ,wishlist,handlewishlist}) {
    return (
        <div>
            <Navbar Bagcount={Bagcount} wishlist={wishlist} handlewishlist={handlewishlist} />

            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout

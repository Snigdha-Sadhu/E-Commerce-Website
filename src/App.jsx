import React from 'react'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Category from './components/category/Category'
import Values from './components/values/Values'
import Products1 from './components/products/Products1'
import Discount from './components/discount/Discount'
import Process from './components/process/Process'
import Testimonials from './components/testimonial/Testimonials'
import Footer from './components/footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import Homee from './components/Home/Homee'
import Fruits from './components/fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import Seafood from './components/Seafood/Seafood'
import Allproduct from './components/Allprduct/Allproduct'
import Layout from './components/layout/Layout'
import Contactpage from './components/Contactpage/Contactpage'
import Home2 from './components/Home2/Home2'
import About from './components/about/About'
import Productshow from './components/productshow/Productshow'
import Wishlistproduct from './components/wishlistproduct/Wishlistproduct'


function App() {
  const [Bagcount, setBagcount] = useState(0);
  const [showwishlist, setshowwishlist] = useState(false);
  const addtobag = () => {
    setBagcount(Bagcount + 1);
  };
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout Bagcount={Bagcount} />,
      children: [
        /* {
           path: '/',
            element: <Homee addtobag={addtobag} />
         },*/
        {
          path: '/fruits',
          element: <Fruits addtobag={addtobag}  />
        },
        {
          path: '/dairy',
          element: <Dairy addtobag={addtobag}  />
        },
        {
          path: '/seafood',
          element: <Seafood addtobag={addtobag} />
        },
        {
          path: '/all',
          element: <Allproduct addtobag={addtobag} />
        },
        {
          path: '/contact',
          element: <Contactpage />
        },
        {
          path: '/',
          element: <Home2 />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/product',
          element: <Productshow addtobag={addtobag}  />
        },
        {
          path: '/wishlist',
          element: <Wishlistproduct  addtobag={addtobag} />
        },
      ]
    },

  ])

  return <RouterProvider router={router} />
  /* <div className='App'>

     {/*<Navbar></Navbar>
     <Hero></Hero>
     <Category></Category>
     <Values></Values>
     <Products1></Products1>
     <Discount></Discount>
     <Process></Process>
     <Testimonials></Testimonials>
     <Footer></Footer>
     <Homee></Homee>
   </div>
 )*/
}
export default App;
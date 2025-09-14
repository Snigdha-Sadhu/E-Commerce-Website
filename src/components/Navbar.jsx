import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link,  NavLink, useNavigate } from 'react-router-dom';
import { usewishlist } from './wishlistContext/Wishlistcontext';
import { CgProfile } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
import { GiBeachBag } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

//import { NavLink } from 'react-router-dom';
function Navbar({ Bagcount}) {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    }
    const [showdrop,setshowdrop]=useState(false);
    const dropdownref=useRef(null);
    const toggledrop = () =>{
        setshowdrop(prev=>!prev);
    };
    useEffect(()=>{
        const handleClickoutside=(event)=>{
            if(dropdownref.current && !dropdownref.current.contains(event.target)){
                setshowdrop(false);
            }
        };
        document.addEventListener("mousedown",handleClickoutside);
        return ()=>document.removeEventListener("mousedown",handleClickoutside);
    },[]);

    const navlinkclass = ({ isActive }) => {
        return isActive ? 'text-lime-500 underline transition-all duration-200 ' : 'text-red';
    };
    const {wishlist}=usewishlist();
    const count=Object.values(wishlist).filter(Boolean).length;
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (

        <header className={`fixed top-0 right-0 left-0 bg-white z-50  ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(132,204,22,0.6)]' : ' '}`}>
            <nav className='flex justify-between max-w-[1400px] md:h-[14vh] h-[12vh] items-center px-10 mx-auto'>.
                <div className='mmax-w-[1400px] flex items-center gap-x-10 flex-1'>
                    <Link to='/' className='text-2xl font-bold '>
                      Nutri<span className='text-lime-500'>Cart</span>
                    </Link>
                    <ul className='md:flex items-center gap-x-15 hidden ml-20'>
                        <li>
                            <NavLink to='/' className={navlinkclass} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={navlinkclass}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/product' className={navlinkclass}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={navlinkclass} >Contact Us</NavLink>
                        </li>

                    </ul>
                </div>
                <div className='flex items-center gap-x-5'>
                    <div class="searchbar" className='md:flex  p-1 border-2 border-lime-500 rounded-full hidden'>
                        <button className='btn' ><FaSearch /></button>
                        <input type="text" name="text" placeholder="search for product trends and more" className='flex-1 h-[5vh] px-3 focus:outline-none' />

                    </div>
                    <div className='flex flex-col items-center text-[12px] font-bold'>
                        <Link to='/wishlist'className='text-2xl' >
                            <FaHeart /></Link>
                        <p>Wishlist</p>
                    </div>
                    <div className='mt-4 flex flex-col items-center text-[12px] font-bold ' >
                        <a href="#" className='text-2xl'><IoBag /></a>
                        <p>Bag</p>
                        <span className='bg-lime-500 text-center rounded-full whitespace-nowrap h-[18px] px-[6px] relative text-1-2xl text-white cursor-pointer text-[12px] text-white left-[13px] top-[-44px] font-bold'>{Bagcount}</span>

                    </div>
                    <div className='relative inline-block 'ref={dropdownref}>
                        <div className='flex flex-col items-center text-[12px] font-bold'>
                        <a href="#"className='text-2xl ' onClick={toggledrop} >
                            <CgProfile /></a>
                        <p>Profile</p>
                        </div>
                         {showdrop && (
                        <div className={`} 
    w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10
    absolute right-2 mt-2`
                        }> 
                             <ul className='flex flex-col py-2'>
                                <li className=' flex flex-row gap-2 cursor-pointer transition  px-4 py-2 hover:bg-gray-100'>
                                   <a href="#" className='text-2xl'><IoIosContact /></a>
                                     <p>My Profile</p>
                                     </li>
                                <li className='flex flex-row gap-2 cursor-pointer transition  px-4 py-2 hover:bg-gray-100'>
                                     <a href="#" className='text-2xl'><GiBeachBag /></a>
                                     <p>My Orders</p></li>
                            <li className=' flex flex-row gap-2 cursor-pointer transition  px-4 py-2 hover:bg-gray-100'> 
                                <a href="#" className='text-2xl'><MdOutlinePayment /></a>
                                     <p>Payment</p>
                                
                               </li>
                             <li className=' flex flex-row gap-2 cursor-pointer transition  px-4 py-2 hover:bg-gray-100'> 
                                <a href="#" className='text-2xl'><IoLogOut /></a>
                                     <p>Log Out</p>
                             </li>
                             </ul>
                            </div>
                            
                            
                    )}
                    </div>
                    <a href="#" className='text-zink-800 text-3xl ml-2 md:hidden' onClick={toggleMenu}>
                        {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                    </a>
                   
                </div>
                {/* Mobile menu*/}
                <ul className={`flex flex-col gap-y-15 bg-lime-500/30 backdrop-blur-xl shadow-xl rounded-xl p-10  items-center gap-x-15 md:hidden absolute top-20 -left-full  transform -translate-x-1/2 transition-all duration-500  ${showMenu ? 'left-1/2' : " "}`}>
                    <li>
                        <NavLink to='/' onClick={toggleMenu} className={navlinkclass} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' onClick={toggleMenu} className={navlinkclass}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/product' onClick={toggleMenu} className={navlinkclass}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' onClick={toggleMenu} className={navlinkclass}>Contact Us</NavLink>
                    </li>
                    
                    <li class="searchbar" className='flex  p-1 border-2 border-lime-700 rounded-full md:hidden'>

                        <input type="text" name="text" placeholder="search for product trends and more" className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='btn' ><FaSearch /></button>
                    </li>
                </ul>

            </nav>
        </header>

    );
}
export default Navbar;


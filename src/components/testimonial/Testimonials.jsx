import React from 'react'
import { useRef } from 'react';
import { FaStar } from "react-icons/fa";
import Heading1 from '../heading1/Heading1'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import customer1 from '../../assets/customer1.jpg'
import customer2 from '../../assets/customer2.jpg'
import customer3 from '../../assets/customer3.jpg'
import customer4 from '../../assets/customer4.jpg'
import customer5 from '../../assets/customer5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='max-w-[1400px] w-full mx-auto px-4'>
            <div className='max-w-[1400px] px-10 mx-auto py-20'>
                <Heading1 highlight="Fresh" heading=" Feedback"></Heading1>
                <div className='flex justify-end py-5 gap-x-3'>
                    <button ref={prevRef} className='bg-zinc-100 w-10 h-10 rounded-lg text-2xl flex justify-center items-center hover:bg-gradient-to-b hover:from-lime-400 hover:to-lime-500 hover:text-white cursor-pointer '>
                        <IoIosArrowBack />
                    </button>
                    <button ref={nextRef} className='bg-zinc-100 w-10 h-10 rounded-lg flex justify-center items-center text-2xl hover:bg-gradient-to-b hover:from-lime-400 hover:to-lime-500 hover:text-white cursor-pointer  '>
                        <IoIosArrowForward /> </button>

                </div>

                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}

                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },

                    }}
                >
                    {
                        review.map(item => {
                            return (
                                <SwiperSlide className='min-h-[300px] bg-zinc-100 flex flex-col justify-center items-center gap-5 rounded-lg'>
                                    <div className='flex-item-center gap-4'>
                                        <div className='flex rounded-xl p-6 '>
                                            <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-lime-500 outline-offset-4 overflow-hidden'>
                                                <img src={item.image} className='w-full h-full' />
                                            </div>
                                            <div className='flex flex-col items-center ml-2 '>
                                                <h5 className='text-2xl font-bold'>{item.name}</h5>
                                                <p className='text-zinc-400'>{item.profession}</p>
                                                <span className='flex text-yellow-400 mt-1 text-xl gap-1'>{Array.from({ length: item.rating }, (_, index) => (
                                                    <FaStar />
                                                ))}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-0'>
                                        <p className='p-3 text-center'>{item.description}</p>

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials
const review = [
    {
        id: 1,
        name: 'Emlily Johnson',
        profession: 'Food Blogger',
        rating: 3,
        description: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
        image: customer1
    },
    {
        id: 2,
        name: 'David Smith',
        profession: 'chef',
        rating: 4,
        description: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
        image: customer2
    },
    {
        id: 3,
        name: 'ALya Zahra',
        profession: 'Model',
        rating: 5,
        description: 'Shopping online with FreshBasket has saved me so much time. I trust them for my familys weekly groceries—always fresh, affordable, and reliable.',
        image: customer3
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        rating: 6,
        description: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
        image: customer4
    },
    {
        id: 5,
        name: 'Natcha Phongchai',
        profession: 'Nutritionist',
        rating: 7,
        description: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
        image: customer5
    },
]
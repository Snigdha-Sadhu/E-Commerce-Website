import React from 'react'
import Heading1 from '../heading1/Heading1'
import { TbHexagonNumber1Filled } from "react-icons/tb";
import { PiFactory, PiPlantDuotone } from "react-icons/pi"
import { TbHexagonNumber2Filled } from "react-icons/tb";
import { TbHexagonNumber3Filled } from "react-icons/tb";
import { TbHexagonNumber4Filled } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { FaTruckMoving } from "react-icons/fa";
import Mobileprocess from '../mobileprocess/Mobileprocess';


const Process = () => {

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <div className='w-fit mr-auto'>
                    <Heading1 highlight="How" heading=" it works" ></Heading1>
                </div>
                <div className='relative h-[600px] md:h-[600px]'>
                    <div className='hidden md:flex flex-col absolute md:top-0 md:left-1/2 md:-translate-x-1/3 md:w-1/5 mt-20'>
                        <span className='flex justify-center items-center text-3xl text-white bg-black w-15 h-15 rounded-full self-center -translate-x-12'><TbHexagonNumber1Filled /></span>
                        <div className='flex flex-row'>

                            <span className='flex justify-center items-center text-3xl text-white bg-lime-500 w-10 h-8 rounded-full self-center mr-2'><PiPlantDuotone /></span>
                            <div className='flex flex-col'>
                                <h3 className='font-bold text-3xl'>sourcing</h3>
                                <p>it is a long established fact that a reader'</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col absolute md:bottom-0 md:left-1/2 md:-translate-x-1/3 md:w-1/5 '>
                        <span className='flex justify-center items-center text-3xl text-white bg-black w-15 h-15 rounded-full self-center -translate-x-12'><TbHexagonNumber3Filled /></span>
                        <div className='flex flex-row'>

                            <span className='flex justify-center items-center text-3xl text-white bg-lime-500 w-10 h-8 rounded-full self-center mr-2'><PiFactory /></span>
                            <div className='flex flex-col'>
                                <h3 className='font-bold text-3xl'>manufacturing</h3>
                                <p>it is a long established fact that a reader'</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col absolute md:top-1/2 md:left-0 md:-translate-x-1/3 md:w-1/5 md:ml-40'>
                        <span className='flex justify-center items-center text-3xl text-white bg-black w-15 h-15 rounded-full self-center -translate-x-12'><TbHexagonNumber2Filled /></span>
                        <div className='flex flex-row'>

                            <span className='flex justify-center items-center text-3xl text-white bg-lime-500 w-10 h-8 rounded-full self-center mr-2'><SlBadge /></span>
                            <div className='flex flex-col'>
                                <h3 className='font-bold text-3xl'>quality control</h3>
                                <p>it is a long established fact that a reader'</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col absolute md:top-1/2 md:right-0 md:-translate-x-1/3 md:w-1/5 '>
                        <span className='flex justify-center items-center text-3xl text-white bg-black w-15 h-15 rounded-full self-center -translate-x-12'><TbHexagonNumber4Filled /></span>
                        <div className='flex flex-row'>

                            <span className='flex justify-center items-center text-3xl text-white bg-lime-500 w-10 h-8 rounded-full self-center mr-2'><FaTruckMoving /></span>
                            <div className='flex flex-col'>
                                <h3 className='font-bold text-3xl'>logistics</h3>
                                <p>it is a long established fact that a reader'</p>
                            </div>
                        </div>
                    </div>
                    {/*mobile layout*/}
                    <div className='mt-10 flex flex-col gap-6 md:hidden'>

                        <Mobileprocess />
                    </div>






                </div>
            </div>
        </section>
    )
}
export default Process

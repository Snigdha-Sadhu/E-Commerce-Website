import React from 'react'
import { TbHexagonNumber1Filled } from "react-icons/tb";
import { PiFactory, PiPlantDuotone } from "react-icons/pi"
import { TbHexagonNumber2Filled } from "react-icons/tb";
import { TbHexagonNumber3Filled } from "react-icons/tb";
import { TbHexagonNumber4Filled } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { FaTruckMoving } from "react-icons/fa";

const Mobileprocess = () => {
    return (
        <>

            <div className='flex flex-col items-center gap-4'>
                <span className='flex justify-center items-center text-3xl text-white bg-black w-15 h-15 rounded-full self-center -translate-x-12'><TbHexagonNumber1Filled /></span>
                <div className='flex flex-row'>

                    <span className='flex justify-center items-center text-3xl text-white bg-lime-500 w-10 h-8 rounded-full self-center mr-2'><PiPlantDuotone /></span>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-3xl'>sourcing</h3>
                        <p>it is a long established fact that a reader'</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <span className='flex justify-center items-center text-3xl text-white bg-black w-15 h-15 rounded-full self-center -translate-x-12'><TbHexagonNumber2Filled /></span>
                <div className='flex flex-row'>

                    <span className='flex justify-center items-center text-3xl text-white bg-lime-500 w-10 h-8 rounded-full self-center mr-2'><SlBadge /></span>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-3xl'>quality control</h3>
                        <p>it is a long established fact that a reader'</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <span className='flex justify-center items-center text-3xl text-white bg-black w-15 h-15 rounded-full self-center -translate-x-12'><TbHexagonNumber3Filled /></span>
                <div className='flex flex-row'>

                    <span className='flex justify-center items-center text-3xl text-white bg-lime-500 w-10 h-8 rounded-full self-center mr-2'><PiFactory /></span>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-3xl'>manufacturing</h3>
                        <p>it is a long established fact that a reader'</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <span className='flex justify-center items-center text-3xl text-white bg-black w-15 h-15 rounded-full self-center -translate-x-12'><TbHexagonNumber4Filled /></span>
                <div className='flex flex-row'>

                    <span className='flex justify-center items-center text-3xl text-white bg-lime-500 w-10 h-8 rounded-full self-center mr-2'><FaTruckMoving /></span>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-3xl'>logistics</h3>
                        <p>it is a long established fact that a reader'</p>
                    </div>
                </div>
            </div>
        </>






    )
}

export default Mobileprocess

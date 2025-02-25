import React from 'react'
import { GoArrowRight } from "react-icons/go";
import SuperC from '../assets/super-car.png'

function Supercar() {
    return (
        <div className='max-w-[1200px] mx-auto bg-[#101828]'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <img className='w-full max-h-[250px] h-[100%]' src={SuperC} alt="" />
                <div className='px-7 pt-9 text-white'>
                    <h1 className='text-[35px] leading-[63px]'>SUPERCAR RENTAL IN DUBAI</h1>
                    <p>Hire the latest supercar today!</p>
                    <button className="grid grid-cols-2 pb-[75px] gap-3 mt-[25px] text-[#ffffff] text-[18px] text-center items-center font-bold hover:text-red-800">
                        <p>SEE ALL</p>
                        <GoArrowRight className="border hover:ml-4 p-1 rounded-[25px] text-[25px] transition-all duration-700" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Supercar
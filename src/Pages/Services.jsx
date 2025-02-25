import React from 'react'
import { GoArrowRight } from "react-icons/go";
import Baggi from '../assets/baggi.jpg'
import Rolce from '../assets/rolce-roys.jpg'

function Services() {
    return (
        <div className='max-w-[1200px] mx-auto px-5 py-[90px] bg-[#1e1f27]'>
            <div className='grid grid-cols-1 col-start'>
                <p className='text-[#A5A5A9] text-[16px] leading-[21px] lg:px-2 py-2'>Luxury Cars for Rent in Dubai/Service</p>
                <h1 className='text-[#ffffff] py-[40px] text-[30px] font-bold leading-[50px] lg:px-2 lg:py-2'>SERVICES</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                <div className='w-full'>
                    <img className='lg:px-2 py-2' src={Baggi} alt="Baggi in sahara" />
                    <h1 className='text-[26px] leading-[29px] text-[#ffffff] font-semibold py-[25px] lg:px-2 lg:py-2'>Ride a buggy in Dubai and have fun</h1>
                    <p className='text-[22px] text-[#ffffff] leading-[28px] lg:px-2 lg:py-2'>Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now!</p>
                    <button className='grid grid-cols-2 py-2 gap-3 px-2 mt-[25px] text-[#ffffff] text-[18px] hover:pl-4 transition-all duration-700 text-center items-center font-bold'>
                        <p>LEARN MORE</p>
                        <GoArrowRight className='border p-1 rounded-[25px] text-[25px]' />
                    </button>
                </div>
                <div>
                    <img className='px-2 pt-2' src={Rolce} alt="Girl with Rolce Royce" />
                    <h1 className='text-[26px] leading-[29px] text-[#ffffff] font-semibold py-[25px] px-2'>Photoshoot with luxury car rental in Dubai</h1>
                    <p className='text-[22px] text-[#ffffff] leading-[28px] px-2'>Professional car photoshoot as an additional service at Terra Car Rental.</p>
                    <button className='grid grid-cols-2 py-2 gap-3 px-2 mt-[25px] text-[#ffffff] text-[18px] hover:pl-4 transition-all duration-700 text-center items-center font-bold'>
                        <p>LEARN MORE</p>
                        <GoArrowRight className='border p-1 rounded-[25px] text-[25px]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services
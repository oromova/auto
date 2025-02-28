import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from "../../assets/blog/1.jpg"
import img2 from "../../assets/blog/2.jpg"
import img3 from "../../assets/blog/3.jpg"
import svg from '../../assets/blog/arrow.svg'

function Blog() {
  return (
    <section className='mx-auto px-[20px] pt-[30px] pb-[60px] '>
      <div>
        <NavLink to="/">
          <p className="text-[14px] text-[#a5a5a9]">Luxury Cars for Rent in Dubai </p>
        </NavLink>
        <h1 className='text-[#FFF] text-3xl pt-10 pl-6 uppercase'>
          Blog
        </h1>
        <div>
          <div className='h-[270px] mt-8 flex flex-col md:gap-[20px] shadow-sm md:flex-row p-[20px] items-center bg-[#272933' style={{background: "rgb(39, 41, 51)"}}>
            <img className='w-full md:max-w-[300px] h-[225px]' src={img1} alt="rent" />
            <div className='flex flex-col justify-between mt-[20px] md:mt-0 leading-normal'>
              <h5 className='text-[24px] lg:text-[36px] font-medium tracking-tigh text-white'>
               Top 3 Destinations to Visit in Dubai in a Rental Car
              </h5>
              <p className='mb-3 text-[16px] mt-[10px] md:mt-0 lg:text-[20px] font-normal text-white max-w-6xl'>
               One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.
              </p>
              <div className='flex items-end justify-between'>
                <p className='text-white pt-7'>25 Seb 2022</p>
                <NavLink to="/blog/singleblog">
                  <div className='w-[40px] p-1.5 pl-2 h-[40px] bg-white rounded-full'>
                    <img className='' src={svg} alt="" />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='h-[270px] mt-8 flex flex-col md:gap-[20px] shadow-sm md:flex-row p-[20px] items-center bg-[#272933' style={{background: "rgb(39, 41, 51)"}}>
            <img className='w-full md:max-w-[300px] h-[225px]' src={img2} alt="rent" />
            <div className='flex flex-col justify-between mt-[20px] md:mt-0 leading-normal'>
              <h5 className='text-[24px] lg:text-[36px] font-medium tracking-tigh text-white'>
                Top 5 wonderful spots for a car photo session in Dubai
              </h5>
              <p className='mb-3 text-[16px] mt-[10px] md:mt-0 lg:text-[20px] font-normal text-white max-w-6xl'>
                There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?
              </p>
              <div className='flex items-end justify-between'>
                <p className='text-white pt-7'>11 Feb 2022</p>
                <NavLink to="/blog/singleblog">
                  <div className='w-[40px] p-1.5 pl-2 h-[40px] bg-white rounded-full'>
                    <img className='' src={svg} alt="" />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='h-[270px] mt-8 flex flex-col md:gap-[20px] shadow-sm md:flex-row p-[20px] items-center bg-[#272933' style={{background: "rgb(39, 41, 51)"}}>
            <img className='w-full md:max-w-[300px] h-[225px]' src={img3} alt="rent" />
            <div className='flex flex-col justify-between mt-[20px] md:mt-0 leading-normal'>
              <h5 className='text-[24px] lg:text-[36px] font-medium tracking-tigh text-white'>
                Top 5 wonderful spots for a car photo session in Dubai
              </h5>
              <p className='mb-3 text-[16px] mt-[10px] md:mt-0 lg:text-[20px] font-normal text-white max-w-6xl'>
               There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?
              </p>
              <div className='flex items-end justify-between'>
                <p className='text-white pt-7'>25 Seb 2022</p>
                <NavLink to="/blog/singleblog">
                  <div className='w-[40px] p-1.5 pl-2 h-[40px] bg-white rounded-full'>
                    <img className='' src={svg} alt="" />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Blog
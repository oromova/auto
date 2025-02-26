import React from 'react';
import img from '../assets/faq/aboutUs.png';
import { NavLink } from 'react-router-dom';

export function AboutUs() {
  return (
    <section className="relative w-full h-[1050px]">
      <img className="w-full h-[1050px]" src={img} alt="aboutUs" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      {/* Text on the Image */}
      <div className="absolute top-0 left-0 w-full h-full text-white px-10 py-[50px]">
        <div className='flex'>
          <NavLink to="/">
            <p className="text-[14px]">Luxury Cars for Rent in Dubai /</p>
          </NavLink>
          <NavLink to="/aboutus text-[rgba(255, 255, 255, 0.6)]">
            <p className="text-[14px]">ABOUT US</p>
          </NavLink>
        </div>
        <h3 className='uppercase my-[50px] text-[26px] sm:text-[32px] font-semibold sm:my-[50px]'>About Us</h3>
        <h4 className='text-[22px] sm:text-[30px]'>
          Welcome to Auto Zoom Car Rental Co LLC – Your Partner in Unforgettable Journeys in Dubai!
        </h4>
        <p className='text-[#cacaca] text-[19px] sm:mb-[50px] mt-[15px]'>
          In a world where every trip is an adventure, Auto Zoom Car Rental Co LLC offers you a unique car rental experience in the heart of Dubai.
        </p>
        <h3 className='text-[26px] sm:text-[32px] font-semibold mt-[20px] sm:mt-[50px] mb-[30px]'>
          Why Auto Zoom?
        </h3>
        <article className='flex flex-col gap-7'>
          <div className='leading-[30px]'>
            <h3 className='text-[22px] font-bold inline-block mr-[5px]'>
              Elegant Car Fleet:
            </h3>
            <p className='inline text-[#d8d8d8] text-[18px] font-normal'>
              We provide you the opportunity to choose from our luxurious car fleet – from sleek sedans to powerful SUVs. We have a vehicle to match your style and meet your needs.
            </p>
          </div>
          <div className='leading-[30px]'>
            <h3 className='text-[22px] font-bold inline-block mr-[5px]'>
              Worry-Free Rental:
            </h3>
            <p className='inline text-[#d8d8d8] text-[18px] font-normal'>
              Our goal is to make your journey as comfortable as possible. Flexible rental terms, the option to hire with a driver, and a wide range of additional services – all for your convenience.
            </p>
          </div>
          <div className='leading-[30px]'>
            <h3 className='text-[22px] font-bold inline-block mr-[5px]'>
              Transparency and Trust:
            </h3>
            <p className='inline text-[#d8d8d8] text-[18px] font-normal'>
              We value every customer, so our prices are honest and transparent. No hidden fees, no unexpected surprises. Trust us, and we will make your rental experience straightforward and clear.
            </p>
          </div>
          <div className='leading-[30px]'>
            <h3 className='text-[22px] font-bold inline-block mr-[5px]'>
              Service at Your Level:
            </h3>
            <p className='inline text-[#d8d8d8] text-[18px] font-normal'>
              Our friendly and professional team is ready to bring your ideas to life. We aim not just to provide a car but to create a genuine automotive experience for you.
            </p>
          </div>
        </article>
        <h5 className='text-[22px] font-bold mt-[30px] m:mt-[100px]'>
          Our Mission:
        </h5>
        <p className='mt-2 text-[18px]'>
          Auto Zoom Car Rental Co LLC is created with one goal – to make every journey unforgettable. We strive to offer you not just a car but the key to new experiences and adventures.
        </p>
        <h5 className='text-[22px] font-bold mt-[15px]'>
          Contact Us
        </h5>
        <p className='mt-2 text-[18px]'>
          Trust the professionals – trust Auto Zoom Car Rental Co LLC. Get in touch with us today to start your exciting journey through Dubai in our stylish and reliable cars. Allow yourself to savor every moment of your trip.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;

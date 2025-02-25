import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative pt-[60px] pb-[60px] bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full opacity-20 pointer-events-none"
          src="https://www.youtube.com/embed/t9-cMiEDNyk?autoplay=1&mute=1&loop=1&playlist=t9-cMiEDNyk&controls=0&showinfo=0&modestbranding=1"
          title="Live Background"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>
      <div className="container relative z-10 flex flex-col md:flex-row mx-auto gap-[60px] px-[20px]">
        {/* Логотип и описание */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-[260px] mx-auto text-center md:text-left md:mx-0"
        >
          <a className="w-[130px] inline-block mb-[20px]" href="/">
            <img className="w-full" alt="logo" src="/src/assets/image copy 3.png" />
          </a>
          <h1 className="text-white text-[38px] leading-[40px] mb-[20px] font-bold">
            LUXURY CAR RENTAL IN THE EMIRATES
          </h1>
          <a
            className="border-[2px] text-center transition-colors duration-300 border-solid border-white px-[40px] py-[15px] inline-block mt-[20px] rounded-[12px] text-white hover:bg-red-500 hover:border-red-500"
            href="tel:+998937550412"
          >
            GET BEST OFFER
          </a>
        </motion.div>

        {/* Навигация и контакты */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col w-full md:w-[70%]"
        >
          <div className="flex flex-col sm:flex-row text-center sm:text-left mt-[30px] gap-[40px] justify-between w-full">
            {/* Меню */}
            <ul className="flex flex-col gap-[20px] text-white">
              {["CARS", "BLOG", "SERVICE", "ABOUT US", "CONTACTS"].map((item, index) => (
                <li key={index}>
                  <a className="text-white text-[18px] transition-colors duration-300 hover:text-red-500" href={`/${item.toLowerCase().replace(' ', '')}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Контакты */}
            <ul className="flex flex-col gap-[20px]">
              <li className="text-white">CONTACTS</li>
              <li className="text-gray-300">Elite 3 Sports City,</li>
              <li className="text-gray-300">Dubai 26W8 24J</li>
              <li className="text-gray-300">United Arab Emirates</li>
              <li className="text-gray-300">+998 99 0000441</li>
              <li className="text-gray-300">Mon-Sun: 9 AM - 10 PM</li>
            </ul>

            {/* О компании и соцсети */}
            <ul className="flex flex-col gap-[20px] text-white">
              {["ABOUT US", "OUR TEAM", "FAQ"].map((item, index) => (
                <li key={index}>
                  <a className="transition-colors duration-300 hover:text-red-500" href={`/${item.toLowerCase().replace(' ', '')}`}>{item}</a>
                </li>
              ))}
              <li>FOLLOW US ON INSTAGRAM</li>
              <li className="flex justify-start gap-4 items-center">
                <img src={'/src/assets/image.png'} alt="" />
                <img src={'/src/assets/image copy 4.png'} alt="" />
                <img src={'/src/assets/image copy 2.png'} alt="" />

              </li>
            </ul>
          </div>

          {/* Разделитель и права */}
          <span className="h-[1px] w-full bg-red-500 mt-[30px] mb-[5px]"></span>
          <ul className="flex justify-between gap-[20px] items-center text-white">
            <li>© 2024 Terra Car Rental United Arab Emirates.</li>
            <li>
              <a className="transition-colors duration-300 hover:text-red-500" href="/conditions/#conditions" data-discover="true">Terms and Conditions</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;


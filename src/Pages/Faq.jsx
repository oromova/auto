import React, { useState } from 'react';
import bg from '../assets/faq/bg.png';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the minimum age requirements to rent a car in Dubai?',
      answer: 'Drivers under 25 must have a license for a minimum of three years...'
    },
    {
      question: 'What do you need for a luxury car rental in Dubai?',
      answer: "Drivers shall be required to have a valid driver's license and Passport copy."
    },
    {
      question: 'How much is the Insurance limit on luxury car rental Dubai?',
      answer: 'Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.'
    },
    {
      question: 'What are the driving licenses that can be used in Arab countries?',
      answer: 'Local driving license for UAE citizens. International driving licenses issued by the following countries...'
    },
    {
      question: 'Can anyone else drive the car I rent?',
      answer: "The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport."
    },

  ];

  return (
    <section id="faq" className="relative h-[678px] text-white">
  {/* Background Image Layer */}
  <div className="absolute inset-0 h-[600px] bg-[url('https://terra-rentacar-sales.vercel.app/assets/faq-bg-CUMHr6tk.png')] bg-cover bg-center opacity-30"></div>

  {/* Content Layer */}
  <div className="relative py-[90px] h-screen z-10">
    <div className='text-white'>
      <h1 className='uppercase text-center text-[28px] mb-4 font-bold'>faq</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="max-w-[900px] mx-auto">
          <div
            className='flex gap-[5px] pb-[20px] px-[20px] items-center mx-auto justify-center cursor-pointer'
            onClick={() => toggleFAQ(index)}
          >
            <span className="mr-[20px]">
              <svg width="22px" className={`transition-transform duration-300 fill-white ${openIndex === index ? 'rotate-270' : 'rotate-180'}`} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_67" data-name="Layer 67">
                  <path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                  <path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"></path>
                </g>
              </svg>
            </span>
            <button className='text-center text-[16px] sm:text-[18px] cursor-pointer lg:text-[24px] text-white'>
              {faq.question}
            </button>
          </div>
          <span className="block h-[2px] bg-gray-500 transition-all duration-500 mx-auto w-full"></span>
          <div className={`rounded-[8px] transform transition-all relative z-20 duration-300 bg-gray-700 text-[18px] p-[10px] ${openIndex === index ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 translate-y-[-20px] h-0 overflow-hidden'}`}>
            <p className='text-center text-white'>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Faq;

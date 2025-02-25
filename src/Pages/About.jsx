import React from 'react';
import LCar from '../assets/left-car.png';
import RCar from '../assets/right-car.png';

function About() {
    return (
        <div className="relative max-w-[1200px] h-[2000px] sm:h-[1050px] lg:h-[700px] mx-auto flex items-center justify-center text-center px-6 bg-[#0a0d1a]">
            <img src={LCar} alt="Left Car" className="absolute left-0 w-[15%] object-cover opacity-30" />
            <img src={RCar} alt="Right Car" className="absolute right-0 w-[15%] object-cover opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                <h1 className="text-white text-[40px] font-[500] leading-[63px]">
                    LUXURY CAR RENTAL IN THE EMIRATES
                </h1>
                <p className="text-gray-300 text-[16px] leading-[30px] mt-6">
                Are you ready to feel the adrenaline rush and unleash your inner speed demon? Look no further than
                 Terra luxury car rental Dubai, the city where dreams become reality. In this ultimate guide to sp
                 orts car rental Dubai, we will take you on a thrilling journey through the world of luxury and su
                 percar rental Dubai. Imagine cruising down the iconic Sheikh Zayed Road in a sleek and powerful s
                 ports car rental Dubai style, turning heads and leaving everyone in awe of your style. Whether yo
                 u are a car enthusiast or simply looking to
                </p>
                <h2 className="text-white text-[40px] font-[500] leading-[63px] mt-8">
                    What are the requirements to rent a luxury car in Dubai?
                </h2>
                <p className="text-gray-300 text-[16px] leading-[30px] mt-6">
                To rent a car Dubai, it's enough to have a valid driving license and enough funds. & you'll need t
                o show your foreign passport and prove that you have come of age and have driving experience.The a
                ge limit and the requirements for the license depend on where you're from. Visitors from Europe, t
                he UK, the US and the Middle East can drive with their national licenses. People from other parts 
                of the world need an international license. The age limit for the driver might vary from 21 to 25 
                years. Please get in touch with us before placing an order to discuss your individual situation.Ca
                rs in the UAE have steering wheels on the left side. Drivers stick to the right side of the road.I
                f needed, you can add a second driver to your rental contract. The requirements for this person wi
                ll be the same as for the first driver. If you let someone who isn't mentioned in your rental cont
                ract take a place behind the wheel, you can get a fine.The duration of a premium car rental in Dub
                ai can vary from one day to several weeks. Discounts are common for luxury car rental Dubai monthl
                y car rental plan. Use this chance to have fun, increase your high social status and please your d
                earest and nearest!Please avoid smoking inside the rented vehicle.
                </p>
            </div>
        </div>
    );
}

export default About;

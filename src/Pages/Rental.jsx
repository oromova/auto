import React from "react";
import { GoArrowRight } from "react-icons/go";
import YouTube from "react-youtube";
import Background from "../assets/building.png";

function Rental() {
    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };

    const onReady = (event) => {
        console.log("Video tayyor:", event);
    };

    return (
        <div className="max-w-[1200px] mx-auto relative">
            <div className="grid grid-cols-1 bg-gray-950 gap-0 md:grid-cols-2 lg:grid-cols-[6fr_5fr] pt-16 relative"
            >
                <div className="px-5 pb-16">
                    <YouTube videoId="rsHmvxJ86PA" opts={opts} onReady={onReady} />
                </div>
                <div className="md:pr-5 lg:pr-5 px-5" style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: "60% 100%",
                    backgroundPosition: "100% 200%",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100%",
                    width: "100%",
                }}>
                    <h1 className="text-white text-[40px] leading-10">
                        SPORTS CAR RENTAL IN DUBAI
                    </h1>
                    <p className="text-white pt-10 text-[18px] leading-[30px]">
                        Terra L L C a Car is a Top Luxury Car Rental Dubai based
                        company. We offer sports car rental, and supercar rental in
                        Dubai. The best luxury car rental process provided by our
                        fleet. We own a diverse range of luxury supercar rental and
                        sports car rental Dubai style, including Rolls Royce,
                        Lamborghini, Maserati, Ferrari, Mercedes Benz, Porsche, and
                        Range Rover, to name a few. Rent a car with the best car rental
                        company in Dubai.
                    </p>
                    <button className="grid grid-cols-2 py-2 gap-3 px-2 mt-[25px] text-[#ffffff] text-[18px] text-center items-center font-bold hover:text-red-800">
                        <p>SEE ALL</p>
                        <GoArrowRight className="border hover:ml-4 p-1 rounded-[25px] text-[25px] transition-all duration-700" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Rental;
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Brand() {
  const url = "https://realauto.limsa.uz/api/brands";
  const [categories, setCategories] = useState([]);
  const imgUrl = "https://realauto.limsa.uz/api/uploads/images";
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.data);
        setCategories(res.data.data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
  <div className="bg-[#111219] ">
    <div className="max-w-[1240px] mx-auto px-5 py-8">
      <h2 className="text-5xl text-white font-medium pb-5">Brand</h2>
    <Swiper
      modules={[Autoplay, Navigation]}
      loop={categories.length > 6}
      slidesPerView={Math.min(categories.length, 6)} 
      centeredSlides={false}
      spaceBetween={20}
      autoplay={{ delay: 800, disableOnInteraction: false }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      breakpoints={{
        1050: { slidesPerView: 6 },
        850: { slidesPerView: 5 },
        701: { slidesPerView: 4 },
        550: { slidesPerView: 3 },
        450: { slidesPerView: 2 },
        400: { slidesPerView: 1 },
      }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
         <div className="fex flex-col">
          <div className="sviperslide w-[100%] h-[210px] border border-[#312f2ffe] hover:border-[#ff000073] flex flex-col mt-5 justify-center items-center rounded-md pb-3">
            <div className="w-[80px] h-[80px] rounded-md ">
              <img
                className="w-full h-full object-cover rounded-md"
                src={`${imgUrl}/${category.image_src}`}
                alt={category.title}
              />
            </div>
            <h2 className="text-[#878787] text-center text-xl font-medium py-3 hover:text-[red]">
              {category.title}
            </h2>
          </div>
          <div className="sviperslide w-[100%] h-[210px] border border-[#312f2ffe] hover:border-[#ff000073] mt-4 flex flex-col justify-center items-center rounded-md pb-3">
            <div className="w-[80px] h-[80px] rounded-md ">
              <img
                className="w-full h-full object-cover rounded-md"
                src={`${imgUrl}/${category.image_src}`}
                alt={category.title}
              />
            </div>
            <h2 className="text-[#878787] text-center text-xl font-medium py-3 hover:text-[red]">
              {category.title}
            </h2>
          </div>
         </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  </div>
  );
}

export default Brand;

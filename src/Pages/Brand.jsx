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
      loop={categories.length > 6} // Slayd yetarli bo'lsa loop yoqiladi
      slidesPerView={Math.min(categories.length, 6)} 
      centeredSlides={false}
      spaceBetween={20}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      breakpoints={{
        601: { slidesPerView: 6 },
      }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="sviperslide w-[100%] h-[210px] flex flex-col mt-5 justify-center items-center rounded-md pb-3">
            <div className="w-[80px] h-[80px] rounded-md ">
              <img
                className="w-full h-full object-cover rounded-md"
                src={`${imgUrl}/${category.image_src}`}
                alt={category.title}
              />
            </div>
            <h2 className="text-white text-center text-xl font-medium py-3 hover:text-[#03e2ff]">
              {category.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <Swiper
      modules={[Autoplay, Navigation]}
      loop={categories.length > 6} 
      slidesPerView={Math.min(categories.length, 6)} 
      centeredSlides={false}
      spaceBetween={20}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      breakpoints={{
        601: { slidesPerView: 6 },
      }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="sviperslide w-[100%] h-[210px] flex flex-col mt-5 justify-center items-center rounded-md pb-3 ">
            <div className="w-[80px] h-[80px] rounded-md ">
              <img
                className="w-full h-full object-cover rounded-md"
                src={`${imgUrl}/${category.image_src}`}
                alt={category.title}
              />
            </div>
            <h2 className="text-white text-center text-xl font-medium py-3 hover:text-[#03e2ff]">
              {category.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  </div>
  );
}

export default Brand;

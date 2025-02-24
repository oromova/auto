import React, { useEffect, useState } from 'react';
import { GoStar, GoStarFill } from "react-icons/go";
import axios from 'axios';

function Cards() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState({}); // Tugma holati uchun

  const imageUrl = 'https://realauto.limsa.uz/api/uploads/images';

  const getBrands = () => {
    setLoading(true);
    axios
      .get('https://realauto.limsa.uz/api/brands')
      .then((res) => {
        setBrands(res.data.data.slice(0, 12)); // Faqat 12 ta ma'lumot olish
      })
      .catch((error) => console.error("Error fetching brands:", error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getBrands();
  }, []);

  // Tugma bosilganda ikon o'zgarishi
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id], // Tugma holatini o'zgartirish
    }));
  };

  return (
    <div className="bg-[#0F172A] min-h-screen p-10">
      <h1 className="text-white text-3xl font-bold mb-8 text-center">Car Brands</h1>

      {loading ? (
        <p className="text-center text-green-400 text-2xl">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-2">
          {brands.map((brand) => (
            <div 
              className="relative p-5 rounded-2xl shadow-lg overflow-hidden group transition-all"
              key={brand.id}
            >
              {/* Asosiy fon: pastki o'ng oqimtir */}
              <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-600 opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Hover effekti: yuqori chap oqimtir */}
              <div className="absolute inset-0 bg-gradient-to-tl from-gray-400 to-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="text-white text-lg font-semibold mb-3 hover:text-red-500 transition-colors">
                  {brand.title}
                </div>
                
                {/* Rasm qutisi */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    className="w-[250px] h-[250px] object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                    src={`${imageUrl}/${brand.image_src}`}
                    alt={brand.title}
                  />
                </div>

                <p className="text-gray-300 mt-2">AED {brand.price} / per day</p>
                
                {/* O'ng tomonda tugma */}
                <div className="flex justify-end mt-3">
                  <button
                    className={`px-2 py-2 rounded-3xl transition ${
                      favorites[brand.id] ? "bg-yellow-500 text-white" : "bg-gray-700 text-white hover:bg-red-600"
                    }`}
                    onClick={() => toggleFavorite(brand.id)}
                  >
                    {favorites[brand.id] ? <GoStarFill className="text-yellow-400" /> : <GoStar />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;

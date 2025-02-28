import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

function CarsPage() {
    const [cars, setCars] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const [selectedCarId, setSelectedCarId] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const imageUrl = 'https://realauto.limsa.uz/api/uploads/images';

    useEffect(() => {
        const getCars = async () => {
            try {
                const response = await fetch("https://realauto.limsa.uz/api/cars");
                const data = await response.json();
                if (data && data.data) {
                    setCars(data.data);
                    const uniqueBrands = [...new Set(data.data.map(car => car.brand?.title?.toLowerCase()).filter(Boolean))];
                    const uniqueColors = [...new Set(data.data.map(car => car.color?.toLowerCase()).filter(Boolean))];
                    setBrands(uniqueBrands);
                    setColors(uniqueColors);
                }
            } catch (error) {
                console.error("Xatolik:", error);
            }
        };
        getCars();
    }, []);

    const handleFilterChange = (event, type) => {
        const { id, checked } = event.target;
        if (type === 'brand') {
            setSelectedBrands(checked ? [...selectedBrands, id] : selectedBrands.filter(item => item !== id));
        } else if (type === 'color') {
            setSelectedColors(checked ? [...selectedColors, id] : selectedColors.filter(item => item !== id));
        }
    };

    const handleCarSelection = (carId) => {
        setSelectedCarId(carId);
        console.log("Tanlangan mashina ID si:", carId);
    };

    const resetFilters = () => {
        setSelectedBrands([]);
        setSelectedColors([]);
    };

    const filteredCars = cars.filter(car =>
        (selectedBrands.length === 0 || selectedBrands.includes(car.brand?.title?.toLowerCase())) &&
        (selectedColors.length === 0 || selectedColors.includes(car.color?.toLowerCase()))
    );

    return (
        <div className='max-w-[1200px] mx-auto bg-[#0c0e20] text-white px-4 sm:px-6 lg:px-8'>
            <button
                className='lg:hidden bg-blue-500 text-white px-4 py-2 rounded mb-4'
                onClick={() => setShowFilters(!showFilters)}
            >
                {showFilters ? 'Close Filters' : 'Show Filters'}
            </button>
            <div className='grid lg:grid-cols-[1fr_3fr] gap-5 py-5'>

                <div className={`bg-[#272933] px-6 py-5 rounded-lg w-full lg:w-auto ${showFilters ? 'grid' : 'hidden'} lg:grid`}>
                    <h1 className='text-[25px] font-bold'>Filter By</h1>
                    <h2 className='text-[20px] font-medium pb-1 sm:pb-2 md:pb-5 lg:pb-0 lg:pt-0'>Offers</h2>
                    <hr />

                    <div>
                        <h1 className='pb-1 text-[16px] pt-1 sm:pt-2 sm:pb-2 md:pt-5 lg:pb-7 lg:pt-1'>Color</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 md:gap-2 sm:gap-1 lg:grid-cols-1'>
                            {colors.map((color) => (
                                <div key={color} className='flex items-center gap-2'>
                                    <input
                                        className='w-4'
                                        type='checkbox'
                                        id={color}
                                        checked={selectedColors.includes(color)}
                                        onChange={(e) => handleFilterChange(e, 'color')}
                                    />
                                    <label className='text-[16px]' htmlFor={color}>{color.toUpperCase()}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className='mt-1 sm:mt-2 md:mt-5 lg:mt-0' />

                    <div>
                        <h1 className='pb-1 pt-1 text-[16px] sm:pt-2 sm:pb-2 md:pt-5 lg:pb-7 lg:pt-0'>Brand</h1>
                        <div className='grid grid-cols-1 md:gap-2 sm:grid-cols-3 md:grid-cols-3 sm:gap-1 lg:grid-cols-1 lg:gap-2'>
                            {brands.map((brand) => (
                                <div key={brand} className='flex items-center gap-2'>
                                    <input
                                        className='w-4'
                                        type='checkbox'
                                        id={brand}
                                        checked={selectedBrands.includes(brand)}
                                        onChange={(e) => handleFilterChange(e, 'brand')}
                                    />
                                    <label className='text-[16px]' htmlFor={brand}>{brand.toUpperCase()}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-4'>
                        <button className='border-2 py-2 w-full rounded hover:bg-gray-700' onClick={resetFilters}>Reset</button>
                    </div>
                </div>

                <div className='py-5 w-full'>
                    <h1 className='text-[20px] font-semibold mb-5'>Luxury Cars for Rent in Dubai</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {filteredCars.length > 0 ? filteredCars.map((car) => (
                            <div
                                className='relative p-6 rounded-2xl shadow-xl overflow-hidden group transition-all bg-[#1a1c2c] hover:bg-[#222437] border border-gray-700'
                                key={car.id}
                            >
                                <h2 className='text-white text-xl font-bold mb-3 hover:text-red-500 transition-colors'>{car.brand?.title || 'No Title'}</h2>
                                <div className='overflow-hidden rounded-lg'>
                                    <img className='w-full h-[200px] object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-2' src={`${imageUrl}/${car.brand?.image_src || 'placeholder.jpg'}`} alt={car.brand?.title || 'Car Image'} />
                                </div>
                                <p className='text-gray-300 mt-3 text-lg font-semibold'>AED {car.price_in_aed || 'N/A'} / per day</p>
                                <p className='text-gray-400 text-sm'>Color: {car.color || 'Unknown'}</p>
                                <div className='grid grid-cols-[15%_42.5%_42.5%] gap-1.5 items-center mt-4'>
                                    <button className='py-1.5 px-1.5 rounded-full bg-gray-700 text-white hover:bg-red-600 transition-all shadow-lg' onClick={() => handleCarSelection(car.id)}>&gt;</button>
                                    <button className='flex items-center justify-center gap-2 text-white bg-green-500 hover:bg-green-600 transition-all px-4 py-2 rounded-full shadow-lg'><FaWhatsapp className='text-[14px] sm:text-[10px] md:text-[14px] lg:text-[8px]' /><span className='text-[14px] sm:text-[10px] md:text-[14px] lg:text-[8px]'>WhatsApp</span></button>
                                    <button className='flex items-center justify-center gap-2 text-white bg-blue-500 hover:bg-blue-600 transition-all px-4 py-2 rounded-full shadow-lg'><FaTelegramPlane className='text-[14px] sm:text-[10px] md:text-[14px] lg:text-[8px]' /><span className='text-[14px] sm:text-[10px] md:text-[14px] lg:text-[8px]'>Telegram</span></button>
                                </div>
                            </div>
                        )) : <p className='text-center text-gray-400'>No cars available</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarsPage;

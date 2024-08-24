import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { name: 'MRF', logo: 'https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-tajfi0gar9aqlecpuqe1r5l0a1-20160929010132.Medi.jpeg' },
  { name: 'CEAT', logo: 'https://m.economictimes.com/thumb/msid-78932781,width-1200,height-900,resizemode-4,imgsize-43704/ceat-tyres.jpg' },
  { name: 'Goodyear', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJ2ypZkw0qi9HuDfLh8g4BrJTOKhm728hug&s' },
  { name: 'Apollo', logo: 'https://s3-symbol-logo.tradingview.com/apollo-tyres--600.png' },
  { name: 'Bridgestone', logo: 'https://www.shutterstock.com/image-vector/bridgestone-logo-sign-icon-emblem-600nw-2286811601.jpg' },
  { name: 'JK Tyre', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtz4ok0bbj8yukAkrwvM1zJNsKmGdsnGqxRA&s' },
];

const deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white mt-3 shadow-md rounded-lg overflow-hidden w-full mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Deals in</h2>
      
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-50 border rounded-lg p-4">
            <img src={brand.logo} alt={brand.name} className="h-12 mb-2" />
            <span className="text-gray-800 font-semibold">{brand.name}</span>
          </div>
        ))}
      </div>

      {/* Slider for smaller screens */}
      <div className="lg:hidden w-full">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 border rounded-lg p-4">
              <img src={brand.logo} alt={brand.name} className="h-12 mb-2" />
              <span className="text-gray-800 font-semibold">{brand.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default deal;

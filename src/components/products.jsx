import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Expanded products array with 10 products
const products = [
  {
    brand: 'Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    price: '₹ 3,136',
    reviews: 320,
    rating: 4,
    warranty: '5 Year Warranty',
    availability: 'Offer available',
    type: 'Tube Type',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWJPLz0WoURXJjdtr_P_1BKzoW-vDSMU_0Q&s',
  },
  {
    brand: 'MRF',
    name: 'ZVTS',
    size: '155/65 R14',
    price: '₹ 3,618',
    reviews: 250,
    rating: 4,
    warranty: '3 Year Warranty',
    availability: 'Limited offer',
    type: 'Tubeless',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/VY/QF/CK/122761014/truck-tyres.jpg',
  },
  {
    brand: 'CEAT',
    name: 'Milaze',
    size: '165/70 R13',
    price: '₹ 3,774',
    reviews: 200,
    rating: 3.5,
    warranty: '5 Year Warranty',
    availability: 'Available',
    type: 'Tubeless',
    image: 'https://m.media-amazon.com/images/I/616yvupE77L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    brand: 'Goodyear',
    name: 'Duraplus',
    size: '175/65 R14',
    price: '₹ 4,013',
    reviews: 150,
    rating: 4.5,
    warranty: '4 Year Warranty',
    availability: 'Offer available',
    type: 'Tubeless',
    image: 'https://www.goodyear.co.in/wp-content/uploads/Assurance-comforttred_25-1-300x300.png',
  },
  {
    brand: 'Bridgestone',
    name: 'B290',
    size: '185/65 R15',
    price: '₹ 4,500',
    reviews: 180,
    rating: 4,
    warranty: '6 Year Warranty',
    availability: 'Available',
    type: 'Tubeless',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2022/9/II/JY/HX/78953494/product-jpeg-250x250.jpg',
  },
  {
    brand: 'JK Tyre',
    name: 'VECTRA',
    size: '155/70 R13',
    price: '₹ 3,401',
    reviews: 300,
    rating: 4,
    warranty: '5 Year Warranty',
    availability: 'Limited offer',
    type: 'Tube Type',
    image: 'https://m.media-amazon.com/images/I/51VnK1uWIyL._AC_.jpg',
  },
  {
    brand: 'Michelin',
    name: 'Energy XM2',
    size: '195/60 R15',
    price: '₹ 4,200',
    reviews: 270,
    rating: 4.5,
    warranty: '5 Year Warranty',
    availability: 'Offer available',
    type: 'Tubeless',
    image: 'https://m.media-amazon.com/images/I/713FYUHLUwL.jpg',
  },
  {
    brand: 'Continental',
    name: 'ContiComfortContact',
    size: '165/65 R14',
    price: '₹ 3,562',
    reviews: 320,
    rating: 4,
    warranty: '5 Year Warranty',
    availability: 'Available',
    type: 'Tubeless',
    image: 'https://m.economictimes.com/thumb/msid-89723355,width-1200,height-900,resizemode-4,imgsize-27564/continental.jpg',
  },
  {
    brand: 'Pirelli',
    name: 'Cinturato P1',
    size: '175/65 R15',
    price: '₹ 5,000',
    reviews: 100,
    rating: 5,
    warranty: '4 Year Warranty',
    availability: 'Limited offer',
    type: 'Tubeless',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/KG/TJ/TL/8200770/unnamed.png',
  },
  {
    brand: 'Yokohama',
    name: 'Earth-1',
    size: '185/65 R14',
    price: '₹ 4,600',
    reviews: 210,
    rating: 4.5,
    warranty: '5 Year Warranty',
    availability: 'Offer available',
    type: 'Tubeless',
    image: 'https://5.imimg.com/data5/UK/NN/MY-8200770/yokohama-tyre.jpg',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm bg-white overflow-hidden w-full">
      <div className="flex items-center p-4">
        <img src={product.image} alt={product.name} className="h-20 w-20 object-contain mr-4" />
        <div>
          <h3 className="text-lg font-bold text-gray-900">{product.brand}</h3>
          <p className="text-sm text-gray-700">{product.name}</p>
          <p className="text-sm text-gray-700">{product.size}</p>
          <div className="flex items-center mt-1">
            <span className="bg-green-600 text-white px-2 py-1 text-xs rounded-md">{product.rating}★</span>
            <span className="text-xs text-gray-600 ml-2">({product.reviews} Reviews)</span>
          </div>
          <p className="text-xl font-semibold text-gray-900 mt-2">{product.price}</p>
          <p className="text-xs text-green-600">{product.availability}</p>
          <p className="text-xs text-gray-500">{product.type}</p>
        </div>
      </div>
      <div className="bg-gray-100 text-xs font-semibold text-gray-600 p-2 flex justify-between items-center">
        <span>{product.warranty}</span>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const sliderSettings = {
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Tyres sold by this Dealer</h2>
      <div className="hidden lg:block">
        {/* Grid Layout for Larger Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        {/* Slider for Smaller Screens */}
        <Slider {...sliderSettings} className="w-full">
          {products.map((product, index) => (
            <div key={index} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductGrid;

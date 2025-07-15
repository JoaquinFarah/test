"use client"
import React from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Whatsapp from './components/Whatsapp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';

const carouselImages = [
  {
    src: "/INICIO1.jpg",
    text: "PRECISIÓN que impulsa tu industria, FORMACIÓN que salva vidas."
  },
  {
    src: "/inicio2.png",
    text: "PRECISIÓN que impulsa tu industria, FORMACIÓN que salva vidas."
  },
  {
    src: "/INICIO3.jpg",
    text: "PRECISIÓN que impulsa tu industria, FORMACIÓN que salva vidas."
  },
  {
    src: "/INICIO4.jpg",
    text: "PRECISIÓN que impulsa tu industria, FORMACIÓN que salva vidas."
  }
];

export default function Index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative bg-gray-50">
      <Navbar />
      <Whatsapp />

      <div className="relative h-screen min-h-screen -mr-10">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="relative min-h-[60vh] h-screen">
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                width={2000}
                height={2000}
                className="absolute top-0 left-0 w-full h-full object-cover brightness-65 shadow-xl"
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-1/2 left-1/2 w-[90vw] max-w-xl md:max-w-xl lg:max-w-xl transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 sm:p-6 md:p-4 backdrop-blur-xs bg-black/30 rounded-lg">
          <div className="uppercase">
            <p className="py-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Precisión que</p>
            <p className="py-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              <span style={{ backgroundColor: '#f7950a' }} className="text-white px-1 rounded">impulsa</span>
            </p>
            <p className="py-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">tu industria,</p>
            <p className="py-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              <span style={{ backgroundColor: '#f7950a' }} className="text-white px-1 rounded">FORMACIÓN</span>
            </p>
            <p className="py-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">que salva vidas</p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}

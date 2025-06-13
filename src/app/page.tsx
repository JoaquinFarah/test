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

      <div className="relative h-screen">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="relative h-screen">
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                width={2000}
                height={2000}
                className="absolute top-0 left-0 w-full h-full object-cover brightness-65 shadow-xl"
              />
              
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-semibold text-center p-8 backdrop-blur-md bg-black/30 rounded-lg max-w-4xl">
        <div className="uppercase">
          <p className="py-1">Precisión que</p>
          <p className="py-1"><span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">impulsa</span></p>
          <p className="py-1"> tu industria,</p>
          <p className="py-1"><span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">FORMACIÓN</span></p>
          <p className="py-1"> que salva vidas</p>
        </div>
      </div>


      <Footer />
    </div>
  );
}

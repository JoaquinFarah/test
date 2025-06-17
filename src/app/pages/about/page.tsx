import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Whatsapp from '@/app/components/Whatsapp';
import HeroSection from '@/app/components/Hero';
import HeroSection2 from '@/app/components/Hero2';
import Footer from '@/app/components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-gray-50">      
      <Navbar />
      <Whatsapp />
      <div className="relative h-screen min-h-screen -mr-10">
        <Image 
          src="/quienes1.JPG" 
          alt="Icono" 
          width={2000} 
          height={2000} 
          className="absolute top-0 left-0 w-full h-full object-cover shadow-xl brightness-65" 
        />
        <div
          className="
            absolute 
            top-3/5 left-1/5 
            transform -translate-x-1/5 -translate-y-1
            text-white 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold
            text-center rounded-lg 
            bg-gray-900/50 
            p-2 sm:p-4 md:p-5
            backdrop-blur-xs 
            w-[95vw] sm:w-4/5 md:w-3/4 lg:w-full
            max-w-full
            mx-auto
            "
        >
          <p>
            SOMOS{" "}
            <span
              style={{ backgroundColor: "#f7950a" }}
              className="text-white px-1 rounded"
            >
              ESPECIALISTAS
            </span>{" "}
            EN LA BÚSQUEDA Y OBTENCIÓN DEL LÍMITE TÉCNICO
          </p>
          <p>TANTO DEL PERSONAL COMO DE LAS HERRAMIENTAS Y EQUIPOS</p>
        </div>
      </div>      

        <HeroSection />
        <HeroSection2 />
        <Footer />
             
    </div>
  );
}


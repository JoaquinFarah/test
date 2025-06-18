import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Whatsapp from '@/app/components/Whatsapp';
import ContactForm from '@/app/components/Contactform';
import Footer from '@/app/components/Footer';
import Workwithussection from '@/app/components/Workwithussection';

export default function ContactPage() {
  return (
    <div>      
      <Navbar />
      <Whatsapp />
      <div className="relative h-screen min-h-screen">
        <Image 
          src="/contacto1.jpg" 
          alt="Icono" 
          width={2000} 
          height={2000} 
          className="absolute top-0 left-0 w-full h-full object-cover shadow-xl brightness-65" 
        />       
        <div className="absolute 
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
            uppercase">
          <p className="py-1"><span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded uppercase">Comunicate con nosotros</span></p>
          <p> Somos la solución <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">INTEGRAL</span> y <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1  rounded ">EFICIENTE</span> para tu proyecto</p> 
        </div>
      </div>

    <ContactForm />    
    <Workwithussection />
    <Footer />
    
    </div>
  );
}
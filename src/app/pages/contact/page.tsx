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
      <div className="relative h-screen">
        <Image 
          src="/contacto1.jpg" 
          alt="Icono" 
          width={2000} 
          height={2000} 
          className="absolute top-0 left-0 w-full h-full object-cover shadow-xl brightness-65" 
        />
        {/* <div className="absolute top-1/3 left-1/5 transform -translate-x-1/7 -translate-y-1 text-white text-5xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-xs">
          <p className="py-1"><span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded uppercase">Comunicate con nosotros</span></p>
          <p className="py-1"> Somos la solución <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">integral</span> y <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1  rounded ">eficiente</span> para tu proyecto</p> 
        </div> */}
        <div className="absolute top-3/5 left-1/5 transform -translate-x-1/5 -translate-y-1 text-white text-4xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-xs w-full uppercase">
          <p className="py-1"><span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded uppercase">Comunicate con nosotros</span></p>
          <p className="py-1 mt-1"> Somos la solución <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">INTEGRAL</span> y <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1  rounded ">EFICIENTE</span> para tu proyecto</p> 
        </div>
      </div>

    <ContactForm />    
    <Workwithussection />
    <Footer />
    
    </div>
  );
}
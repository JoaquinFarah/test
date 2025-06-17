"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
  const handleClick = () => {
    const phoneNumber = '2613829838';
    const message = '¡Buenos días! Me gustaría ponerme en contacto con ustedes para ser asesorado.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  const handleMail = () => {
    const url = `https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVwhkNhCvfVmGBMWZnpDcTtnxmkCmRStqzrKZnpjMmnNbnNgccrXwtzMCVSbcBCJvtBqV`;
    window.open(url, '_blank');
  };
  const handleAddress = () => {     
    const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.983354692778!2d-68.87008154425357!3d-33.07509723188958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e75b74ddd56fb%3A0x12d4dd49a9ccc0c0!2sTerrada%203907%2C%20Mendoza%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1748361865236!5m2!1ses-419!2sus`;
    window.open(url, '_blank');
  };
  return (
    <div className="relative h-screen min-h-screen -mr-10 bg-gray-50">
      <div className="relative w-full h-full min-h-screen">
        <Image
          src="/Footer.jpg"
          alt="Icono"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover shadow-xl brightness-65"
          style={{ zIndex: 0 }}
        />

        <div
          style={{ backgroundColor: '#f7950a', zIndex: 1 }}
          className="absolute text-lg sm:text-2xl md:text-3xl flex justify-center items-center mt-8 sm:mt-20 p-2 sm:px-10 md:px-36 font-bold text-center text-white w-full"
        >
          Somos un equipo de trabajo,
          <br className="block sm:hidden" />
          con amplia experiencia en 
          <br className="block sm:hidden" />
          el ámbito industrial, lo que nos
          <br className="block sm:hidden" />
          convierte en tu mejor elección
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg sm:text-2xl md:text-3xl font-semibold p-2 sm:p-5 max-w-xs sm:max-w-lg md:max-w-4xl text-center z-10">
          <p>
            Precisión que <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">impulsa</span> tu industria,
          </p>
          <p>
            <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">formación</span> que salva vidas
          </p>
        </div>

        <div className="absolute w-full bottom-0 flex flex-col items-center z-10">
          <div
            className="
              grid grid-cols-2 
              md:flex md:flex-row 
              justify-center items-center 
              gap-4 sm:gap-6 md:gap-20 mb-6 
              w-full max-w-md md:max-w-none
            "
          >
            <button onClick={handleAddress} className="text-center text-white hover:cursor-pointer">
              <div className="text-2xl">📍</div>
              <div className="font-bold mt-2 text-sm sm:text-base">
                Terrada 3907, Perdriel,<br />
                Luján de Cuyo, Mendoza.
              </div>
            </button>
            <button onClick={handleClick} className="text-center text-white hover:cursor-pointer">
              <div className="text-2xl">📞</div>
              <div className="font-bold mt-2 text-sm sm:text-base">
                +54 9 261 3829838<br />
              </div>
            </button>
            <button onClick={handleMail} className="text-center text-white hover:cursor-pointer">
              <div className="text-2xl">✉️</div>
              <div className="font-bold mt-2 text-sm sm:text-base">
                proalianzamdz@gmail.com<br />
              </div>
            </button>
            <Link href="https://www.instagram.com/proalianza.mdz/" target="_blank" className="text-center text-white hover:cursor-pointer">
              <div className="text-2xl">📷</div>
              <div className="font-bold mt-2 text-sm sm:text-base">
                proalianza.mdz<br />
              </div>
            </Link>
          </div>

          <div className="flex justify-center items-center gap-4 md:gap-10 mb-4">
            <Image
              src="/banderaarg.jpg"
              alt="bandera"
              width={80}
              height={80}
              className="object-contain max-h-10 sm:max-h-16"
            />
            <Image
              src="/logocompleto.jpeg"
              alt="logo"
              width={120}
              height={120}
              className="object-contain max-h-10 sm:max-h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
}





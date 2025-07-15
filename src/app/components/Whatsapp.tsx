"use client";
import React from 'react';
import Image from 'next/image';

export default function Whatsapp() {
  const handleClick = () => {
    const phoneNumber = '2613829838';
    const message = '¡Buenos días! Me gustaria ponerme en contacto con ustedes para ser asesorado.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="
        fixed z-50
        bottom-1/9 right-10
        -translate-y-1/2
        sm:top-auto sm:bottom-6 sm:right-6 sm:translate-y-0
        md:bottom-10 md:right-10
        w-14 h-14
        sm:w-16 sm:h-16
        md:w-16 md:h-16
      "
    >
      <div className="flex items-center justify-center w-full h-full">
        <button
          type="button"
          onClick={handleClick}
          className="
            inline-flex flex-col items-center justify-center p-2
            hover:cursor-pointer group rounded-full shadow-lg
            transition duration-300 ease-in-out
            backdrop-blur-md bg-white/20 hover:bg-white/30
            dark:bg-zinc-800/30 dark:hover:bg-zinc-800/50
            shadow-amber-500/50 dark:shadow-amber-800/80
            w-full h-full
          "
        >
          <Image
            src="/whatsapp.png"
            alt="Icono"
            width={48}
            height={48}
            className="
              w-8 h-8
              sm:w-10 sm:h-10
              md:w-12 md:h-12
              group-hover:opacity-70 transition-opacity duration-500 ease-in-out
            "
          />
        </button>
      </div>
    </div>
  );
}

'use client';
import { EnvelopeIcon, MapPinIcon, DevicePhoneMobileIcon, CameraIcon, ClockIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function ContactForm() {
  const handleClick = () => {
    const phoneNumber = '2613829838';
    const message = '¡Buenos días! Me gustaria ponerme en contacto con ustedes para ser asesorado.';
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
    <section
      className="text-gray-800 py-8 sm:py-12 md:py-16"
      style={{
        backgroundImage: "url('/fondo3.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-12 px-2 md:px-6">
        {/* Left side */}
        <div className="w-full md:w-1/2">
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center">
              <MapPinIcon className="absolute w-8 h-8 sm:w-10 sm:h-10 text-gray-500" />
              <h1 className="ml-12 text-xl sm:text-2xl font-bold p-1 rounded-sm">Dirección</h1>
            </div>
            <div>
              <button onClick={handleAddress} className="ml-12 flex items-center gap-3 hover:cursor-pointer hover:text-blue-500 text-lg sm:text-2xl font-semibold">
                <p className="text-start">Cnel.Terrada 3907 - Perdriel <br/> Luján de Cuyo, Mendoza</p>
              </button>
            </div>

            <div className="flex items-center">
              <ClockIcon className="absolute w-8 h-8 sm:w-10 sm:h-10 text-gray-500" />
              <h1 className="ml-12 text-xl sm:text-2xl font-bold p-1 rounded-sm">Horarios de atención</h1>
            </div>
            <button className="ml-12 flex items-center gap-3 hover:cursor-pointer hover:text-blue-500 text-lg sm:text-2xl font-semibold">
              <p className="text-start">Lunes a viernes de 9:00 a 18:00hs.</p>
            </button>

            <div className="flex items-center">
              <DevicePhoneMobileIcon className="absolute w-8 h-8 sm:w-10 sm:h-10 text-gray-500" />
              <h1 className="ml-12 text-xl sm:text-2xl font-bold p-1 rounded-sm">Teléfono</h1>
            </div>
            <button onClick={handleClick} className="ml-12 flex items-center gap-3 hover:cursor-pointer hover:text-blue-500 text-lg sm:text-2xl font-semibold">
              <p>+54 9 2613829838</p>
            </button>

            <div className="flex items-center">
              <EnvelopeIcon className="absolute w-8 h-8 sm:w-10 sm:h-10 text-gray-500" />
              <h1 className="ml-12 text-xl sm:text-2xl font-bold p-1 rounded-sm">Correo</h1>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleMail} className="ml-12 flex items-center gap-3 hover:cursor-pointer hover:text-blue-500 text-lg sm:text-2xl font-semibold">
                <p>proalianzamdz@gmail.com</p>
              </button>
            </div>

            <div className="flex items-center">
              <CameraIcon className="absolute w-8 h-8 sm:w-10 sm:h-10 text-gray-500" />
              <h1 className="ml-12 text-xl sm:text-2xl font-bold p-1 rounded-sm">Instagram</h1>
            </div>
            <div className="flex items-center gap-3">
              <Link href="https://www.instagram.com/proalianza.mdz/" target="_blank" className="ml-12 flex items-center gap-3 hover:cursor-pointer hover:text-blue-500 text-lg sm:text-2xl font-semibold">
                <p>@proalianza.mdz</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex items-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.823743321707!2d-68.87030493041283!3d-33.07502349834629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e75b74ddd56fb%3A0x12d4dd49a9ccc0c0!2sTerrada%203907%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1748620153995!5m2!1ses!2sar"
            className="w-full h-64 sm:h-96 md:h-[500px] rounded-md border border-gray-300 shadow-lg"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <style jsx>{`
        /* Ajuste para el margin-left de los títulos */
        .ml-12 {
          margin-left: 3rem;
        }
        @media (max-width: 640px) {
          .ml-12 {
            margin-left: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Whatsapp from "@/app/components/Whatsapp";
import Footer from "@/app/components/Footer";
import ProfileSection from "@/app/components/Profilesection";
import ChooseSection from "@/app/components/Choosesection";

export default function ProfilePage() {
  return (
    <div>
      <Navbar />
      <Whatsapp />

      <div className="relative h-screen">
        <Image
          src="/perfil3.jpg"
          alt="Icono"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 w-full h-full object-fill shadow-xl brightness-65"
        />

        <div className="absolute top-3/5 left-1/5 transform -translate-x-1/5 -translate-y-1 text-white text-4xl font-semibold text-center rounded-lg bg-gray-900/50 p-5 backdrop-blur-xs w-full">
          <p className="uppercase">IMPULSAMOS EL <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">ÉXITO</span> DE TU PROYECTO </p>
          <p>CON <span style={{ backgroundColor: '#f7950a' }} className=" text-white px-1 rounded">SOLUCIONES</span> PRÁCTICAS</p>
        </div>
      </div>

      <ChooseSection />
      <ProfileSection />
      <Footer />
    </div>
  );
}

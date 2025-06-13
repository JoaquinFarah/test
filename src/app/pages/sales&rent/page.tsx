"use client"
import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Whatsapp from '@/app/components/Whatsapp';

const servicios = [
  {
    id: 'era',
    title: 'Equipos Autónomos',
    description: 'Venta y Alquiler de equipos autónomos de última generación, con la mejor tecnología del mercado. Contamos con un equipo especializado para asesorarte en la compra o alquiler del equipo que mejor se adapte a tus necesidades.',
    image: '/paautonomos.jpg',
    details: [
      'Garantía por 1 año',
      'Manuales de uso',
      'Certificado de calibración',
      'Recarga',

    ]
  },
  {
    id: 'altura',
    title: 'Elementos de Protección para el Trabajo en Altura',
    description: (
    <>
    Comercializamos todos los productos y sistemas para Trabajos en Altura de la firma <strong>X-Urban</strong> de calidad comprobada, innovación constante y variedad para cada necesidad. Desde soluciones técnicas hasta productos de uso diario. Reconocidos por su versatilidad y stock permanente. Brindamos también asesoramiento y capacitación a tu personal.
    </>
    ),
    image: '/epp1.jpg',
    details: [
      'Evaluación de entornos de trabajo',
      'Planes de mantenimiento',
      'Cursos y capacitaciones',
      'Asesoramiento',
    ]
  },
  {
    id: 'izaje',
    title: 'Elementos de Sujeción e Izaje de Carga',
    description: (
    <>
    Comercializamos todos los productos para Sujeción e Izaje de cargas de la firma <strong>X-Urban</strong> de calidad comprobada, innovación constante y variedad para cada necesidad. Desde soluciones técnicas hasta productos de uso diario. Reconocidos por su versatilidad y stock permanente. Brindamos también asesoramiento y capacitación a tu personal.
    </>
    ),
    image: '/pafijacion2.jpg',
    details: [
      'Cursos de capacitación',
      'Asesoramiento',
      'Línea de vida',
      'Trípodes',
      'Malacates',
    ]
  }, 
  
];

const SalesAndRent = () => {
  const [activeTab, setActiveTab] = useState(servicios[0].id);

  return (
    <div style={{ backgroundColor: '#f7950a' }} className="min-h-screen flex flex-col">
        <Navbar />
        <Whatsapp />
      <main className="flex-grow h-screen mt-20">
       
        <section>
          <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {servicios.map((servicio) => (
                <button
                  key={servicio.id}
                  onClick={() => setActiveTab(servicio.id)}
                  className={`px-6 py-3 rounded-md text-lg font-medium transition-colors ${
                    activeTab === servicio.id
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-300 hover: cursor-pointer'
                  }`}
                >
                  {servicio.title}
                </button>
              ))}
            </div>
            
            <div className="mt-12">
              {servicios.map((servicio) => (
                <div
                  key={servicio.id}
                  className={`${
                    activeTab === servicio.id ? 'block' : 'hidden'
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-bold mb-6">{servicio.title}</h2>
                      <p className="text-xl text-gray-700 mb-8">{servicio.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {servicio.details.map((detail, index) => (
                          <div key={index} className="flex items-center">
                            <div className="mr-2">✓</div>
                            <p className="text-gray-700">{detail}</p>
                          </div>
                        ))}
                      </div>
                      
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src={servicio.image} 
                        alt={servicio.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SalesAndRent;
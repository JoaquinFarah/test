"use client"
import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Whatsapp from '@/app/components/Whatsapp';
import { HiMenu, HiX } from 'react-icons/hi'; // Agrega esto para los íconos del menú

const servicios = [
  {
    id: 'altura',
    title: 'Trabajos en Altura',
    description: 'Capacitación actualizada con las últimas disposiciones de la Resolución 61/2023. Incluye los tres niveles que exige dicha normativa: Superior, Intermedio y Operativo. Práctica con plataforma de entrenamiento móvil, uso de malacates, trípode y todos los EPP necesarios.',
    image: '/torre3.jpg',
    details: [
      'Modalidad: Presencial',
      'Duración: 3 a 6 hs. Dependiendo el nivel',

    ]
  },
  {
  id: 'confinados',
  title: 'Espacios Confinados',
  description: (
    <>
      Con prácticas en distintos niveles en nuestra exclusiva <strong>unidad de entrenamiento móvil</strong> la cual simula las más variadas situaciones de dificultad que incluyen el uso de equipos autónomos, trípodes, malacates y escasa visibilidad para un entrenamiento realmente avanzado y real.
    </>
  ),
  image: '/cursoconfinados.jpg',
  details: [
    'Modalidad: Presencial',
    'Duración: 3 a 6 hs. Dependiendo el nivel',
  ]
},
  {
    id: 'detectores',
    title: 'Detectores de Gases Portátiles',
    description: 'Brindamos capacitación en el correcto uso y mantenimiento de detectores portátiles.',
    image: '/msagas.jpg',
    details: [
      'Modalidad: Presencial y on line',
      'Duración: 3 hs. ',
    ]
  },
  {
    id: 'era',
    title: 'Usos de ERA',
    description: '(Equipo de Respiración Autónomo): Esta capacitación es la base para poder ingresar al mundo de los espacios confinados, con las mejores técnicas para un buen uso y mantenimiento de los mismos. ',
    image: '/pacapacitacionesera.jpg',
    details: [
      'Modalidad: Presencial',
      'Duración: 3 Hs.',
    ]
  },
  {
    id: 'h2s',
    title: 'Trabajos con H2S',
    description: 'Contamos con Instructor certificado por Total Safety (Houston) según lineamientos del programa ANSI Z 390.1. Ofrecemos además la posibilidad de certificar a los participantes con la prestigiosa WCI a nivel nacional o con el IADC a nivel internacional. ',
    image: '/h2s.jpg',
    details: [
      'Modalidad: Presencial y on line',
      'Duración: 8 hs.',
    ]
  },
  {
    id: 'torre',
    title: 'Inspecciones de Equipos de Torre',
    description: 'Ponemos a disposición nuestra amplia experiencia en la realización y dictado de cursos de Seguridad e Integridad de Equipos de Torre con nuestro instructor certificado por ModuSpec/Lloyd´s Register. Curso disponible con certificación nacional de WCI o internacional con el IADC.',
    image: '/torrepetroleo.jpg',
    details: [
      'Modalidad: Presencial y on line',
      'Duración: 16 o 40 hs. Dependiendo el nivel',
    ]
  },
  {
    id: 'rig',
    title: 'Rig Pass | Pase al Equipo',
    description: 'Reflejamos toda la base que un Operario necesita para acceder a un equipo de torre. Orientación acerca del equipo y sus componentes. Medidas de seguridad. Riesgos inherentes  a cada tarea. Trabajos en Altura. Respuesta a emergencias. H2S. Levantamiento manual de cargas. Izaje de cargas. Permisos de trabajo. Análisis de Riesgos. Bloqueo y etiquetado. Reseña sobre medio ambiente. ',
    image: '/rigpass.jpg',
    details: [
      'Modalidad: Presencial y on line',
      'Duración: 8 Hs.',
    ]
  },
  {
    id: 'drops',
    title: 'DROPS | Prevención Caída de Objetos',
    description: 'Este programa establece las condiciones obligatorias de seguridad que deben implementarse para la prevención o eliminación de los riesgos de caídas de objetos en altura, garantizando que los mismos se realicen adoptando las mejores prácticas de aseguramiento confiable y los máximos estándares de la industria.',
    image: '/drops.jpg',
    details: [
      'Modalidad: Presencial y on line',
      'Duración: 8 hs.',
    ]
  },
  {
    id: 'analista',
    title: 'Analistas de Gases',
    description: 'El éxito de un trabajo en espacios confinados depende en gran medida de la precisión y exactitud de las mediciones de gases que se realicen y del conocimiento para realizarlas. En este curso, el participante recibirá todas las herramientas para realizar los trabajos con éxito generando las competencias necesarias en los ANALISTAS DE GASES que asisten a las personas que operan procesos de alto riesgo, para identificar atmósferas que pudieran ser nocivas, con el fin de evitar incidentes.',
    image: '/analistagases.jpg',
    details: [
      'Modalidad: Presencial y on line',
      'Duración: 4 hs.',
      'En Alianza con WCI'
    ]
  }  
];

const Training = () => {
  const [activeTab, setActiveTab] = useState(servicios[0].id);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa

  return (
    <div style={{ backgroundColor: '#f7950a' }} className="min-h-screen flex flex-col">
      <Navbar />
      <Whatsapp />
      <main className="flex-grow mt-20 pb-20"> 
        <section>
          <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
            {/* Menú hamburguesa solo en mobile */}
            <div className="mb-8 flex flex-col items-center sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none"
                aria-label="Abrir menú de servicios"
              >
                {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                <span className="ml-2 text-lg font-medium">Capacitaciones</span>
              </button>
              {menuOpen && (
                <div className="flex flex-col mt-4 w-full bg-white rounded shadow-lg z-50">
                  {servicios.map((servicio) => (
                    <button
                      key={servicio.id}
                      onClick={() => {
                        setActiveTab(servicio.id);
                        setMenuOpen(false);
                      }}
                      className={`px-6 py-3 text-left rounded-md text-lg font-medium transition-colors ${
                        activeTab === servicio.id
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {servicio.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Menú horizontal en desktop */}
            <div className="mb-8 justify-center gap-4 hidden sm:flex flex-wrap">
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
            <div className="mt-8">
              {servicios.map((servicio) => (
                <div
                  key={servicio.id}
                  className={`${activeTab === servicio.id ? 'block' : 'hidden'}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4">{servicio.title}</h2>
                      <p className="text-base sm:text-xl text-gray-700 mb-6">{servicio.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {servicio.details.map((detail, index) => (
                          <div key={index} className="flex items-center">
                            <div className="mr-2">✓</div>
                            <p className="text-gray-700">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl mt-6 lg:mt-0">
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

export default Training;
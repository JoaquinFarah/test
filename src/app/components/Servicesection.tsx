"use client"
import React, { useState } from 'react';

const servicios = [
  {
    id: 'formacion',
    title: 'Formación Especializada',
    description: 'Programas de capacitación adaptados a las necesidades específicas de cada industria, con un enfoque práctico y orientado a resultados.',
    image: '/plan.jpg',
    details: [
      'Formación en altura',
      'Espacios confinados',
      'Manejo de maquinaria pesada',
      'Prevención de riesgos laborales',
      'Primeros auxilios industriales',
      
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoría en Seguridad',
    description: 'Servicios de asesoramiento para mejorar la seguridad en el entorno laboral y cumplir con la normativa vigente.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    details: [
      'Evaluación de riesgos',
      'Planes de emergencia',
      'Auditorías de seguridad',
      'Investigación de accidentes',
      'Planes de prevención',
      'Gestión de la seguridad'
    ]
  },
  {
    id: 'certificaciones',
    title: 'Certificaciones',
    description: 'Programas de certificación oficial para validar las competencias de los trabajadores según estándares internacionales.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    details: [
      'Certificación en trabajo en altura',
      'Certificación en espacios confinados',
      'Certificación de operadores de maquinaria',
      'Certificación en prevención de riesgos',
      'Certificación en rescate industrial',
      'Certificación en gestión de la seguridad'
    ]
  },
  {
    id: 'auditorias',
    title: 'Auditorías',
    description: 'Evaluaciones exhaustivas para identificar áreas de mejora y garantizar el cumplimiento de la normativa y los estándares de seguridad.',
    image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    details: [
      'Auditorías de sistemas de gestión',
      'Auditorías de cumplimiento normativo',
      'Auditorías de seguridad',
      'Auditorías de procesos',
      'Auditorías de instalaciones',
      'Auditorías energéticas'
    ]
  }
];

const Servicios = () => {
  const [activeTab, setActiveTab] = useState(servicios[0].id);

  return (
    <div className="min-h-screen flex flex-col bg-amber-400">
      
      <main className="flex-grow">
        <div className="bg-proalianza-blue py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Soluciones integrales adaptadas a las necesidades específicas de tu industria
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {servicios.map((servicio) => (
                <button
                  key={servicio.id}
                  onClick={() => setActiveTab(servicio.id)}
                  className={`px-6 py-3 rounded-md text-lg font-medium transition-colors ${
                    activeTab === servicio.id
                      ? 'bg-proalianza-orange text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                      <p className="text-lg text-gray-600 mb-8">{servicio.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {servicio.details.map((detail, index) => (
                          <div key={index} className="flex items-center">
                            <div className="text-proalianza-orange mr-2">✓</div>
                            <p className="text-gray-700">{detail}</p>
                          </div>
                        ))}
                      </div>
                      <button className="mt-8 bg-proalianza-orange text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition duration-300">
                        Más información
                      </button>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src={servicio.image} 
                        alt={servicio.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-proalianza-blue/30"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Servicios;
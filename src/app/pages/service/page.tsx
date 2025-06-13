"use client"
import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Whatsapp from '@/app/components/Whatsapp';

const servicios = [
  {
    id: 'inspeccion',
    title: 'Inspección de Equipos de Torre',
    description: 'Incremente la productividad y eficiencia ya que los equipos y periféricos son probados a su máxima capacidad antes de iniciar un contrato o luego de una inspección cat. IV (IND) garantizando un óptimo funcionamiento durante la operación. También se obtiene un incremento en los niveles de seguridad en la operación y mejora en los indicadores de accidentabilidad. Tenemos basta experiencia en inspecciones visuales de seguridad como también de integridad.',
    image: '/painspecciontorre.jpg',
    details: [

    ]
  },
  {
    id: 'optimizacion',
    title: 'Optimización de Operaciones en Equipo de Torre',
    description: 'Es nuestra especialidad y lo que más nos apasiona, con énfasis en equipos de Workover y Pulling. Optimice sus operaciones al tiempo que incrementa la seguridad y reduce los costos operativos. Este programa plantea el desafío de poder incrementar la eficiencia y bajar costos de operación, mejorando a su vez los estándares de seguridad. Sabemos cómo hacerlo con o sin inversión. ',
    image: '/optimizacioneqtorre.jpg',
    details: [

    ]
  },
  {
    id: 'auditor',
    title: 'Seguimiento Semanal de Acciones de Mejora/Correctivas con Herramienta iAuditor',
    description: 'Nuestros procesos de Inspección y Auditoría son cargados automáticamente en la plataforma iAuditor en campo, mientras se realiza el trabajo correspondiente. Con nuestra basta experiencia y con ayuda de dicha plataforma de inspección, capturamos las acciones de mejora, asignándolas a uno o varios responsables para un seguimiento semanal, verificando no solo el cierre de las mismas sino la calidad y el tiempo de la resolución.',
    image: '/iaauditor.jpg',
    details: [

    ]
  },
  {
    id: 'drops',
    title: 'Auditorías de Prevención de Caída de Objetos (DROPS)',
    description: 'Revisión exhaustiva de cada elemento fijado en altura tomando como referencia las recomendaciones de las últimas versiones de DROPS. Los desvíos, dependiendo de su criticidad pueden ser tratados de inmediato o en un tiempo prudencial. El personal es capacitado in situ con propuestas de mejora y las acciones son seguidas semanalmente mediante la herramienta iAuditor lo que resulta en un servicio único y sin antecedentes.',
    image: '/padrops.jpg',

    details: [

    ]
  }, 
  {
    id: 'sistematico',
    title: 'Investigación de Incidentes Método Sistémico',
    description: 'Nos especializamos en el modelo sistémico de investigación de incidentes, más allá del error humano o de la falla técnica, analizando los factores que están alejados del momento y lugar del suceso para una investigación exhaustiva que sirva para evitar la recurrencia de incidentes. ',
    image: '/metodosistemico.jpg',

    details: [

    ]
  },
  {
    id: 'era',
    title: 'Mantenimiento de Equipos Autónomos',
    description: 'Aseguramos el máximo rendimiento y seguridad de tu equipo verificando el correcto funcionamiento de cada componente. ',
    image: '/paserviceera.png',

    details: [

    ]
  },
  {
    id: 'mediciones',
    title: 'Mediciones Higiénicas',
    description: '',
    image: '/medicionhigienica.jpg',

    details: [
      'Medición legal puesta a tierra PAT',
      'Medición iluminación',
      'Medición sonora',
      'Medición carga térmica',
    ]
  },
  {
    id: 'campo',
    title: 'Supervisión de Campo',
    description: '',
    image: '/supervisioncampo.jpg',

    details: [
      'Supervisión de Trabajos en altura',
      'Supervisión de espacios confinados',
      'Supervisión de Trabajos en caliente',

    ]
  }
];

const Service = () => {
  const [activeTab, setActiveTab] = useState(servicios[0].id);

  return (
    <div style={{ backgroundColor: '#f7950a' }} className="min-h-screen flex flex-col">
      <Navbar />
      <Whatsapp />
      <main className="flex-grow h-screen mt-20 mb-50">

        <section>
          <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {servicios.map((servicio) => (
                <button
                  key={servicio.id}
                  onClick={() => setActiveTab(servicio.id)}
                  className={`px-6 py-3 rounded-md text-lg font-medium transition-colors ${activeTab === servicio.id
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
                  className={`${activeTab === servicio.id ? 'block' : 'hidden'
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

export default Service;
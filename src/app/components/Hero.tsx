import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 -mr-10">
      {/* Sticky background */}
      <div
        className="pointer-events-none absolute left-0 right-0 -z-10"
        style={{
          top: '0px', 
          bottom: 0,
          backgroundImage: "url('/fondo1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 1 // Opacity adjust
        }}
        aria-hidden="true"
      />

      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-2 lg:overflow-visible lg:px-8 mt-20 mb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-start">
          <div className="lg:pr-4 order-2 lg:order-1">
            <div className="max-w-3xl text-gray-700">
              <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              ¿QUIÉNES SOMOS?
              </h1>
              <p className="mt-6 text-xl leading-8">
              <span style={{ backgroundColor: '#f7950a' }} className="font-bold">Pro Alianza®</span> es una empresa de <span style={{ backgroundColor: '#f7950a' }} className=" font-bold">Servicios de Asistencia Técnica, Capacitación, Entrenamiento, Calibración de Sistemas de Detección y Comercialización de Productos</span> para la Seguridad bajo el esquema de Sociedad de Acciones Simplificada (S.A.S). Brinda un servicio de calidad contando a su vez con un equipo interdisciplinario con 30 años de experiencia en funciones claves de diversas empresas.
              </p>
              <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              NUESTRA MISIÓN
              </h1>
              <p className="mt-6 text-xl leading-8">
              Volcar nuestra experiencia en el análisis de operaciones industriales, con el fin de obtener su <span style={{ backgroundColor: '#f7950a' }} className=" font-bold">optimización</span>, mejorando la eficiencia y la seguridad, al mismo tiempo que se reducen los costos.
              </p>  
              <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              NUESTRO CRITERIO INDUSTRIAL
              </h1>
              <p className="mt-6 text-xl leading-8">
              Se basa en la optimización de procesos y recursos, aplicando las mejores prácticas y tecnologías disponibles. Nos enfocamos en la seguridad, eficiencia y sostenibilidad de las operaciones, buscando siempre el equilibrio entre el rendimiento operativo y la gestión responsable de los recursos. Trabajamos de manera <span style={{ backgroundColor: '#f7950a' }} className=" font-bold">proactiva</span> para identificar áreas de mejora y proponer soluciones innovadoras que agreguen valor real a nuestros clientes.
              </p>   
            </div>
          </div>

          <div className="p-1 lg:sticky lg:top-20 order-1 lg:order-2">
            <Image
              src="/quienes2.jpg"
              alt="Icono"
              width={2000}
              height={2000}
              className="rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] lg:rounded-r-xl lg:object-cover lg:object-center lg:w-full lg:h-96 lg:bg-gray-900/50 lg:ring-5 lg:shadow-none"
            />
          </div>
        </div>
      </div>      
    </div>
  )
}

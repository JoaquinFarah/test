import Image from 'next/image'

export default function ProfileSection() {
  const TripleRight = () => (
  <img
    src="/TripleRight.svg"
    alt="Triple Right"
    style={{ width: 100, height: 100, verticalAlign: "middle" }}
    loading="lazy"
  />
);

const TripleLeft = () => (
  <img
    src="/TripleLeft.svg"
    alt="Triple Left"
    style={{ width: 100, height: 100, verticalAlign: "middle" }}
    loading="lazy"
  />
);

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 -mr-10">
      {/* Sticky background */}
      <div
        className="pointer-events-none absolute left-0 right-0 -z-10"
        style={{
          top: '0px', 
          bottom: 0,
          backgroundImage: "url('/fondo4.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 1, // Opacity adjust
        }}
        aria-hidden="true"
      />
    
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginBottom: 24}}>
      <TripleRight />
      <span
        style={{
          background: "#fff",
          color: "#111",
          fontWeight: 700,
          fontSize: 40,
          padding: "0 32px",
          letterSpacing: 1,
          borderRadius: 2,
          boxShadow: "0 2px 8px #0001",
        }}
      >
        LA MEJOR ELECCIÓN
      </span>
      <TripleLeft />
    </div>

      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-2 lg:overflow-visible lg:px-8 mt-20 mb-20">
      
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-start">
          <div className="lg:pr-4 order-2 lg:order-1">
            <div>
              <div className="text-3xl flex text-center items-center mt-10 text-pretty">
                <p>
                Pro Alianza es una nueva opción que ofrece soluciones de alta calidad para satisfacer las necesidades del cliente.
                </p>
              </div>
              <div className="text-3xl flex text-center items-center mt-10 text-pretty">
                <p>
                Nuestra experiencia en el sector nos permite brindar un servicio integral, adaptándonos a tus necesidades específicas y asegurando resultados óptimos.
                </p>
              </div>              

              <h1 className="mt-30 px-2 py-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              SOLUCIONES INTELIGENTES
              </h1>
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Conociendo las necesidades de nuestros clientes, nos adaptamos a sus requerimientos y planteamos la adecuada solución
              </p>   

              <h1 className="mt-30 px-2 py-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              SEGURIDAD EN LO QUE HACEMOS
              </h1>
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Sabemos que lo más importante es nuestra vida y la de nuestros clientes. Por ello, todo lo que hacemos lo respaldamos con la mejor calidad y seguridad del servicio
              </p>   

              <h1 className="mt-30 px-2 py-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              FORMACIÓN CONSTANTE
              </h1>
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Parte de crecer es enseñar. Nos aseguramos que nuestros clientes reciban propuestas de capacitación en continua revisión de acuerdo con los últimos estándares de la industria
              </p> 

              <h1 className="mt-30 px-2 py-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              ¿NO TIENEN EQUIPAMIENTO? 
              </h1>
              <h1 className="px-2 pb-2 text-center text-4xl font-semibold tracking-tight text-pretty text-gray-900 bg-white sm:text-4xl">
              ¡NO ES UN PROBLEMA!
              </h1>
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Tenemos a nuestra disposición el mejor equipamiento para garantizar el éxito de las operaciones, asegurándonos que todo el personal esté capacitado y cuente con los materiales necesarios para realizar su trabajo de manera segura y eficiente.
              </p> 
              <p className="text-3xl flex text-center items-center mt-10 text-pretty">
              Nos destacamos por nuestra atención al cliente, compromiso con la calidad y un enfoque proactivo en la resolución de sus problemas.
              </p> 
              <p className="text-3xl flex text-center items-center mt-10 text-pretty font-bold">
              No solo somos un proveedor, somos un aliado estratégico que impulsa el éxito de tu proyecto.
              </p>             
            </div>
          </div>

          <div className="p-1 lg:sticky lg:top-20 order-1 lg:order-2">
            <Image
              src="/perfil2.jpeg"
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



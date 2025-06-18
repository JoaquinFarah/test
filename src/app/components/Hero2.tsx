import Image from 'next/image'

export default function HeroSection2() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 -mr-10">
      {/* Sticky background */}
      <div
        className="pointer-events-none absolute left-0 right-0 -z-10"
        style={{
          top: '0px', 
          bottom: 0,
          backgroundImage: "url('/fondo2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 1, // Opacity adjust
        }}
        aria-hidden="true"
      />

      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-2 lg:overflow-visible lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-start">

          <div className="p-1 lg:sticky lg:top-20">
            <Image
              src="/quienes3.jpg"
              alt="shake"
              width={2000}
              height={2000}
              className="rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[70rem] lg:rounded-l-xl lg:object-cover lg:object-center lg:w-full lg:h-[32rem] lg:bg-gray-900/50 lg:ring-5 lg:shadow-none"
            />
          </div>

          <div className="lg:pr-4 mt-20">
            <div className="max-w-3xl text-gray-700">
              <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              NUESTRA VISIÓN
              </h1>
              <p className="mt-6 text-xl leading-8">
                Ser reconocidos como una empresa líder en nuestra especialidad brindando servicios de <span style={{ backgroundColor: '#f7950a' }} className="font-bold">excelencia</span> que superen las expectativas de nuestros clientes y contribuyan al desarrollo sostenible.
              </p>

              <h1 className="mt-50 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              NUESTRO CRITERIO EMPRESARIAL
              </h1>
              <div className="mt-6 text-xl leading-8">
              <p>Nuestro criterio empresarial se fundamenta en la excelencia operativa y la generación de valor sostenible.</p>
              <p className="text-start mt-5">Nos destacamos por:</p>
              <p className="text-start mt-5">• La búsqueda constante de la innovación y mejora continua</p>
              <p className="text-start">• El desarrollo de relaciones comerciales sólidas y
              duraderas</p>
              <p className="text-start">• La formación y capacitación permanente de nuestro
              equipo</p>
              <p className="text-start">• El compromiso con la calidad y la satisfacción del
              cliente</p>
              <p className="text-start">• La responsabilidad social y ambiental en nuestras
              operaciones</p>
              <p className="text-start">• La transparencia ética en todas nuestras acciones</p>
              <p className="text-start"></p>      
              <p className="mt-10">Estos pilares nos permiten ofrecer soluciones integrales que maximizan la <span style={{ backgroundColor: '#f7950a' }} className="font-bold">eficiencia</span> y <span style={{ backgroundColor: '#f7950a' }} className=" font-bold">competitividad</span> de nuestros clientes.</p>
              </div>
                          
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

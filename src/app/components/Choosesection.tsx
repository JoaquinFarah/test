import Image from "next/image";

export default function ChooseSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 lg:overflow-visible -mr-10">
      {/* Sticky background */}
      <div
        className="pointer-events-none absolute left-0 right-0 -z-10"
        style={{
          top: "0px",
          bottom: 0,
          backgroundImage: "url('/fondo5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
        aria-hidden="true"
      />

      <div>
        <h1
          style={{ backgroundColor: "#f7950a" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center items-center mt-10 sm:mt-16 p-3 sm:p-5 uppercase font-bold text-center rounded"
        >
          ¿Por qué elegirnos?
        </h1>
        <div className="flex justify-center text-center items-center mt-8 sm:mt-10 px-5">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl text-pretty">
            En un mundo donde la seguridad y la eficiencia son primordiales,
            somos{" "}
            <span
              style={{ backgroundColor: "#f7950a" }}
              className="font-bold px-1 rounded"
            >
              tu nuevo aliado
            </span>{" "}
            estratégico. Con 30 años de experiencia en la industria, ofrecemos
            soluciones integrales que garantizan la protección de los
            trabajadores y la optimización de los recursos.
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mt-10 sm:mt-12">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/ribbonwhite.svg"
              alt="Gestión de Riesgos"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5 p-2 rounded"
            >
              Gestión de Riesgos
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-sm text-center text-pretty px-5">
              Ofrecemos soluciones avanzadas para identificar y mitigar riesgos
              en entornos laborales
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/shieldwhite.svg"
              alt="Seguridad Industrial"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5 p-2 rounded"
            >
              Seguridad Industrial
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-sm text-center text-pretty px-5">
              Implementamos estrategias de seguridad industrial que protegen a
              los trabajadores y optimizan la productividad
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/omegawhite.svg"
              alt="Capacitación Especializada"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5 p-2 rounded"
            >
              Capacitación Especializada
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-sm text-center text-pretty px-5">
              Brindamos formación especializada para garantizar que los equipos de trabajo
              estén preparados para enfrentar desafíos críticos
            </p>
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-10 sm:mt-12">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/helmetwhite.svg"
              alt="Productos y Servicios de Óptima Calidad"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5 p-2 rounded"
            >
              Productos y Servicios de Óptima Calidad
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl text-center text-pretty px-5">
              Contamos con los mejores materiales disponibles en el mercado garantizando la excelencia tanto a nuestro personal como a nuestros clientes, asegurando la tranquilidad para cumplir con las exigencias de los mismos
            </p>
          </div>
          <div className="flex flex-col mt-5 sm:mt-0 items-center text-center">
            <Image
              src="/handswhite.svg"
              alt="Experiencia Comprobable"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5 p-2 rounded"
            >
              Experiencia Comprobable
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl text-center text-pretty px-5">
              Porque nuestro staff ha pasado los últimos 30 años en áreas de
              seguridad laboral y capacitaciones permanentes, estamos seguros
              que podemos ofrecer todo lo que sabemos. “Cuando hay conocimiento
              se hace notar”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

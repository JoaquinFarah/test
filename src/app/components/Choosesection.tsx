import Image from "next/image";

export default function ChooseSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 -mr-10">
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
          opacity: 1, // Opacity adjust
        }}
        aria-hidden="true"
      />

      <div>
        <h1
          style={{ backgroundColor: "#f7950a" }}
          className="text-5xl flex justify-center items-center mt-20 p-5 uppercase font-bold"
        >
          ¿Por qué elegirnos?
        </h1>
        <div className="text-3xl flex justify-center text-center items-center mt-10 px-55 text-pretty">
          <p>
            En un mundo donde la seguridad y la eficiencia son primordiales,
            somos{" "}
            <span
              style={{ backgroundColor: "#f7950a" }}
              className="font-bold px-1"
            >
              {" "}
              tu nuevo aliado
            </span>{" "}
            estratégico. Con 30 años de experiencia en la industria, ofrecemos
            soluciones integrales que garantizan la protección de los
            trabajadores y la optimización de los recursos.
          </p>
        </div>

        {/* Three Columns */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 px-10">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/ribbonwhite.svg"
              alt="High Risk Company 1"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-3xl font-semibold mt-5 p-2"
            >
              Gestión de Riesgos
            </h2>
            <p className="mt-3 text-2xl px-20 text-center text-pretty">
              Ofrecemos soluciones avanzadas para identificar y mitigar riesgos
              en entornos laborales
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/shieldwhite.svg"
              alt="High Risk Company 2"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-3xl font-semibold mt-5 p-2"
            >
              Seguridad Industrial
            </h2>
            <p className="mt-3 text-2xl px-20 text-center text-pretty">
              Implementamos estrategias de seguridad industrial que protegen a
              los trabajadores y optimizan la productividad
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/omegawhite.svg"
              alt="High Risk Company 3"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-3xl font-semibold mt-5 p-2"
            >
              Capacitación Especializada
            </h2>
            <p className="mt-3 text-2xl px-20 text-center text-pretty">
              Brindamos formación especializada para garantizar que los equipos de trabajo
              estén preparados para enfrentar desafíos críticos
            </p>
          </div>
        </div>

        {/* Two Columns */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-50">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/helmetwhite.svg"
              alt="High Risk Company 1"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-3xl font-semibold mt-5 p-2"
            >
              Productos y Servicios de Óptima Calidad
            </h2>
            <p className="mt-3 text-2xl px-20 text-center text-pretty">
              Contamos con los mejores materiales disponibles en el mercado garantizando la excelencia tanto a nuestro personal como a nuestros clientes, asegurando la tranquilidad para cumplir con las exigencias de los mismos
            </p>
          </div>
          <div className="flex flex-col mt-5 items-center text-center">
            <Image
              src="/handswhite.svg"
              alt="High Risk Company 2"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <h2
              style={{ backgroundColor: "#f7950a" }}
              className="text-3xl font-semibold mt-5 p-2"
            >
              Experiencia Comprobable
            </h2>
            <p className="mt-3 text-2xl px-20 text-center text-pretty">
              Porque nuestro staff ha pasado los últimos 30 años en áreas de
              seguridad laboral y capacitaciones permanentes, estamos seguros
              que podemos ofrecer todo lo que sabemos. ´´Cuando hay conocimiento
              se hace notar´´{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

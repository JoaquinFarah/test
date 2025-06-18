"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const TripleRight = () => (
  <img
    src="/TripleRight.svg"
    alt="Triple Right"
    className="w-16 sm:w-20 md:w-24 h-auto align-middle"
    loading="lazy"
  />
);

const TripleLeft = () => (
  <img
    src="/TripleLeft.svg"
    alt="Triple Left"
    className="w-16 sm:w-20 md:w-24 h-auto align-middle"
    loading="lazy"
  />
);

// ⬇️ NUEVO COMPONENTE: Contador animado que se activa solo al entrar en pantalla
const AnimatedCounter = ({ end }: { end: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      {inView ? <CountUp end={end} duration={5} separator="," /> : 0}
    </div>
  );
};

// Valores actualizados: sin el "+" porque lo agregamos aparte
const stats = [
  {
    value: 7000,
    label: (
      <>
        Acciones de mejora<br />
        Gestionadas (solo en los<br />
        últimos 5 años)<br />
        Servicios de Inspección y<br />
        gestión de Acciones:<br />
        Perforación/<br />
        Workover/ Pulling &<br />
        Flush By/ Eq. Mineros/ Slik<br />
        Line/ Wire Line/ Eq. de<br />
        Cementación & Fractura
      </>
    ),
  },
  {
    value: 600,
    label: (
      <>
        Inspecciones<br />
        visuales<br />
        <b>NIVEL I</b>
      </>
    ),
  },
  {
    value: 200,
    label: (
      <>
        Inspecciones de<br />
        integridad<br />
        <b>NIVEL II</b>
      </>
    ),
  },
];

const Workwithussection = () => (
  <section className="bg-[#f7950a] text-black py-12 text-center font-sans">
    <div className="flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2 mb-6">
      <span className="hidden sm:block">
        <TripleRight />
      </span>
      <span className="bg-white text-[#111] font-bold text-2xl sm:text-3xl md:text-4xl px-4 sm:px-8 py-2 rounded shadow-md tracking-wider">
        TRABAJEMOS JUNTOS
      </span>
      <span className="hidden sm:block">
        <TripleLeft />
      </span>
    </div>

    <div className="max-w-[900px] mx-auto mb-8 px-2">
      <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
        Nuestra experiencia y compromiso nos permiten ofrecerte soluciones<br className="hidden sm:block" />
        integrales y eficientes para tu proyecto.
      </div>
      <div className="font-bold text-lg sm:text-xl md:text-2xl">
        Contáctanos y descubre cómo podemos ayudarte a alcanzar tus<br className="hidden sm:block" />
        objetivos de manera efectiva y sostenible.
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 flex-wrap mt-8 px-2">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-[#7A6A4A] text-white min-w-[180px] w-full sm:w-auto px-4 py-6 rounded shadow-md mb-2 flex flex-col items-center"
        >
          <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold mb-2 gap-1">
            <span>+</span>
            <AnimatedCounter end={stat.value} />
          </div>
          <div className="text-base sm:text-lg text-black font-normal text-center">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Workwithussection;

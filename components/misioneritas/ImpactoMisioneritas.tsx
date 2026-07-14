"use client";

import { motion } from "framer-motion";
import SafeComponent from "../icad/SafeComponent";

const HITOS = [
  {
    anio: "1956",
    texto: "Fundado en Estados Unidos.",
  },
  {
    anio: "Años 60",
    texto: "Expandido a Latinoamérica.",
  },
  {
    anio: "Hoy",
    texto:
      "Miles de grupos y líderes en varios países, consolidándose como un ministerio fundamental en las iglesias.",
  },
];

export default function ImpactoMisioneritas() {
  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#0E7BA3] mb-3">
            Su Impacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 text-[#0B1F4D]">
            Una historia de servicio
          </h2>

          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-3.75 sm:left-1/2 top-2 bottom-2 w-0.75 bg-linear-to-b from-[#5DD4EF] via-[#0E9BC7] to-[#0B1F4D] sm:-translate-x-1/2" />

            <div className="space-y-10">
              {HITOS.map((h, i) => (
                <motion.div
                  key={h.anio}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start sm:items-center gap-5 sm:gap-0 ${
                    i % 2 === 0
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse sm:text-right"
                  }`}
                >
                  {/* Punto en la línea */}
                  <div className="absolute left-0 sm:left-1/2 top-1 sm:top-1/2 w-8 h-8 -translate-x-1/2 sm:-translate-y-1/2 rounded-full bg-[#0E9BC7] ring-4 ring-[#E7F8FC] flex items-center justify-center z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>

                  <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-10">
                    <span className="inline-block text-sm font-extrabold uppercase tracking-[2px] text-[#0E9BC7] mb-1">
                      {h.anio}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{h.texto}</p>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

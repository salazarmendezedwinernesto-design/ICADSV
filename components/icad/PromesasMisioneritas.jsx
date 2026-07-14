"use client";

import { motion } from "framer-motion";
import SafeComponent from "./SafeComponent";

const PROMESAS = [
  {
    titulo: "Promesa a la Bandera Cristiana",
    texto:
      "Prometo lealtad a la bandera cristiana y al Salvador cuyo reino representa: una hermandad que une a todos los verdaderos creyentes en el servicio y en amor.",
  },
  {
    titulo: "Promesa a la Bandera de las Misioneritas",
    texto:
      "Prometo lealtad a la bandera de las Misioneritas y con la ayuda de Dios haré todo lo que pueda para mantener bien en alto los ideales de las Misioneritas, para ser fiel administradora de mi tiempo, talento y dinero, ejercer mi ministerio en favor de los demás, permanecer en Él mediante la oración y el estudio bíblico y testificar como misionerita.",
  },
  {
    titulo: "Promesa a la Biblia",
    texto:
      "Prometo lealtad a la Biblia, Santa Palabra de Dios. La constituiré en lámpara a mis pies y luz a mi camino, y atesoraré sus palabras en mi corazón, a fin de no pecar contra Dios.",
  },
];

export default function PromesasMisioneritas() {
  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#0B1F4D] relative overflow-hidden">
        {/* Textura sutil de fondo */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#5DD4EF_1px,transparent_1px)] [background-size:26px_26px]" />

        <div className="max-w-6xl mx-auto relative">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#5DD4EF] mb-3">
            Compromiso y carácter
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 sm:mb-16 text-white">
            Nuestras Promesas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROMESAS.map((p, i) => (
              <motion.div
                key={p.titulo}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-7 flex flex-col hover:border-[#5DD4EF]/50 transition-colors duration-300"
              >
                <span className="text-4xl font-extrabold text-[#5DD4EF]/40 leading-none mb-3">
                  &ldquo;
                </span>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                  {p.titulo}
                </h3>
                <p className="text-[#CFE9F2] text-sm leading-relaxed">
                  {p.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

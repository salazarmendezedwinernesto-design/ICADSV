"use client";
import { motion } from "framer-motion";
import SafeComponent from "./SafeComponent";

const CODIGO_EXPLORADORES = [
  { t: "Alerta", d: "Mental, física y espiritualmente alerta." },
  { t: "Limpio", d: "Limpio de cuerpo, de mente y de palabra." },
  { t: "Honrado", d: "No miente, no engaña, ni roba." },
  { t: "Valiente", d: "Valiente a pesar del peligro, crítica o amenazas." },
  { t: "Leal", d: "Leal a la iglesia, familia, destacamento y amigos." },
  { t: "Cortés", d: "Educado, amable y solícito en todo momento." },
  { t: "Obediente", d: "Obedece a sus padres, líderes y superiores." },
  { t: "Espiritual", d: "Ora, lee la Biblia y testifica su fe." },
];

export default function CodigoHonor() {
  return (
    <SafeComponent>
      <section className="py-24 px-8 bg-[#F9F7F2] relative overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#0B132B_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-extrabold text-[#0B132B] uppercase tracking-tighter mb-6"
            >
              Código de{" "}
              <span className="text-[#D32F2F]">Exploradores del rey</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              className="h-1.5 bg-[#D32F2F] mx-auto rounded-full"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CODIGO_EXPLORADORES.map((item, i) => (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-xl hover:border-[#D32F2F] transition-all duration-300"
              >
                {/* Indicador de número con efecto */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0B132B] text-[#F9F7F2] font-black flex items-center justify-center rounded-xl shadow-lg group-hover:bg-[#D32F2F] transition-colors">
                  0{i + 1}
                </div>

                <div className="mt-4">
                  <h3 className="text-[#0B132B] text-xl font-bold mb-3 uppercase group-hover:text-[#D32F2F] transition-colors">
                    {item.t}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.d}
                  </p>
                </div>

                {/* Detalle visual inferior */}
                <div className="mt-6 w-8 h-1 bg-gray-100 group-hover:bg-[#D32F2F] transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

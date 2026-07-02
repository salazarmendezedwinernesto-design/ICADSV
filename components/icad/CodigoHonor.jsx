"use client";
import { motion } from "framer-motion";
import SafeComponent from "./SafeComponent";

const valores = [
  { t: "Espiritual", d: "Ora, lee la Biblia, y testifica" },
  { t: "Alerta", d: "Está mentalmente, físicamente y espiritualmente alerta" },
  { t: "Limpio", d: "Es limpio de cuerpo, de mente y de palabra" },
  { t: "Honrado", d: "No miente, no engaña, ni roba" },
  { t: "Valiente", d: "Es valiente a pesar del peligro, la crítica o las amenazas" },
  { t: "Leal", d: "Es leal a su iglesia, a su familia, a su destacamento y a sus amigos" },
  { t: "Cortés", d: "Es educado, amable y solícito" },
  { t: "Obediente", d: "Obedece a sus padres, a sus líderes y a sus superiores" },
];

export default function CodigoHonor() {
  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0B1F4D]">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#F2B705] mb-3">
            Ocho puntas, ocho valores
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white">
            Código de Honor
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {valores.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 bg-white/[0.06] rounded-xl border border-white/10 hover:border-[#F2B705]/50 transition-colors"
              >
                <span className="text-[#F2B705] text-xs font-bold tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-lg text-white mt-2">{v.t}</h3>
                <p className="text-sm text-white/60 mt-1">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

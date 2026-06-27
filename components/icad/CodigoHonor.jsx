"use client";
import { motion } from "framer-motion";
import SafeComponent from "./SafeComponent";

const valores = [
  { t: "Espiritual", d: "Ora, lee la Biblia, y testifica" },
  { t: "Alerta", d: "Mental, física y espiritualmente alerta" },
  { t: "Limpio", d: "De cuerpo, de mente y de palabra" },
  { t: "Honrado", d: "No miente, no engaña, ni roba" },
  { t: "Valiente", d: "A pesar del peligro, crítica o amenazas" },
  { t: "Leal", d: "A su iglesia, familia, destacamento y amigos" },
  { t: "Cortés", d: "Educado, amable y solícito" },
  { t: "Obediente", d: "A sus padres, líderes y superiores" },
];

export default function CodigoHonor() {
  return (
    <SafeComponent>
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-500">
          Código de Honor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {valores.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-gray-800 rounded border-l-4 border-yellow-500"
            >
              <h3 className="font-bold text-yellow-500">{v.t}</h3>
              <p className="text-sm text-gray-300">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </SafeComponent>
  );
}

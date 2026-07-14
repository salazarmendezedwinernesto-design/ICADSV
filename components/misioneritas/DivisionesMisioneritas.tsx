"use client";

import { Rainbow, Flower2, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import SafeComponent from "../icad/SafeComponent";

const DIVISIONES = [
  {
    nombre: "Arco Iris",
    sub: "Párvulos",
    color: "#1FA24A",
    colorSoft: "#E7F7EC",
    Icon: Rainbow,
    descripcion:
      "Las más pequeñas del ministerio, dando sus primeros pasos en el conocimiento de Dios a través del juego y las historias bíblicas.",
  },
  {
    nombre: "Margaritas",
    sub: "Niñas más pequeñas",
    color: "#F2B705",
    colorSoft: "#FFF8E1",
    Icon: Flower2,
    descripcion:
      "Niñas que empiezan a crecer en la fe, aprendiendo valores y hábitos cristianos de forma sencilla y alegre.",
  },
  {
    nombre: "Rosas",
    sub: "Pre-adolescentes",
    color: "#EC6FA2",
    colorSoft: "#FDF0F5",
    Icon: Heart,
    descripcion:
      "Encanto y pureza en una etapa de cambios: fortalecen su identidad y su relación personal con Cristo.",
  },
  {
    nombre: "Estrellas",
    sub: "Adolescentes",
    color: "#12A9CE",
    colorSoft: "#E7F8FC",
    Icon: Star,
    descripcion:
      "Estrellas y Estrellas de Honor se preparan para el liderazgo, el servicio y el testimonio dentro de la iglesia.",
  },
];

export default function DivisionesMisioneritas() {
  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#0E7BA3] mb-3">
            Un destacamento para cada edad
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-[#0B1F4D]">
            Divisiones
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 sm:mb-16">
            Cada división tiene su propia banda de color, materiales y lema,
            acompañando a cada niña según su etapa de crecimiento.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIVISIONES.map((d, i) => (
              <motion.div
                key={d.nombre}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-black/5 overflow-hidden"
              >
                {/* Banda de color estilo insignia */}
                <div
                  className="h-2.5 w-full"
                  style={{ backgroundColor: d.color }}
                />
                <div className="p-6 flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: d.colorSoft }}
                  >
                    <d.Icon
                      size={30}
                      strokeWidth={1.75}
                      style={{ color: d.color }}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: d.color }}
                  >
                    {d.nombre}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm tracking-wide uppercase mb-3">
                    {d.sub}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {d.descripcion}
                  </p>
                </div>

                {/* Cinta lateral decorativa (sash) */}
                <div
                  className="absolute -right-8 top-10 w-28 h-3 rotate-45 opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                  style={{ backgroundColor: d.color }}
                />
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-400 mt-10 italic">
            Existen más departamentos dentro de Misioneritas; por el momento
            trabajamos con estos cuatro.
          </p>
        </div>
      </section>
    </SafeComponent>
  );
}

"use client";

import { BookOpen, HeartHandshake, Users, Heart, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import SafeComponent from "../icad/SafeComponent";

const ITEMS = [
  {
    titulo: "Enseñanza bíblica",
    descripcion: "Fundamentada en las Sagradas Escrituras.",
    color: "#B8860B",
    colorSoft: "#FDF4DC",
    Icon: BookOpen,
  },
  {
    titulo: "Compañerismo",
    descripcion: "Un ambiente de comunión y crecimiento espiritual.",
    color: "#0E9BC7",
    colorSoft: "#E7F8FC",
    Icon: HeartHandshake,
  },
  {
    titulo: "Clases para todos",
    descripcion: "Niños, adolescentes, jóvenes y adultos.",
    color: "#0B1F4D",
    colorSoft: "#E9ECF5",
    Icon: Users,
  },
  {
    titulo: "Maestros comprometidos",
    descripcion: "Dedicados a la formación cristiana.",
    color: "#C8102E",
    colorSoft: "#FBE9EC",
    Icon: Heart,
  },
  {
    titulo: "Vida diaria",
    descripcion: "Herramientas para aplicar la Palabra de Dios cada día.",
    color: "#1FA24A",
    colorSoft: "#E7F7EC",
    Icon: Sprout,
  },
];

export default function QueEncontrarasEscuelaBiblica() {
  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#B8860B] mb-3">
            Un espacio para crecer en la fe
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-[#0B1F4D]">
            ¿Qué encontrarás?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 sm:mb-16">
            Cada domingo te espera un tiempo diseñado para acercarte más a Dios
            y a Su Palabra.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-black/5 overflow-hidden"
              >
                <div
                  className="h-2.5 w-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="p-6 flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.colorSoft }}
                  >
                    <item.Icon
                      size={30}
                      strokeWidth={1.75}
                      style={{ color: item.color }}
                    />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: item.color }}
                  >
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

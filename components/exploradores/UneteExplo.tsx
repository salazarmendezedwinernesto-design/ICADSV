"use client";

import { motion } from "framer-motion";
import SafeComponent from "../icad/SafeComponent";

export default function UneteExplo() {
  const fotos = [
    "/assets/ninos/Cuervos1.jpg",
    "/assets/ninos/cuervos2.jpg",
    "/assets/ninos/cuervos3.jpg",
    "/assets/ninos/cuervos5.jpg",
    "/assets/ninos/cuervos6.jpg",
    "/assets/ninos/cuervos8.jpg",
  ];

  return (
    <SafeComponent>
      <section className="py-24 bg-[#F9F7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          {/* Lado izquierdo: Texto */}
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-extrabold text-[#0B132B] uppercase tracking-tight leading-tight">
              Únete a la <span className="text-[#D32F2F]">aventura</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-lg">
              Forma parte de Exploradores del Rey. Desarrollamos carácter,
              disciplina y propósito en cada lunes a las 6:00 PM en Iglesia
              Canaán.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#descripcion"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D32F2F] text-white font-bold uppercase tracking-wider hover:bg-[#0B132B] transition-all"
              >
                Conocer programa
              </a>
              <button className="px-8 py-4 border-2 border-[#0B132B] text-[#0B132B] font-bold uppercase tracking-wider hover:bg-[#0B132B] hover:text-white transition-all">
                WhatsApp
              </button>
            </div>
          </div>

          {/* Lado derecho: Carrusel Infinito */}
          <div className="flex-1 w-full overflow-hidden">
            <motion.div
              // AQUI ESTÁ EL CAMBIO CLAVE: Agregamos w-max
              className="flex w-max gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40, // Puedes ajustar la velocidad aquí
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...fotos, ...fotos].map((foto, i) => (
                <div
                  key={i}
                  className="shrink-0 w-72 h-96 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
                >
                  <img
                    src={foto}
                    alt={`Explorador ${i}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/300x500?text=Foto";
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

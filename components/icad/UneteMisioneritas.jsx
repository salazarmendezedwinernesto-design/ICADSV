"use client";

import { motion } from "framer-motion";
import SafeComponent from "./SafeComponent";

export default function UneteMisioneritas() {
  const fotos = [
    "/assets/ninos/misioneritas1.jpg",
    "/assets/ninos/misioneritas 3.jpeg",
    "/assets/ninos/misioneritas 4.jpeg",
    "/assets/ninos/misioneritas 5.jpeg",
    "/assets/ninos/misioneritas 6.jpeg",
    "/assets/ninos/misioneritas 7.jpeg",
    "/assets/ninos/misioneritas 8.jpeg",
  ];

  return (
    <SafeComponent>
      <section className="py-24 bg-[#F3FBFD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          {/* Lado izquierdo: Texto */}
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-extrabold text-[#0B1F4D] uppercase tracking-tight leading-tight">
              Únete a <span className="text-[#0E9BC7]">Misioneritas</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-lg">
              Forma parte de este ministerio para niñas y señoritas. Formamos
              carácter, fe y liderazgo en cada reunión en Iglesia Canaán.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#descripcion"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0E9BC7] text-white font-bold uppercase tracking-wider hover:bg-[#0B1F4D] transition-all"
              >
                Conocer programa
              </a>
              <button className="px-8 py-4 border-2 border-[#0B1F4D] text-[#0B1F4D] font-bold uppercase tracking-wider hover:bg-[#0B1F4D] hover:text-white transition-all">
                WhatsApp
              </button>
            </div>
          </div>

          {/* Lado derecho: Carrusel Infinito */}
          <div className="flex-1 w-full overflow-hidden">
            <motion.div
              className="flex w-max gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...fotos, ...fotos].map((foto, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-72 h-96 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500 ring-2 ring-[#5DD4EF]/30"
                >
                  <img
                    src={foto}
                    alt={`Misionerita ${i}`}
                    className="w-full h-full object-cover"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/300x500?text=Foto")
                    }
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

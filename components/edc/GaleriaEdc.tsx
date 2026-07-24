"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SafeComponent from "../icad/SafeComponent";

// NOTA: por ahora solo existe una foto de jóvenes en /public/assets/jovenes_2.jpg.
// Cuando agregues más fotos (ej: en /public/assets/jovenes/), súmalas a este
// arreglo (ej: "/assets/jovenes/edc1.jpg") para variar la galería.
const FOTOS = [
  "/assets/jovenes/jovenes 1.jpg",
  "/assets/jovenes/jovenes 2.jpg",
  "/assets/jovenes/jovenes 3.jpg",
  "/assets/jovenes/jovenes 4.jpg",
  "/assets/jovenes/Jovenes 5.jpg",
  "/assets/jovenes/jovenes 6.jpg",
  "/assets/jovenes/jovenes 7.jpg",
  "/assets/jovenes/jovenes 9.jpg",
  "/assets/jovenes/jovenes 10.jpg",
  "/assets/jovenes/jovenes 12.jpg",
];

export default function GaleriaEdc() {
  const t = useTranslations("app.edc.galeria");
  return (
    <SafeComponent>
      <section
        id="galeria"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#F8F9FA]"
      >
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#085FE1] mb-3">
            {t("kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-[#251E40]">
            {t("titulo")}
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 sm:mb-16">
            {t("parrafo")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {FOTOS.map((foto, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 ${
                  i % 5 === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={foto}
                  alt={t("fotoAlt")}
                  className="w-full h-full min-h-40 sm:min-h-52 object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400?text=Jovenes+ICAD";
                  }}
                />
                <div className="absolute inset-0 bg-[#251E40]/0 hover:bg-[#251E40]/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

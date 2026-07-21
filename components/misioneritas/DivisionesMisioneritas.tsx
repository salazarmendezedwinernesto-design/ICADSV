"use client";

import { Rainbow, Flower2, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SafeComponent from "../icad/SafeComponent";

const DIVISIONES = [
  {
    key: "arcoIris",
    color: "#1FA24A",
    colorSoft: "#E7F7EC",
    Icon: Rainbow,
  },
  {
    key: "margaritas",
    color: "#F2B705",
    colorSoft: "#FFF8E1",
    Icon: Flower2,
  },
  {
    key: "rosas",
    color: "#EC6FA2",
    colorSoft: "#FDF0F5",
    Icon: Heart,
  },
  {
    key: "estrellas",
    color: "#12A9CE",
    colorSoft: "#E7F8FC",
    Icon: Star,
  },
] as const;

export default function DivisionesMisioneritas() {
  const t = useTranslations("app.misioneritas.divisiones");
  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#0E7BA3] mb-3">
            {t("kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-[#0B1F4D]">
            {t("titulo")}
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 sm:mb-16">
            {t("parrafo")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIVISIONES.map((d, i) => (
              <motion.div
                key={d.key}
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
                    {t(`items.${d.key}.nombre`)}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm tracking-wide uppercase mb-3">
                    {t(`items.${d.key}.sub`)}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`items.${d.key}.descripcion`)}
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
            {t("notaFinal")}
          </p>
        </div>
      </section>
    </SafeComponent>
  );
}

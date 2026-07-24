"use client";

import { Baby, Backpack, Users, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SafeComponent from "../icad/SafeComponent";

// Azul corporativo, Rojo, Dorado y Negro: uno por cada grupo de edad.
const GRUPOS = [
  { key: "ninos", color: "#0B1F4D", colorSoft: "#E9ECF5", Icon: Baby },
  {
    key: "adolescentes",
    color: "#C8102E",
    colorSoft: "#FBE9EC",
    Icon: Backpack,
  },
  { key: "jovenes", color: "#B8860B", colorSoft: "#FDF4DC", Icon: Users },
  { key: "adultos", color: "#111111", colorSoft: "#EFEFEF", Icon: UserRound },
] as const;

export default function ClasesPorEdadEscuelaBiblica() {
  const t = useTranslations("app.escuelaBiblica.clasesPorEdad");

  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#FDFAF0] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#B8860B] mb-3">
            {t("kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-[#0B1F4D]">
            {t("titulo")}
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 sm:mb-16">
            {t("subtitulo")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GRUPOS.map((grupo, i) => (
              <motion.div
                key={grupo.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 border border-black/5 overflow-hidden p-6 flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: grupo.colorSoft }}
                >
                  <grupo.Icon
                    size={30}
                    strokeWidth={1.75}
                    style={{ color: grupo.color }}
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 text-[#0B1F4D]">
                  {t(`grupos.${grupo.key}.nombre`)}
                </h3>
                <span
                  className="inline-block text-xs font-bold tracking-wide uppercase mb-3 px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: grupo.colorSoft,
                    color: grupo.color,
                  }}
                >
                  {t(`grupos.${grupo.key}.edad`)}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t(`grupos.${grupo.key}.descripcion`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

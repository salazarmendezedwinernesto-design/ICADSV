"use client";

import { BookOpen, HeartHandshake, Users, Heart, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SafeComponent from "../icad/SafeComponent";

// Paleta corporativa: Azul (fidelidad/verdad), Rojo (sangre de Cristo/fuego del
// Espíritu), Dorado (luz de Cristo/gloria de Dios), Negro (usado con moderación).
const ITEMS = [
  { key: "ensenanza", color: "#0B1F4D", colorSoft: "#E9ECF5", Icon: BookOpen },
  {
    key: "companerismo",
    color: "#B8860B",
    colorSoft: "#FDF4DC",
    Icon: HeartHandshake,
  },
  {
    key: "clasesParaTodos",
    color: "#C8102E",
    colorSoft: "#FBE9EC",
    Icon: Users,
  },
  { key: "maestros", color: "#0B1F4D", colorSoft: "#E9ECF5", Icon: Heart },
  { key: "vidaDiaria", color: "#B8860B", colorSoft: "#FDF4DC", Icon: Sprout },
] as const;

export default function QueEncontrarasEscuelaBiblica() {
  const t = useTranslations("app.escuelaBiblica.queEncontraras");

  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.key}
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
                    {t(`items.${item.key}.titulo`)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`items.${item.key}.descripcion`)}
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

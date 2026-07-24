"use client";

import { Flame, BookOpen, Tent, Users, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SafeComponent from "../icad/SafeComponent";

const ACTIVIDADES = [
  { key: "cultosJuveniles", Icon: Flame },
  { key: "estudiosBiblicos", Icon: BookOpen },
  { key: "campamentos", Icon: Tent },
  { key: "convivios", Icon: Users },
] as const;

export default function ActividadesEdc() {
  const t = useTranslations("app.edc.actividades");
  return (
    <SafeComponent>
      <section
        id="actividades"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#251E40] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#8ED1FC] mb-3">
            {t("kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-white">
            {t("titulo")}
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12 sm:mb-16">
            {t("parrafo")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVIDADES.map((a, i) => (
              <motion.div
                key={a.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                <div className="h-2.5 w-full bg-[#085FE1]" />
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[#E9F2FE] transition-transform duration-300 group-hover:scale-110">
                    <a.Icon
                      size={30}
                      strokeWidth={1.75}
                      className="text-[#085FE1]"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#251E40]">
                    {t(`items.${a.key}.nombre`)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`items.${a.key}.descripcion`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-white/50 mt-10 italic">
            {t("notaFinal")}
          </p>
        </div>
      </section>
    </SafeComponent>
  );
}

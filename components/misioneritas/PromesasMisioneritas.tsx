"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SafeComponent from "../icad/SafeComponent";

const PROMESA_KEYS = [
  "banderaCristiana",
  "banderaMisioneritas",
  "biblia",
] as const;

export default function PromesasMisioneritas() {
  const t = useTranslations("app.misioneritas.promesas");
  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#0B1F4D] relative overflow-hidden">
        {/* Textura sutil de fondo */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#5DD4EF_1px,transparent_1px)] [bg-size:26px_26px]" />

        <div className="max-w-6xl mx-auto relative">
          <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#5DD4EF] mb-3">
            {t("kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 sm:mb-16 text-white">
            {t("titulo")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROMESA_KEYS.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-7 flex flex-col hover:border-[#5DD4EF]/50 transition-colors duration-300"
              >
                <span className="text-4xl font-extrabold text-[#5DD4EF]/40 leading-none mb-3">
                  &ldquo;
                </span>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                  {t(`items.${key}.titulo`)}
                </h3>
                <p className="text-[#CFE9F2] text-sm leading-relaxed">
                  {t(`items.${key}.texto`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

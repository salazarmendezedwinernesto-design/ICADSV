"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function VersiculoEscuelaBiblica() {
  const t = useTranslations("app.escuelaBiblica.versiculo");

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FDFAF0]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#B8860B] mb-3">
          {t("kicker")}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-[#0B1F4D]">
          {t("titulo")}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-[#F2B705]/20 px-6 sm:px-10 py-8 sm:py-10"
        >
          <p className="text-lg sm:text-2xl text-gray-700 italic leading-relaxed">
            &ldquo;{t("texto")}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

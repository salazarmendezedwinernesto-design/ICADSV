"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SafeComponent from "../icad/SafeComponent";

export default function HeroEscuelaBiblica() {
  const t = useTranslations("app.escuelaBiblica.hero");

  return (
    <SafeComponent>
      <section
        id="descripcion"
        className="bg-[#FDFAF0] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#B8860B] mb-3">
              {t("kicker")}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#0B1F4D] leading-tight">
              {t("titulo")}{" "}
              <span className="text-[#B8860B]">{t("tituloResaltado")}</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
              {t("parrafo1")}
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-700">
              {t("parrafo2")}
            </p>

            {/* Cita bíblica integrada en la descripción */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative border-l-4 border-[#C8102E] bg-[#0B1F4D] rounded-r-xl px-6 py-5 shadow-md"
            >
              <p className="text-base sm:text-lg text-white italic leading-relaxed">
                &ldquo;{t("cita")}&rdquo;
              </p>
              <span className="block mt-3 text-xs sm:text-sm font-bold tracking-[3px] uppercase text-[#ffffff]">
                {t("citaReferencia")}
              </span>
            </motion.div>
          </motion.div>

          {/* Foto real del ministerio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#ffffff]" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/assets/ninos/maestros.jpeg"
                alt={t("fotoAlt")}
                width={900}
                height={700}
                className="w-full h-70 sm:h-90 md:h-105 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-[#0B1F4D]/85 to-transparent px-5 py-4">
                <p className="text-white text-sm sm:text-base font-medium">
                  {t("fotoCaption")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SafeComponent>
  );
}

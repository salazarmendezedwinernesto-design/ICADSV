"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import SafeComponent from "../icad/SafeComponent";

export default function UneteEdc() {
  const t = useTranslations("app.edc.unete");
  return (
    <SafeComponent>
      <section
        id="unete"
        className="py-20 sm:py-24 bg-[#085FE1] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Texto */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
              {t("titulo")}{" "}
              <span className="text-[#FFC107]">{t("tituloResaltado")}</span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
              {t("parrafo")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#quienes-somos"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC107] text-[#251E40] font-bold uppercase tracking-wider hover:bg-white transition-all"
              >
                {t("btnConocerPrograma")}
              </a>
              <a
                href="https://www.instagram.com/jovenes_icad?igsh=MTdoZDcyeHIxbmV3aw=="
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#085FE1] transition-all"
              >
                {t("btnInsta")}
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex-1 relative w-full max-w-md">
            <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[#FFC107]" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <Image
                src="/assets/jovenes/jovenes 8.jpg"
                alt={t("tituloResaltado")}
                width={700}
                height={700}
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

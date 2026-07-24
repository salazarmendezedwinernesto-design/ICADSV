"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function BannerEdc() {
  const t = useTranslations("app.edc.banner");
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/iglesia.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Texto superior */}
        <span className="mb-6 text-sm md:text-lg tracking-[8px] text-white uppercase font-medium">
          {t("kicker")}
        </span>

        {/* Logo principal: Embajadores de Cristo, centrado */}
        <Image
          src="/assets/ministries/edc.png"
          alt="Logo Iglesia Canaán"
          width={600}
          height={600}
          sizes="(max-width: 600px) 8rem, (max-width: 768px) 12rem, (max-width: 1024px) 14rem, 16rem"
          preload
          className="w-32 sm:w-40 md:w-44 lg:w-52 xl:w-60 h-auto"
        />

        {/* Botón estilo Ultimex */}
        <a
          href="#quienes-somos"
          className="group relative mt-10 inline-flex items-center justify-center px-10 py-4 text-sm md:text-base uppercase tracking-[3px] text-white"
        >
          {/* Esquina superior izquierda */}
          <span className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-white transition-all duration-300 group-hover:w-8 group-hover:h-8"></span>

          {/* Esquina inferior derecha */}
          <span className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-white transition-all duration-300 group-hover:w-8 group-hover:h-8"></span>

          <span className="relative z-10">{t("saberMas")}</span>
        </a>
      </div>
    </section>
  );
}

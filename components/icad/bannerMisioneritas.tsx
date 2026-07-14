"use client";

import Image from "next/image";

export function BannerMisioneritas() {
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
          Bienvenidas
        </span>

        {/* Logo principal: Misioneritas, centrado */}
        <div className="relative">
          <Image
            src="/assets/ministries/Misioneritas.png"
            alt="Logo Misioneritas"
            width={800}
            height={800}
            sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, 14rem"
            className="relative h-auto w-[7rem] sm:w-[9rem] md:w-[11rem] lg:w-[13rem] xl:w-[15rem] drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          />
        </div>

        {/* Línea decorativa celeste */}
        <div className="mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-transparent via-[#5DD4EF] to-transparent" />

        {/* Botón estilo blanco */}
        <a
          href="#descripcion"
          className="group relative mt-10 inline-flex items-center justify-center px-10 py-4 text-sm md:text-base uppercase tracking-[3px] text-white"
        >
          {/* Esquina superior izquierda */}
          <span className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-white transition-all duration-300 group-hover:w-8 group-hover:h-8"></span>

          {/* Esquina inferior derecha */}
          <span className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-white transition-all duration-300 group-hover:w-8 group-hover:h-8"></span>

          <span className="relative z-10">SABER MÁS</span>
        </a>
      </div>
    </section>
  );
}

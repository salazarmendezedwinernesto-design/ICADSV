"use client";

import Image from "next/image";

export function BannerEscuelaBiblica() {
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
          Bienvenidos
        </span>

        {/* Logo principal: Escuela Bíblica Dominical, centrado */}
        <Image
          src="/assets/ministries/escuela-biblica.png"
          alt="Logo Escuela Bíblica Dominical"
          width={800}
          height={800}
          sizes="(max-width: 640px) 10rem, (max-width: 768px) 13rem, (max-width: 1024px) 18rem, 20rem"
          className="w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80 h-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
        />

        {/* Botón estilo Ultimex */}
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

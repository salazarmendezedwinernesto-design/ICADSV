"use client";

import Image from "next/image";
import Link from "next/link";

export function Banner() {
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
        <span className="mb-6 text-sm md:text-lg tracking-[8px] text-white uppercase">
          Bienvenidos
        </span>

        {/* Logo principal (enlazado a /explopage) */}
        <Link href="/explopage" aria-label="Ir a Explopage">
          <Image
            src="/assets/ministries/exploradores.png"
            alt="Logo Exploradores"
            width={1000}
            height={1000}
            priority
            className="
    w-40
    sm:w-52
    md:w-72
    lg:w-96
    xl:w-[200px]
    h-auto
  "
          />
        </Link>

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

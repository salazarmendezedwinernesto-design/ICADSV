"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import SafeComponent from "../icad/SafeComponent";

// Reemplaza estas rutas por las fotos reales de la Escuela Bíblica.
// Colócalas, por ejemplo, en /public/assets/escuela-biblica/
const FOTOS = [
  { key: "foto1", src: "/assets/ninos/escuela1.jpeg" },
  { key: "foto2", src: "/assets/ninos/escuela2.jpeg" },
  { key: "foto3", src: "/assets/ninos/escuela3.jpeg" },
  { key: "foto4", src: "/assets/ninos/escuela4.jpeg" },
  { key: "foto5", src: "/assets/ninos/escuela5.jpeg" },
  { key: "foto6", src: "/assets/ninos/escuela7.jpeg" },
  { key: "foto7", src: "/assets/ninos/escuela8.jpeg" },
  { key: "foto8", src: "/assets/ninos/escuela9.jpeg" },
  { key: "foto9", src: "/assets/ninos/escuela10.jpeg" },
  { key: "foto10", src: "/assets/ninos/escuela11.jpeg" },
  { key: "foto11", src: "/assets/ninos/escuela12.jpeg" },
  { key: "foto12", src: "/assets/ninos/escuela13.jpeg" },
  { key: "foto13", src: "/assets/ninos/escuela14.jpeg" },
  { key: "foto14", src: "/assets/ninos/escuela15.jpeg" },
  { key: "foto15", src: "/assets/ninos/escuela16.jpeg" },
  { key: "foto16", src: "/assets/ninos/escuela17.jpeg" },
  { key: "foto17", src: "/assets/ninos/escuela18.jpeg" },
] as const;

type Foto = (typeof FOTOS)[number];

// Texto alternativo por defecto si falta la clave de traducción para una foto puntual.
const ALT_FALLBACK = "Foto de la Escuela Bíblica";

// Obtiene el alt de forma segura: si la clave no existe en el archivo de
// traducciones, en vez de tronar la página (MISSING_MESSAGE) usa un texto genérico.
function getSafeAlt(
  t: ReturnType<typeof useTranslations>,
  key: string,
): string {
  // Importante: comprobamos con t.has() ANTES de pedir la traducción.
  // Si llamamos directo a t(key) cuando falta la clave, next-intl igual
  // hace un console.error interno (aunque no lance excepción), y Next.js
  // en desarrollo lo muestra como error en pantalla. t.has() evita eso.
  if (!t.has(key)) return ALT_FALLBACK;
  const value = t(key);
  return value || ALT_FALLBACK;
}

function FilaFotos({
  fotos,
  direccion,
  duracion,
  onOpen,
}: {
  fotos: Foto[];
  direccion: "left" | "right";
  duracion: number;
  onOpen: (key: string) => void;
}) {
  const t = useTranslations("app.escuelaBiblica.galeria");
  // Se duplica el arreglo para lograr el loop infinito sin cortes
  const duplicadas = [...fotos, ...fotos];
  const animClass =
    direccion === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-4 sm:gap-5 w-max ${animClass} hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duracion}s` }}
      >
        {duplicadas.map((foto, i) => (
          <button
            key={`${foto.key}-${i}`}
            type="button"
            onClick={() => onOpen(foto.key)}
            className={`group relative shrink-0 w-56 h-40 sm:w-72 sm:h-52 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 hover:ring-[#F2B705] hover:z-10 ${
              i % 2 === 0
                ? "hover:-rotate-1 hover:scale-105"
                : "hover:rotate-1 hover:scale-105"
            }`}
          >
            <Image
              src={foto.src}
              alt={getSafeAlt(t, `fotos.${foto.key}.alt`)}
              fill
              sizes="(max-width: 640px) 60vw, 300px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1F4D]/90 via-[#0B1F4D]/10 to-transparent opacity-0 transition-opacity duration-300" />
            <div className="absolute top-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Expand size={13} />
            </div>
          </button>
        ))}
      </div>
      {/* Degradados laterales para disimular el corte del scroll */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-[#0B1F4D] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-[#0B1F4D] to-transparent" />
    </div>
  );
}

export default function GaleriaEscuelaBiblica() {
  const t = useTranslations("app.escuelaBiblica.galeria");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const total = FOTOS.length;
  const activeIndex = activeKey
    ? FOTOS.findIndex((f) => f.key === activeKey)
    : -1;
  const isOpen = activeIndex !== -1;

  const close = useCallback(() => setActiveKey(null), []);

  const next = useCallback(() => {
    setActiveKey((prev) => {
      if (!prev) return prev;
      const i = FOTOS.findIndex((f) => f.key === prev);
      return FOTOS[(i + 1) % total].key;
    });
  }, [total]);

  const prev = useCallback(() => {
    setActiveKey((prevKey) => {
      if (!prevKey) return prevKey;
      const i = FOTOS.findIndex((f) => f.key === prevKey);
      return FOTOS[(i - 1 + total) % total].key;
    });
  }, [total]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  // Se reparten TODAS las fotos entre las dos filas (antes solo se usaban 6 de 17)
  const mitad = Math.ceil(FOTOS.length / 2);
  const filaSuperior = FOTOS.slice(0, mitad);
  const filaInferior = FOTOS.slice(mitad);
  const activeFoto = isOpen ? FOTOS[activeIndex] : null;

  return (
    <SafeComponent>
      <style jsx global>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation-name: marquee-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-marquee-right {
          animation-name: marquee-right;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>
      <section className="py-16 sm:py-20 md:py-24 bg-[#0B1F4D] relative overflow-hidden">
        {/* Textura y acentos de fondo */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#F2B705_1px,transparent_1px)] [bg-size:26px_26px]" />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#F2B705]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#C8102E]/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#F2B705] mb-3">
              <Sparkles size={14} className="shrink-0" />
              {t("kicker")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              {t("titulo")}
            </h2>
            <p className="text-[#CFD6E8] max-w-2xl mx-auto">{t("subtitulo")}</p>
          </motion.div>
        </div>

        {/* Muro de fotos con scroll infinito, a todo lo ancho */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 sm:space-y-5"
        >
          <FilaFotos
            fotos={[...filaSuperior]}
            direccion="left"
            duracion={60}
            onOpen={setActiveKey}
          />
          <FilaFotos
            fotos={[...filaInferior]}
            direccion="right"
            duracion={60}
            onOpen={setActiveKey}
          />
        </motion.div>

        <p className="text-center text-white/40 text-xs mt-8 tracking-wide">
          Toca cualquier foto para verla en grande
        </p>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && activeFoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4 py-8"
            onClick={close}
          >
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-bold tracking-wider text-white bg-white/10 border border-white/15 rounded-full px-4 py-1.5">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </div>

            <button
              type="button"
              aria-label="Cerrar"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-[#C8102E] border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              aria-label="Anterior"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#C8102E] border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              key={activeFoto.key}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[70vh] rounded-xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src={activeFoto.src}
                  alt={getSafeAlt(t, `fotos.${activeFoto.key}.alt`)}
                  fill
                  sizes="90vw"
                  className="object-contain bg-black"
                />
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Siguiente"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#C8102E] border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </SafeComponent>
  );
}

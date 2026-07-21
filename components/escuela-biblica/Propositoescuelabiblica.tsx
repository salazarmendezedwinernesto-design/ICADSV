"use client";

import { motion } from "framer-motion";
import SafeComponent from "../icad/SafeComponent";

export default function PropositoEscuelaBiblica() {
  return (
    <SafeComponent>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#0B1F4D] relative overflow-hidden">
        {/* Textura sutil de fondo */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#F2B705_1px,transparent_1px)] [bg-size:26px_26px]" />

        <div className="max-w-4xl mx-auto relative text-center">
          <span className="block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#F2B705] mb-3">
            Nuestro propósito
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-white">
            Conocer la Biblia transforma vidas
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl px-6 sm:px-10 py-8 sm:py-10"
          >
            <p className="text-base sm:text-lg text-[#CFE9F2] leading-relaxed">
              Por eso, la Escuela Bíblica Dominical busca formar discípulos que
              amen a Dios, sirvan con fidelidad y reflejen a Cristo en su
              familia, su iglesia y su comunidad.
            </p>
          </motion.div>
        </div>
      </section>
    </SafeComponent>
  );
}

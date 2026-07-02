export default function UneteExplo() {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-[#0B1F4D] overflow-hidden">
      {/* Franja decorativa con los colores del logo */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C8102E] via-[#F2B705] to-[#1E3A8A]" />

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Únete a la <span className="text-[#F2B705]">aventura</span>
        </h2>
        <p className="text-white/70 text-base sm:text-lg mb-8">
          Tu hijo o hija puede ser parte de Exploradores del Rey. Nos
          reunimos todos los lunes a las 6:00 PM en el templo de Iglesia
          Canaán.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#descripcion"
            className="px-8 py-3.5 rounded-full bg-[#F2B705] text-[#0B1F4D] font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors"
          >
            Conocer el programa
          </a>
          <a
            href="https://wa.me/50324072518"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-bold text-sm uppercase tracking-wide hover:border-[#F2B705] hover:text-[#F2B705] transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

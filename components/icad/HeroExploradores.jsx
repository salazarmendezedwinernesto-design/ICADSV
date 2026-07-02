import Image from "next/image";

export default function HeroExploradores() {
  return (
    <section
      id="descripcion"
      className="bg-[#F8F5EC] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Texto */}
        <div>
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#C8102E] mb-3">
            Ministerio de Nuevas Generaciones
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#0B1F4D] leading-tight">
            Exploradores <span className="text-[#C8102E]">del Rey</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
            Ministerio internacional de las Asambleas de Dios, dedicado a
            evangelizar, equipar y empoderar a la próxima generación.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Formamos el carácter mediante disciplina, responsabilidad y
            valores bíblicos desde 1962, acompañando a cada niño y joven en su
            camino de fe.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 px-5 py-4">
            <span className="text-2xl font-extrabold text-[#C8102E] leading-none">
              &ldquo;
            </span>
            <p className="text-sm sm:text-base text-[#0B1F4D] italic leading-relaxed">
              ¡Preparado para todo! Preparado para trabajar, jugar, servir,
              adorar, vivir y obedecer a la palabra de Dios.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/15">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
              <span className="text-sm font-semibold text-[#0B1F4D]">
                Desde 1962
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8102E]/5 border border-[#C8102E]/15">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
              <span className="text-sm font-semibold text-[#0B1F4D]">
                Asambleas de Dios
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2B705]/10 border border-[#F2B705]/30">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F2B705]" />
              <span className="text-sm font-semibold text-[#0B1F4D]">
                Lunes, 6:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Foto real del ministerio */}
        <div className="relative">
          <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#F2B705]" />
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/assets/cuervos3.jpg"
              alt="Niños y líderes de Exploradores del Rey en un culto de Nuevas Generaciones"
              width={900}
              height={700}
              className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1F4D]/80 to-transparent px-5 py-4">
              <p className="text-white text-sm sm:text-base font-medium">
                Culto de Nuevas Generaciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

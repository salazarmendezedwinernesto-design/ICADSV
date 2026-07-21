import Image from "next/image";

export default function HeroEscuelaBiblica() {
  return (
    <section
      id="descripcion"
      className="bg-[#FDFAF0] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Texto */}
        <div>
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#B8860B] mb-3">
            Ministerio de Enseñanza Bíblica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#0B1F4D] leading-tight">
            Escuela Bíblica <span className="text-[#F2B705]">Dominical</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
            La Escuela Bíblica Dominical es un ministerio dedicado a la
            enseñanza de la Biblia para todas las edades. Cada domingo
            compartimos un tiempo de aprendizaje, comunión y crecimiento
            espiritual, donde niños, adolescentes, jóvenes y adultos
            fortalecen su fe a través del estudio de las Sagradas Escrituras.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Nuestro deseo es que cada persona conozca más a Dios, viva
            conforme a Su Palabra y desarrolle una relación firme con
            Jesucristo.
          </p>
        </div>

        {/* Foto real del ministerio */}
        <div className="relative">
          <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#F2B705]" />
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/assets/ninos/Cuervos1.jpg"
              alt="Clase de la Escuela Bíblica Dominical en la iglesia"
              width={900}
              height={700}
              className="w-full h-70 sm:h-90 md:h-105 object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-[#0B1F4D]/80 to-transparent px-5 py-4">
              <p className="text-white text-sm sm:text-base font-medium">
                Clase de la Escuela Bíblica Dominical
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
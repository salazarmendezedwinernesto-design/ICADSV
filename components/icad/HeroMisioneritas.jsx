import Image from "next/image";

const OBJETIVOS = [
  "Ganar a niñas y jóvenes para Cristo.",
  "Enseñar la Biblia y establecer bases sólidas en la fe.",
  "Promover valores como bondad, servicio, amor y testimonio.",
  "Prepararlas para servir en la misión y liderazgo cristiano.",
];

export default function HeroMisioneritas() {
  return (
    <section
      id="descripcion"
      className="bg-[#F3FBFD] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Texto */}
        <div>
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#0E7BA3] mb-3">
            Ministerio de Nuevas Generaciones
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#0B1F4D] leading-tight">
            ¿Qué es <span className="text-[#0E9BC7]">Misioneritas</span>?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
            Misioneritas es un ministerio cristiano de las Asambleas de Dios
            que busca formar y discipular a niñas, adolescentes y señoritas
            en la Palabra de Dios.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Su propósito es guiarlas en un crecimiento integral —espiritual,
            físico, mental y social— para que sean testigos de Cristo y
            líderes en sus iglesias.
          </p>

          <div className="mt-8">
            <h3 className="text-sm font-bold tracking-[3px] uppercase text-[#0B1F4D] mb-4">
              Objetivos
            </h3>
            <ul className="space-y-3">
              {OBJETIVOS.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0E9BC7] shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Foto real del ministerio */}
        <div className="relative">
          <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#5DD4EF]" />
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/assets/ninos/misioneritas1.jpg"
              alt="Niñas y líderes de Misioneritas en una actividad de la iglesia"
              width={900}
              height={700}
              className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1F4D]/80 to-transparent px-5 py-4">
              <p className="text-white text-sm sm:text-base font-medium">
                Actividad de Misioneritas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

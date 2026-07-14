import Image from "next/image";

export default function ProgramaEdades() {
  const grupos = [
    {
      nombre: "Navegantes",
      edad: "5 a 7 años",
      color: "#1E3A8A",
      logo: "/assets/programas/navegantes.png",
      descripcion:
        "Programa semanal con un efecto profundo en los más pequeños: son la base, son el fudamentos, navegantes en su mejor momento.",
    },
    {
      nombre: "Pioneros",
      edad: "8 a 10 años",
      color: "#C8102E",
      logo: "/assets/programas/pioneros.png",
      descripcion:
        "Empiezan a interesarse por las actividades al aire libre: caminatas, campamentos y exploración.",
    },
    {
      nombre: "Seguidores de la Senda",
      edad: "11 a 13 años",
      color: "#F2B705",
      logo: "/assets/programas/seguidores-senda.png",
      descripcion:
        "Acompañamos una etapa de muchos cambios con evangelización, enseñanza y recreación.",
    },
    {
      nombre: "Exploradores",
      edad: "14 a 17 años",
      color: "#0B1F4D",
      logo: "/assets/programas/exploradores.png",
      descripcion:
        "Crecimiento personal y liderazgo a través de retos de acción, servicio cristiano y vida al aire libre.",
    },
    {
      nombre: "Señoritas",
      edad: "5 a 17 años",
      color: "#C8102E",
      logo: "/assets/programas/senoritas.png",
      descripcion:
        "Las niñas y jóvenes participan con las mismas posibilidades y derechos, según su edad cronológica.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F8F5EC]">
      <div className="max-w-6xl mx-auto">
        <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#C8102E] mb-3">
          Un departamento para cada edad
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-[#0B1F4D]">
          Programa por Edades
        </h2>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {grupos.map((g, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-white w-64 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-black/5 flex flex-col items-center text-center"
              style={{ borderTopWidth: "4px", borderTopColor: g.color }}
            >
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src={g.logo}
                  alt={`Logo ${g.nombre}`}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ color: g.color }}>
                {g.nombre}
              </h3>
              <p className="text-gray-500 text-sm tracking-wide uppercase mb-3">
                {g.edad}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {g.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

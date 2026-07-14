import Image from "next/image";

export default function SignificadoEmblema() {
  const puntos = [
    {
      color: "#F2B705",
      titulo: "4 puntos dorados",
      texto:
        "Representan los cuatro aspectos del crecimiento del joven: físico, espiritual, mental y social.",
    },
    {
      color: "#C8102E",
      titulo: "4 puntos rojos",
      texto:
        "Representan las cuatro enseñanzas principales de la Iglesia: Salvación, Bautismo en el Espíritu Santo, Sanidad divina y Segunda Venida.",
    },
    {
      color: "#1E3A8A",
      titulo: "8 puntos azules",
      texto:
        "Representan el Código de los Exploradores del Rey: alerta, limpio, honrado, valiente, leal, cortés y obediente, espiritual.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex justify-center order-1 md:order-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            <Image
              src="/assets/ministries/exploradores.png"
              alt="Brújula del emblema de Exploradores del Rey"
              fill
              className="object-contain"
              sizes="256px"
            />
          </div>
        </div>

        <div>
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#C8102E] mb-3">
            Significado del Emblema
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#0B1F4D] leading-tight">
            Una brújula que apunta a Cristo
          </h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            El diseño está basado en los puntos cardinales, para recordarnos
            dirigir siempre nuestra atención a Jesús.
          </p>

          <div className="space-y-5">
            {puntos.map((p, i) => (
              <div key={i} className="flex gap-4">
                <span
                  className="mt-1 w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: p.color }}
                />
                <div>
                  <h3 className="font-bold text-[#0B1F4D]">{p.titulo}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

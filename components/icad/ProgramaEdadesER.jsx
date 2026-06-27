export default function ProgramaEdades() {
  const grupos = [
    { nombre: "Navegantes", edad: "5 a 7 años" },
    { nombre: "Pioneros", edad: "8 a 10 años" },
    { nombre: "Seguidores de la Senda", edad: "11 a 13 años" },
    { nombre: "Exploradores", edad: "14 a 17 años" },
    { nombre: "Señoritas", edad: "5 a 17 años" },
  ];

  return (
    <section className="py-16 bg-black text-center px-6">
      <h2 className="text-3xl font-bold mb-10">Programa por Edades</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {grupos.map((g, i) => (
          <div key={i} className="p-6 border border-yellow-500 rounded-lg w-60">
            <h3 className="text-xl font-bold text-yellow-500">{g.nombre}</h3>
            <p className="text-gray-400">{g.edad}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

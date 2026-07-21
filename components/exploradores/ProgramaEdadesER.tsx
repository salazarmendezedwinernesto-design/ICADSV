import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProgramaEdades() {
  const t = useTranslations("app.explopage.programaEdades");
  const grupos = [
    {
      key: "navegantes",
      color: "#1E3A8A",
      logo: "/assets/programas/navegantes.png",
    },
    {
      key: "pioneros",
      color: "#C8102E",
      logo: "/assets/programas/pioneros.png",
    },
    {
      key: "seguidoresDeLaSenda",
      color: "#F2B705",
      logo: "/assets/programas/seguidores-senda.png",
    },
    {
      key: "exploradores",
      color: "#0B1F4D",
      logo: "/assets/programas/exploradores.png",
    },
    {
      key: "senoritas",
      color: "#C8102E",
      logo: "/assets/programas/senoritas.png",
    },
  ] as const;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F8F5EC]">
      <div className="max-w-6xl mx-auto">
        <span className="block text-center text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#C8102E] mb-3">
          {t("kicker")}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-[#0B1F4D]">
          {t("titulo")}
        </h2>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {grupos.map((g) => (
            <div
              key={g.key}
              className="group p-6 rounded-xl bg-white w-64 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-black/5 flex flex-col items-center text-center"
              style={{ borderTopWidth: "4px", borderTopColor: g.color }}
            >
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src={g.logo}
                  alt={t(`grupos.${g.key}.nombre`)}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ color: g.color }}>
                {t(`grupos.${g.key}.nombre`)}
              </h3>
              <p className="text-gray-500 text-sm tracking-wide uppercase mb-3">
                {t(`grupos.${g.key}.edad`)}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t(`grupos.${g.key}.descripcion`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

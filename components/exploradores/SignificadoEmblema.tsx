import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SignificadoEmblema() {
  const t = useTranslations("app.explopage.significadoEmblema");
  const puntos = [
    { key: "dorados", color: "#F2B705" },
    { key: "rojos", color: "#C8102E" },
    { key: "azules", color: "#1E3A8A" },
  ] as const;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex justify-center order-1 md:order-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64">
            <Image
              src="/assets/ministries/exploradores.png"
              alt={t("fotoAlt")}
              fill
              className="object-contain"
              sizes="256px"
            />
          </div>
        </div>

        <div>
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#C8102E] mb-3">
            {t("kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#0B1F4D] leading-tight">
            {t("titulo")}
          </h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            {t("parrafo")}
          </p>

          <div className="space-y-5">
            {puntos.map((p) => (
              <div key={p.key} className="flex gap-4">
                <span
                  className="mt-1 w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: p.color }}
                />
                <div>
                  <h3 className="font-bold text-[#0B1F4D]">
                    {t(`puntos.${p.key}.titulo`)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`puntos.${p.key}.texto`)}
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

import { useTranslations } from "next-intl";

export default function CodigoLemaMisioneritas() {
  const t = useTranslations("app.misioneritas.codigoLema");
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F3FBFD]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#0E7BA3] mb-3">
          {t("kicker")}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-[#0B1F4D]">
          {t("titulo")}
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-[#5DD4EF]/20 px-6 sm:px-10 py-8 sm:py-10 mb-10">
          <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed">
            {t("cita")}
          </p>
        </div>

        <div className="inline-flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-[#0E9BC7]/10 border border-[#0E9BC7]/20">
          <span className="text-xs font-bold tracking-[3px] uppercase text-[#0E7BA3]">
            {t("lemaGeneralLabel")}
          </span>
          <span className="text-xl sm:text-2xl font-extrabold text-[#0B1F4D]">
            {t("lemaGeneral")}
          </span>
        </div>
      </div>
    </section>
  );
}

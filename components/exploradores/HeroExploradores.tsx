import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroExploradores() {
  const t = useTranslations("app.explopage.hero");
  return (
    <section
      id="descripcion"
      className="bg-[#F8F5EC] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Texto */}
        <div>
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#C8102E] mb-3">
            {t("kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#0B1F4D] leading-tight">
            {t("titulo")}{" "}
            <span className="text-[#C8102E]">{t("tituloResaltado")}</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
            {t("parrafo1")}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            {t("parrafo2")}
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#0B1F4D]/5 border border-[#0B1F4D]/10 px-5 py-4">
            <span className="text-2xl font-extrabold text-[#C8102E] leading-none">
              &ldquo;
            </span>
            <p className="text-sm sm:text-base text-[#0B1F4D] italic leading-relaxed">
              {t("cita")}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1F4D]/5 border border-[#0B1F4D]/15">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
              <span className="text-sm font-semibold text-[#0B1F4D]">
                {t("badgeDesde1962")}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8102E]/5 border border-[#C8102E]/15">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
              <span className="text-sm font-semibold text-[#0B1F4D]">
                {t("badgeAsambleasDeDios")}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2B705]/10 border border-[#F2B705]/30">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F2B705]" />
              <span className="text-sm font-semibold text-[#0B1F4D]">
                {t("badgeHorario")}
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
              alt={t("fotoAlt")}
              width={900}
              height={700}
              className="w-full h-70 sm:h-90 md:h-105 object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-[#0B1F4D]/80 to-transparent px-5 py-4">
              <p className="text-white text-sm sm:text-base font-medium">
                {t("fotoCaption")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

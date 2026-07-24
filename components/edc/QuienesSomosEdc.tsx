import Image from "next/image";
import { useTranslations } from "next-intl";

export default function QuienesSomosEdc() {
  const t = useTranslations("app.edc.quienesSomos");
  return (
    <section
      id="quienes-somos"
      className="bg-[#F8F9FA] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Texto */}
        <div>
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#085FE1] mb-3">
            {t("kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#251E40] leading-tight">
            {t("titulo")}{" "}
            <span className="text-[#085FE1]">{t("tituloResaltado")}</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
            {t("parrafo1")}
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
            {t("parrafo2")}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            {t("parrafo3")}
          </p>

          <a
            href="#actividades"
            className="inline-flex items-center justify-center mt-8 px-8 py-4 bg-[#FFC107] text-[#251E40] font-bold uppercase tracking-wider hover:bg-[#251E40] hover:text-white transition-all"
          >
            {t("btnConocerMas")}
          </a>
        </div>

        {/* Foto real del ministerio */}
        <div className="relative">
          <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[#085FE1]" />
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/assets/jovenes/jovenes 0.jpg"
              alt={t("fotoAlt")}
              width={900}
              height={700}
              className="w-full h-70 sm:h-90 md:h-105 object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-[#251E40]/80 to-transparent px-5 py-4">
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

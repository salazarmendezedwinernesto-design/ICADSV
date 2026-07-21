import Image from "next/image";
import { useTranslations } from "next-intl";

const OBJETIVO_KEYS = ["ganar", "ensenar", "promover", "preparar"] as const;

export default function HeroMisioneritas() {
  const t = useTranslations("app.misioneritas.hero");
  return (
    <section
      id="descripcion"
      className="bg-[#F3FBFD] py-16 sm:py-20 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Texto */}
        <div>
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[4px] uppercase text-[#0E7BA3] mb-3">
            {t("kicker")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#0B1F4D] leading-tight">
            {t("titulo")}{" "}
            <span className="text-[#0E9BC7]">{t("tituloResaltado")}</span>?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700">
            {t("parrafo1")}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            {t("parrafo2")}
          </p>

          <div className="mt-8">
            <h3 className="text-sm font-bold tracking-[3px] uppercase text-[#0B1F4D] mb-4">
              {t("objetivosTitulo")}
            </h3>
            <ul className="space-y-3">
              {OBJETIVO_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0E9BC7] shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {t(`objetivos.${key}`)}
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

"use client";

import { useTranslations } from "next-intl";

export default function Location() {
  const t = useTranslations("app.index.ubicacion");
  return (
    <div className="bg-white">
      <div className="relative max-w-6xl py-12 sm:py-20 md:py-28 px-4 sm:px-5 mx-auto">
        <div className="flex flex-col">
          {/* Título */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
              {t("titulo")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-center md:text-left">
              {t("descripcion")}
            </p>
          </div>

          {/* Mapa */}
          <div
            id="seccion-mapa"
            className="w-full rounded-lg shadow-lg overflow-hidden scroll-mt-28"
          >
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10950.89279580247!2d-89.71087829961242!3d13.974970080708948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6294cddfc5abe1%3A0x880d30f070e261e5!2sIglesia%20Canaan%2C%20Asambleas%20de%20Dios!5e0!3m2!1ses!2ssv!4v1773615075628!5m2!1ses!2ssv"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("tituloMapa")}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

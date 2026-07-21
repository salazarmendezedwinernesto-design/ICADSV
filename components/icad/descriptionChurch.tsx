"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinned } from "lucide-react";

interface ValuesChurch {
  id: string;
  icon: string;
  key: "fe" | "comunidad" | "mision";
}

const valuesChurch: ValuesChurch[] = [
  {
    id: "value-1",
    icon: "/assets/icons/cross-solid-full.svg",
    key: "fe",
  },
  {
    id: "value-2",
    icon: "/assets/icons/users-solid-full.svg",
    key: "comunidad",
  },
  {
    id: "value-3",
    icon: "/assets/icons/earth-americas-solid-full.svg",
    key: "mision",
  },
];

export default function DescriptionChurch() {
  const t = useTranslations("app.index.descripcion");
  const handleVisitClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("seccion-mapa");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="descripcion" className="bg-[#f5f5f5]">
      <div className="relative max-w-6xl py-12 sm:py-20 md:py-28 px-4 sm:px-5 mx-auto">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Bienvenida a la Iglesia */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t("titulo")}
              </h2>
              <p className="text-base sm:text-lg mb-6">{t("parrafo1")}</p>
              <p className="text-base sm:text-lg mb-6">{t("parrafo2")}</p>
              <p className="text-base sm:text-lg mb-6">{t("parrafo3")}</p>
              <p className="text-base mb-6 font-bold italic text-center">
                {t("cita")}
              </p>
              <div className="flex justify-center mt-6">
                <Button
                  asChild // Permite transferir los estilos al enlace <a>
                  size="lg"
                  className="
          rounded-full
          px-8
          py-6
          text-base
          font-semibold
          bg-primary
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-1
          transition-all
          duration-300
        "
                >
                  <a
                    href="#seccion-mapa"
                    onClick={handleVisitClick}
                    className="flex items-center justify-center"
                  >
                    <MapPinned className="w-5 h-5 mr-2" />
                    {t("btnVisitanos")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Imagen de la iglesia */}
            <div className="flex items-center justify-center mt-6 md:mt-0">
              <Image
                src="/assets/fachadaiglesia.jpg"
                alt="Iglesia Canaán"
                className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md h-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
          {/* Valores de la iglesia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 md:mt-14">
            {valuesChurch.map((value) => (
              <Card key={value.id} className="text-center">
                <CardHeader>
                  <Image
                    src={value.icon}
                    alt={t(`valores.${value.key}.titulo`)}
                    className="w-16 h-16 mx-auto"
                    width={64}
                    height={64}
                  />
                  <CardTitle className="text-lg font-bold">
                    {t(`valores.${value.key}.titulo`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t(`valores.${value.key}.descripcion`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

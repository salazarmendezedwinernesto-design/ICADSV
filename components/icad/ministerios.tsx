"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Ministerio {
  id: string;
  key:
    | "exploradoresDelRey"
    | "misioneritas"
    | "escuelaBiblica"
    | "fraternidadDeVarones"
    | "concilioMisioneroFemenil"
    | "misiones"
    | "embajadoresDeCristo";
  icono: string;
  enlace: string;
}

const ministerios: Ministerio[] = [
  {
    id: "ministerio-1",
    key: "exploradoresDelRey",
    icono: "/assets/ministries/exploradores.png",
    enlace: "/explopage",
  },
  {
    id: "ministerio-2",
    key: "misioneritas",
    icono: "/assets/ministries/Misioneritas.png",
    enlace: "/nuevas-generaciones/misioneritas",
  },
  {
    id: "ministerio-3",
    key: "escuelaBiblica",
    icono: "/assets/ministries/escuela-biblica.png",
    enlace: "/nuevas-generaciones/escuela-biblica",
  },
  {
    id: "ministerio-4",
    key: "fraternidadDeVarones",
    icono: "/assets/ministries/fraternidad-de-varones.png",
    enlace: "/ministerios/fraternidad",
  },
  {
    id: "ministerio-5",
    key: "concilioMisioneroFemenil",
    icono: "/assets/ministries/CMF.png",
    enlace: "/ministerios/concilio",
  },
  {
    id: "ministerio-6",
    key: "misiones",
    icono: "/assets/ministries/misiones.png",
    enlace: "/ministerios/misiones",
  },
  {
    id: "ministerio-7",
    key: "embajadoresDeCristo",
    icono: "/assets/ministries/edc.jpg",
    enlace: "/nuevas-generaciones/embajadores-de-cristo",
  },
];

export function Ministerios() {
  const t = useTranslations("app.index.ministerios");
  return (
    <div className="relative max-w-6xl py-8 sm:py-10 px-4 sm:px-5 mx-auto">
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        {t("titulo")}
      </h3>

      <div className="relative overflow-hidden">
        {/* Gradiente difuminado izquierdo */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Gradiente difuminado derecho */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee con los ministerios */}
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {ministerios.map((ministerio) => (
            <Link
              key={ministerio.id}
              href={ministerio.enlace}
              className="flex items-center justify-center mx-3 sm:mx-6 transition-transform hover:scale-110 duration-300"
              title={t(`lista.${ministerio.key}`)}
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
                <Image
                  src={ministerio.icono}
                  alt={t(`lista.${ministerio.key}`)}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

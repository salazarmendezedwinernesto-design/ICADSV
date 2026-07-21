"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("app.footer");
  return (
    <footer className="bg-black text-white">
      <div className="relative max-w-6xl px-4 sm:px-5 py-8 sm:py-12 md:pt-16 md:pb-6 mx-auto">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-4 order-2 md:order-0">
            <Link href="#inicio" className="flex items-center gap-2"></Link>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              {t("descripcion")}
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-row items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-gray-400 shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                  {t("direccion")}
                </span>
              </div>
              <div className="flex flex-row items-center gap-2 text-gray-400">
                <Mail size={18} className="text-gray-400 shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm md:text-base break-all">
                  {t("correo")}
                </span>
              </div>
              <div className="flex flex-row items-center gap-2 text-gray-400">
                <Phone size={18} className="text-gray-400 shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                  {t("telefono")}
                </span>
              </div>
            </div>
            <div className="flex space-x-4 mt-10">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/p/Iglesia-Cana%C3%A1n-El-Refugio-100064516218929/"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Image
                  src="/assets/icons/facebook.svg"
                  alt={t("facebook")}
                  width={30}
                  height={30}
                />
                <span className="sr-only">{t("facebook")}</span>
              </Link>
              {/* Instagram */}
              <Link href="https://www.instagram.com/canaan_.er?igsh=MXR1bWkxbDExNzZ3Ng==">
                <Image
                  src="/assets/icons/instagram.svg"
                  alt={t("instagram")}
                  width={30}
                  height={30}
                />
                <span className="sr-only">{t("instagram")}</span>
              </Link>
              {/* TikTok */}
              <Link href="https://www.tiktok.com/@iglesia_.canaan?_r=1&_t=ZS-94inGjnj8MK">
                <Image
                  src="/assets/icons/tiktok.svg"
                  alt={t("tiktok")}
                  width={30}
                  height={30}
                />
                <span className="sr-only">{t("tiktok")}</span>
              </Link>
              {/* WhatsApp */}
              <Link href="https://wa.me/503">
                <Image
                  src="/assets/icons/whatsapp.svg"
                  alt={t("whatsapp")}
                  width={30}
                  height={30}
                />
                <span className="sr-only">{t("whatsapp")}</span>
              </Link>
            </div>
          </div>

          {/* Secciones */}
          <div className="grid gap-6 sm:gap-8 grid-cols-2 order-1 md:order-0">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
                {t("tituloNuevasGeneraciones")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/explopage"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t("linkExploradoresDelRey")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nuevas-generaciones/misioneritas"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t("linkMisioneritas")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nuevas-generaciones/escuela-biblica"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t("linkEscuelaBiblica")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nuevas-generaciones/embajadores-de-cristo"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t("linkEmbajadoresDeCristo")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">
                {t("tituloMinisterios")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/ministerios/fraternidad"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t("linkFraternidad")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ministerios/concilio"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t("linkConcilio")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ministerios/misiones"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t("linkMisiones")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ministerios/misiones"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {t("linkMedia")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 h-fit">
          <p className="text-gray-400 text-sm text-center">
            {t("derechosReservados", { year: new Date().getFullYear() })} <br />{" "}
            {t("todosLosDerechosReservados")}
          </p>
          <p className="text-gray-400 text-sm text-center mt-2">
            {t("desarrolladoPor")}{" "}
            <a href="https://www.facebook.com/share/1LoBJ8jyPu/">
              {" "}
              {t("desarrollador")}{" "}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

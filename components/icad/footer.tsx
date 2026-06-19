"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="relative max-w-6xl px-4 sm:px-5 py-8 sm:py-12 md:pt-16 md:pb-6 mx-auto">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-4 order-2 md:order-0">
            <Link href="#inicio" className="flex items-center gap-2"></Link>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">
              Puedes comunicarte con nosotros por redes sociales, WhatsApp o
              visitarnos en nuestra ubicación.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-row items-center gap-2 text-gray-400">
                <MapPin size={18} className="text-gray-400 shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                  1a Calle oriente, Barrio El Centro El Refugio, Ahuachapán
                  Norte
                </span>
              </div>
              <div className="flex flex-row items-center gap-2 text-gray-400">
                <Mail size={18} className="text-gray-400 shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm md:text-base break-all">
                  iglesiacanaanelrefugio@gmail.com
                </span>
              </div>
              <div className="flex flex-row items-center gap-2 text-gray-400">
                <Phone size={18} className="text-gray-400 shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                  +503 2407 2518
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
                  src="assets/icons/facebook.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
                <span className="sr-only">Facebook</span>
              </Link>
              {/* Instagram */}
              <Link href="https://www.instagram.com/canaan_.er?igsh=MXR1bWkxbDExNzZ3Ng==">
                <Image
                  src="assets/icons/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* TikTok */}
              <Link href="https://www.tiktok.com/@iglesia_.canaan?_r=1&_t=ZS-94inGjnj8MK">
                <Image
                  src="assets/icons/tiktok.svg"
                  alt="TikTok"
                  width={30}
                  height={30}
                />
                <span className="sr-only">TikTok</span>
              </Link>
              {/* WhatsApp */}
              <Link href="https://wa.me/503">
                <Image
                  src="assets/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Secciones */}
          <div className="grid gap-6 sm:gap-8 grid-cols-2 order-1 md:order-0">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">
                Nuevas Generaciones
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/nuevas-generaciones/exploradores"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Exploradores del Rey
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nuevas-generaciones/misioneritas"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Misioneritas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nuevas-generaciones/escuela-biblica"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Escuela Biblica
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nuevas-generaciones/embajadores-de-cristo"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Embajadores de Cristo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Ministerios</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/ministerios/fraternidad"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Fraternidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ministerios/concilio"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Concilio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ministerios/misiones"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Misiones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ministerios/misiones"
                    className="text-base md:text-lg text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Media
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 h-fit">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} ICAD. <br /> Todos los derechos
            reservados.
          </p>
          <p className="text-gray-400 text-sm text-center mt-2">
            Desarrollado por{" "}
            <a href="https://www.facebook.com/share/1LoBJ8jyPu/">
              {" "}
              Edwin Salazar{" "}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

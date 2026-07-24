"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

// Header exclusivo de la página de Embajadores de Cristo (Jóvenes ICAD).
// Misma estructura y enlaces que el header de Nuevas Generaciones
// (Exploradores/Misioneritas), pero con la paleta propia de EDC y
// separado en su propio archivo para poder ajustarlo sin afectar
// el resto del sitio.
export function HeaderEdc() {
  const t = useTranslations("app.nav");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Paleta EDC: navy (#251E40), azul institucional (#085FE1), acento ámbar (#FFC107)
  const menuLinkBase =
    "relative px-4 py-2 text-sm font-semibold tracking-wide rounded-md transition-colors duration-200 after:content-[''] after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-[2px] after:bg-[#2563EB] after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100";
  const menuLinkClasses = `${menuLinkBase} ${isScrolled ? "text-[#0B1F4D] hover:text-[#2563EB]" : "text-white hover:text-white"}`;
  const headerWrapperClasses = `left-0 right-0 z-50 mx-auto px-3 sm:px-6 transition-all duration-300 ${isScrolled ? "fixed top-0 bg-white shadow-[0_2px_20px_rgba(11,31,77,0.15)] border-b-2 border-[#2563EB]" : "absolute top-4 bg-transparent"}`;
  const mobileMenuClasses = `md:hidden rounded-xl mt-2 pb-3 mx-0 overflow-hidden transition-all duration-300 ease-out origin-top bg-white shadow-2xl ring-1 ring-[#0B1F4D]/10 ${isOpen ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`;
  const mobileButtonClasses = `md:hidden ml-auto p-2 rounded-md transition duration-200 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 ${isScrolled ? "text-[#0B1F4D] hover:bg-[#0B1F4D]/5" : "text-white hover:bg-white/10"}`;
  const mobileLinkClasses =
    "block px-5 py-2.5 text-sm text-[#0B1F4D] font-semibold transition hover:bg-[#0B1F4D]/5 active:scale-[0.98] active:bg-[#0B1F4D]/10";
  const mobileSubLinkClasses =
    "block px-9 py-2 text-sm text-[#0B1F4D]/80 transition hover:bg-[#2563EB]/5 hover:text-[#2563EB] active:scale-[0.98]";
  const mobileSubmenuBg = "bg-[#F8F5EC]";

  return (
    <div id="inicio" className={headerWrapperClasses}>
      {/* Desktop Navigation */}
      <div className="flex h-16 sm:h-20 justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="shrink-0 w-16 sm:w-20 transition-transform duration-200 hover:scale-105"
            title={t("irAPaginaPrincipal")}
          >
            <Image
              src="/assets/logo canaan.png"
              alt="Logo Iglesia Canaán"
              width={80}
              height={80}
              className="w-full h-auto drop-shadow-sm"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-1 items-center ml-auto">
          <Link href="/" className={menuLinkClasses}>
            {t("inicio")}
          </Link>

          {/* Nuevas Generaciones Dropdown */}
          <div className="relative group">
            <button className={menuLinkClasses}>
              {t("nuevasGeneraciones")}
            </button>
            <div className="absolute left-0 top-full pt-2 w-56 hidden group-hover:block">
              <div className="rounded-lg overflow-hidden bg-white shadow-[0_10px_30px_rgba(37,30,64,0.25)] ring-1 ring-[#251E40]/10 border-t-2 border-[#085FE1]">
                <Link
                  href="/explopage"
                  className="block px-4 py-2.5 text-sm text-[#251E40] font-medium hover:bg-[#085FE1]/5 hover:text-[#085FE1] transition-colors"
                >
                  {t("exploradoresDelRey")}
                </Link>
                <Link
                  href="/nuevas-generaciones/misioneritas"
                  className="block px-4 py-2.5 text-sm text-[#251E40] font-medium hover:bg-[#085FE1]/5 hover:text-[#085FE1] transition-colors"
                >
                  {t("misioneritas")}
                </Link>
                <Link
                  href="/escuelaBiblica"
                  className="block px-4 py-2.5 text-sm text-[#251E40] font-medium hover:bg-[#085FE1]/5 hover:text-[#085FE1] transition-colors"
                >
                  {t("escuelaBiblica")}
                </Link>
                <Link
                  href="/EDC"
                  className="block px-4 py-2.5 text-sm text-[#251E40] font-medium hover:bg-[#085FE1]/5 hover:text-[#085FE1] transition-colors"
                >
                  {t("embajadoresDeCristo")}
                </Link>
              </div>
            </div>
          </div>

          <Link href="/fraternidad" className={menuLinkClasses}>
            {t("fraternidad")}
          </Link>

          <Link href="/concilio" className={menuLinkClasses}>
            {t("concilio")}
          </Link>

          <Link href="/misiones" className={menuLinkClasses}>
            {t("misiones")}
          </Link>

          <Link href="/media" className={menuLinkClasses}>
            {t("media")}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={mobileButtonClasses}
          aria-label={t("toggleMenu")}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={mobileMenuClasses} aria-hidden={!isOpen}>
        <Link
          href="/"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          {t("inicio")}
        </Link>

        {/* Mobile Nuevas Generaciones */}
        <div>
          <button
            onClick={() => setIsOpen(isOpen)}
            className="w-full text-left px-5 py-2.5 text-sm text-[#251E40] font-semibold transition hover:bg-[#251E40]/5 active:scale-[0.98] active:bg-[#251E40]/10"
          >
            {t("nuevasGeneraciones")}
          </button>
          <div className={mobileSubmenuBg}>
            <Link
              href="/explopage"
              className={mobileSubLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              {t("exploradoresDelRey")}
            </Link>
            <Link
              href="/nuevas-generaciones/misioneritas"
              className={mobileSubLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              {t("misioneritas")}
            </Link>
            <Link
              href="/escuelaBiblica"
              className={mobileSubLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              {t("escuelaBiblica")}
            </Link>
            <Link
              href="/EDC"
              className={mobileSubLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              {t("embajadoresDeCristo")}
            </Link>
          </div>
        </div>

        <Link
          href="/fraternidad"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          {t("fraternidad")}
        </Link>

        <Link
          href="/concilio"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          {t("concilio")}
        </Link>

        <Link
          href="/misiones"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          {t("misiones")}
        </Link>

        <Link
          href="/media"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          {t("media")}
        </Link>
      </nav>
    </div>
  );
}

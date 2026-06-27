"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export function Header() {
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

  const menuLinkBase = "px-4 py-2 text-sm font-medium rounded transition";
  const menuLinkClasses = `${menuLinkBase} ${isScrolled ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"}`;
  const headerWrapperClasses = `left-0 right-0 z-50 mx-auto px-3 sm:px-4 py-2 transition-all duration-300 ${isScrolled ? "fixed top-0 bg-white/95 shadow-xl" : "absolute top-6 bg-transparent"}`;
  const mobileMenuClasses = `md:hidden rounded mt-2 pb-4 mx-0 overflow-hidden transition-all duration-300 ease-out origin-top bg-white shadow-lg ${isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`;
  const mobileButtonClasses = `md:hidden ml-auto p-2 rounded transition duration-200 ease-out text-black ${isScrolled ? "bg-white/0 hover:bg-black/10" : "bg-white/0 hover:bg-black/10"} active:scale-95 active:bg-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20`;
  const mobileLinkClasses =
    "block px-4 py-2 text-sm text-black font-medium transition hover:bg-black/5 active:scale-95 active:bg-black/10";
  const mobileSubLinkClasses =
    "block px-8 py-2 text-sm text-black transition hover:bg-black/5 active:scale-95 active:bg-black/10";
  const mobileSubmenuBg = "bg-slate-100";

  return (
    <div id="inicio" className={headerWrapperClasses}>
      {/* Desktop Navigation */}
      <div className="flex h-14 sm:h-16 justify-between items-center">
        {/* Logo */}
        <div className="shrink-0 w-10 sm:w-12">
          <Link href="https://ceadsv.org/">
            <Image
              src="/assets/logo AD.png"
              alt="AD Logo"
              width={50}
              height={50}
              className="w-full h-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-1 items-center ml-auto">
          <Link href="/" className={menuLinkClasses}>
            Inicio
          </Link>

          {/* Nuevas Generaciones Dropdown */}
          <div className="relative group">
            <button className={menuLinkClasses}>Nuevas Generaciones</button>
            <div className="absolute left-0 mt-0 w-48 bg-black/80 rounded hidden group-hover:block">
              <Link
                href="/explopage"
                className="block px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Exploradores del Rey
              </Link>
              <Link
                href="/nuevas-generaciones/misioneritas"
                className="block px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Misioneritas
              </Link>
              <Link
                href="/escuela-biblica"
                className="block px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Escuela Bíblica
              </Link>
              <Link
                href="/embajadores-de-cristo"
                className="block px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Embajadores de Cristo
              </Link>
            </div>
          </div>

          <Link href="/fraternidad" className={menuLinkClasses}>
            Fraternidad
          </Link>

          <Link href="/concilio" className={menuLinkClasses}>
            Concilio
          </Link>

          <Link href="/misiones" className={menuLinkClasses}>
            Misiones
          </Link>

          <Link href="/media" className={menuLinkClasses}>
            Media
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={mobileButtonClasses}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={mobileMenuClasses} aria-hidden={!isOpen}>
        <Link
          href="/"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          Inicio
        </Link>

        {/* Mobile Nuevas Generaciones */}
        <div>
          <button
            onClick={() => setIsOpen(isOpen)}
            className="w-full text-left px-4 py-2 text-sm text-black font-medium transition hover:bg-black/5 active:scale-95 active:bg-black/10"
          >
            Nuevas Generaciones
          </button>
          <div className={mobileSubmenuBg}>
            <Link
              href="/explopage"
              className={mobileSubLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Exploradores del Rey
            </Link>
            <Link
              href="/nuevas-generaciones/misioneritas"
              className={mobileSubLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Misioneritas
            </Link>
            <Link
              href="/escuela-biblica"
              className={mobileSubLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Escuela Bíblica
            </Link>
            <Link
              href="/embajadores-de-cristo"
              className={mobileSubLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Embajadores de Cristo
            </Link>
          </div>
        </div>

        <Link
          href="/fraternidad"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          Fraternidad
        </Link>

        <Link
          href="/concilio"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          Concilio
        </Link>

        <Link
          href="/misiones"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          Misiones
        </Link>

        <Link
          href="/media"
          className={mobileLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          MEDIA
        </Link>
      </nav>
    </div>
  );
}

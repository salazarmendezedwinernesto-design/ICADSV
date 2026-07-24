import { HeaderEscuelaBiblica } from "@/components/escuela-biblica/headerEscuelaBiblica";
import { BannerEscuelaBiblica } from "@/components/escuela-biblica/banerescuelabiblica";
import HeroEscuelaBiblica from "@/components/escuela-biblica/heroescuelabiblica";
import QueEncontrarasEscuelaBiblica from "@/components/escuela-biblica/Queencontrarasescuelabiblica";
import ClasesPorEdadEscuelaBiblica from "@/components/escuela-biblica/Clasesporedadescuelabiblica";
import GaleriaEscuelaBiblica from "@/components/escuela-biblica/Galeriaescuelabiblica";
export default function EscuelaBiblicaPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF0] text-[#0B1F4D]">
      <HeaderEscuelaBiblica />
      <BannerEscuelaBiblica />
      <HeroEscuelaBiblica />
      <QueEncontrarasEscuelaBiblica />
      <ClasesPorEdadEscuelaBiblica />
      <GaleriaEscuelaBiblica />
    </main>
  );
}

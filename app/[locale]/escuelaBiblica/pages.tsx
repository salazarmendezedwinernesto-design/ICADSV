import { BannerEscuelaBiblica } from "@/components/escuela-biblica/banerescuelabiblica";
import HeroEscuelaBiblica from "@/components/escuela-biblica/heroescuelabiblica";
import QueEncontrarasEscuelaBiblica from "@/components/escuela-biblica/Queencontrarasescuelabiblica";
import PropositoEscuelaBiblica from "@/components/escuela-biblica/Propositoescuelabiblica";
import VersiculoEscuelaBiblica from "@/components/escuela-biblica/Versiculoescuelabibilica";

export default function EscuelaBiblicaPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF0] text-[#0B1F4D]">
      <BannerEscuelaBiblica />
      <HeroEscuelaBiblica />
      <QueEncontrarasEscuelaBiblica />
      <PropositoEscuelaBiblica />
      <VersiculoEscuelaBiblica />
    </main>
  );
}

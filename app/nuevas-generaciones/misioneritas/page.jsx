import { BannerMisioneritas } from "@/components/icad/bannerMisioneritas";
import HeroMisioneritas from "@/components/icad/HeroMisioneritas";
import DivisionesMisioneritas from "@/components/icad/DivisionesMisioneritas";
import PromesasMisioneritas from "@/components/icad/PromesasMisioneritas";
import CodigoLemaMisioneritas from "@/components/icad/CodigoLemaMisioneritas";
import ImpactoMisioneritas from "@/components/icad/ImpactoMisioneritas";
import UneteMisioneritas from "@/components/icad/UneteMisioneritas";

export default function MisioneritasPage() {
  return (
    <main className="min-h-screen bg-[#F3FBFD] text-[#0B1F4D]">
      <BannerMisioneritas />
      <HeroMisioneritas />
      <DivisionesMisioneritas />
      <PromesasMisioneritas />
      <CodigoLemaMisioneritas />
      <ImpactoMisioneritas />
      <UneteMisioneritas />
    </main>
  );
}

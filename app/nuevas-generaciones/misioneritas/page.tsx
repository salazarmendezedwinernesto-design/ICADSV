import { BannerMisioneritas } from "@/components/misioneritas/bannerMisioneritas";
import HeroMisioneritas from "@/components/misioneritas/HeroMisioneritas";
import DivisionesMisioneritas from "@/components/misioneritas/DivisionesMisioneritas";
import PromesasMisioneritas from "@/components/misioneritas/PromesasMisioneritas";
import CodigoLemaMisioneritas from "@/components/misioneritas/CodigoLemaMisioneritas";
import ImpactoMisioneritas from "@/components/misioneritas/ImpactoMisioneritas";
import UneteMisioneritas from "@/components/misioneritas/UneteMisioneritas";

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

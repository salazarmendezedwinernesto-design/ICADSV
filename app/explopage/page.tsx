import { Banner } from "@/components/icad/bannerExplo";
import HeroExploradores from "@/components/icad/HeroExploradores";
import CodigoHonor from "@/components/icad/CodigoHonor";
import SignificadoEmblema from "@/components/icad/SignificadoEmblema";
import ProgramaEdades from "@/components/icad/ProgramaEdadesER";
import UneteExplo from "@/components/icad/UneteExplo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5EC] text-[#0B1F4D]">
      <Banner />
      <HeroExploradores />
      <CodigoHonor />
      <SignificadoEmblema />
      <ProgramaEdades />
      <UneteExplo />
    </main>
  );
}

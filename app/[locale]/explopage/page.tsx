import { Banner } from "@/components/exploradores/bannerExplo";
import HeroExploradores from "@/components/exploradores/HeroExploradores";
import CodigoHonor from "@/components/exploradores/CodigoHonor";
import SignificadoEmblema from "@/components/exploradores/SignificadoEmblema";
import ProgramaEdades from "@/components/exploradores/ProgramaEdadesER";
import UneteExplo from "@/components/exploradores/UneteExplo";

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

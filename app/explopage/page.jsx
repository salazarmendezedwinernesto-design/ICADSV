import { Banner } from "@/components/icad/banner";
import HeroExploradores from "@/components/icad/HeroExploradores";
import CodigoHonor from "@/components/icad/CodigoHonor";
import ProgramaEdades from "@/components/icad/ProgramaEdadesER";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Banner />
      <HeroExploradores />
      <CodigoHonor />
      <ProgramaEdades />
    </main>
  );
}

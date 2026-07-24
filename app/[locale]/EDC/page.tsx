import { BannerEdc } from "@/components/edc/bannerEdc";
import QuienesSomosEdc from "@/components/edc/QuienesSomosEdc";
import ActividadesEdc from "@/components/edc/ActividadesEdc";
import GaleriaEdc from "@/components/edc/GaleriaEdc";
import UneteEdc from "@/components/edc/UneteEdc";
import { HeaderEdc } from "@/components/edc/headerEdc";

export default function EmbajadoresDeCristoPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#251E40]">
      <HeaderEdc />
      <BannerEdc />
      <QuienesSomosEdc />
      <ActividadesEdc />
      <GaleriaEdc />
      <UneteEdc />
    </main>
  );
}

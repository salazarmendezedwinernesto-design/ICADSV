import { Banner } from "@/components/icad/banner";
import { Ministerios } from "@/components/icad/ministerios";
import DescriptionChurch from "@/components/icad/descriptionChurch";
import Services from "@/components/icad/services";
import Location from "@/components/icad/location";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <Banner />
      <DescriptionChurch />
      <Services />
      <Ministerios />
      <Location />
    </div>
  );
}

"use client";
import { usePathname } from "next/navigation";
import { Header } from "@/components/icad/header";
import { HeaderExplo } from "@/components/exploradores/headerExplo";
import { HeaderEdc } from "@/components/edc/headerEdc";
import { HeaderEscuelaBiblica } from "@/components/escuela-biblica/headerEscuelaBiblica";

// Muestra el header normal en todo el sitio, el header de
// Nuevas Generaciones (con el dropdown de Exploradores/Misioneritas)
// en /explopage y en las páginas bajo /nuevas-generaciones, el header
// propio de Embajadores de Cristo (Jóvenes ICAD) en su página específica,
// y el header propio de Escuela Bíblica en su página.
export function HeaderSwitch() {
  const pathname = usePathname();
  const isEdc =
    pathname?.startsWith("/EDC") ||
    pathname?.startsWith("/nuevas-generaciones/embajadores-de-cristo");
  const isEscuelaBiblica = pathname?.startsWith("/escuelaBiblica");
  const isExplo =
    pathname?.startsWith("/explopage") ||
    (pathname?.startsWith("/nuevas-generaciones") &&
      !isEdc &&
      !isEscuelaBiblica);

  if (isEdc) return <HeaderEdc />;
  if (isEscuelaBiblica) return <HeaderEscuelaBiblica />;
  return isExplo ? <HeaderExplo /> : <Header />;
}

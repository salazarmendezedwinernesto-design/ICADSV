"use client";
import { usePathname } from "next/navigation";
import { Header } from "@/components/icad/header";
import { HeaderExplo } from "@/components/icad/headerExplo";

// Muestra el header normal en todo el sitio, y el header de
// Nuevas Generaciones (con el dropdown de Exploradores/Misioneritas)
// en /explopage y en las páginas bajo /nuevas-generaciones.
export function HeaderSwitch() {
  const pathname = usePathname();
  const isExplo =
    pathname?.startsWith("/explopage") ||
    pathname?.startsWith("/nuevas-generaciones");

  return isExplo ? <HeaderExplo /> : <Header />;
}

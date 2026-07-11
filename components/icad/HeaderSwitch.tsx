"use client";
import { usePathname } from "next/navigation";
import { Header } from "@/components/icad/header";
import { HeaderExplo } from "@/components/icad/headerExplo";

// Muestra el header normal en todo el sitio, y el header de
// Exploradores del Rey (con el logo duplicado) solo en /explopage.
export function HeaderSwitch() {
  const pathname = usePathname();
  const isExplo = pathname?.startsWith("/explopage");

  return isExplo ? <HeaderExplo /> : <Header />;
}

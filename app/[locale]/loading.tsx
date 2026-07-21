import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("app.loading");
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-xl animate-fade-in">
      {/* Efecto de brillo de fondo (Glow) opcional para dar profundidad */}
      <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Spinner animado exterior */}
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-blue-500 border-r-blue-500/30 border-l-blue-500/10"></div>

        {/* Círculo estático interior de guía */}
        <div className="absolute inset-1 rounded-full border border-slate-800/50 bg-slate-900/80 shadow-2xl flex items-center justify-center">
          {/* ─── CONTENEDOR DEL LOGO ─── */}
          {/* Puedes usar una etiqueta <img> o un SVG de tu logo aquí */}
          <div className="w-10 h-10 flex items-center justify-center text-blue-400 font-bold text-xl tracking-tighter">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Logo Iglesia Canaán"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bloque de Texto Inferior */}
      <div className="mt-6 flex flex-col items-center gap-1.5 z-10">
        <span className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
          {t("bienvenido")}
        </span>
        <span className="text-[11px] font-medium text-slate-500 tracking-normal animate-pulse">
          {t("porFavorEspera")}
        </span>
      </div>
    </div>
  );
}

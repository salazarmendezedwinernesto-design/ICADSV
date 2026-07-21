"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SafeComponent from "../icad/SafeComponent";

const CODIGO_KEYS = [
  "alerta",
  "limpio",
  "honrado",
  "valiente",
  "leal",
  "cortes",
  "obediente",
  "espiritual",
] as const;

export default function CodigoHonor() {
  const t = useTranslations("app.explopage.codigoHonor");
  return (
    <SafeComponent>
      <section className="py-24 px-8 bg-[#F9F7F2] relative overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#0B132B_1px,transparent_1px)] bg-size-[24px_24px]"></div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-extrabold text-[#0B132B] uppercase tracking-tighter mb-6"
            >
              {t("titulo")}{" "}
              <span className="text-[#D32F2F]">{t("tituloResaltado")}</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              className="h-1.5 bg-[#D32F2F] mx-auto rounded-full"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CODIGO_KEYS.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-xl hover:border-[#D32F2F] transition-all duration-300"
              >
                {/* Indicador de número con efecto */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0B132B] text-[#F9F7F2] font-black flex items-center justify-center rounded-xl shadow-lg group-hover:bg-[#D32F2F] transition-colors">
                  0{i + 1}
                </div>

                <div className="mt-4">
                  <h3 className="text-[#0B132B] text-xl font-bold mb-3 uppercase group-hover:text-[#D32F2F] transition-colors">
                    {t(`items.${key}.titulo`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`items.${key}.descripcion`)}
                  </p>
                </div>

                {/* Detalle visual inferior */}
                <div className="mt-6 w-8 h-1 bg-gray-100 group-hover:bg-[#D32F2F] transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SafeComponent>
  );
}

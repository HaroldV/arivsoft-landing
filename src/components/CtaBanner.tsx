"use client";

import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle } from "lucide-react";
import { APP_CONFIG } from "@/data/content";

interface CtaBannerProps {
  onOpenDemo: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Dynamic Background matching ArivSoft Logo gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-brand-emerald/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-navy-800 border border-brand-cyan/40 text-xs font-semibold text-brand-cyan-light shadow-glow-cyan">
          <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
          <span>Implementación Rápida en menos de 24 Horas</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Toma el control absoluto de tus ventas, inventario y finanzas hoy mismo
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Sin contratos forzosos ni complicaciones técnicas. Configura tu empresa en minutos y empieza a operar con la plataforma ERP más potente de la nube.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={APP_CONFIG.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-base font-extrabold text-brand-navy-950 bg-gradient-to-r from-brand-cyan via-brand-emerald-light to-brand-emerald hover:opacity-95 shadow-glow-emerald rounded-xl transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center"
          >
            <span>Ingresar a la Plataforma ArivSoft</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>

          <a
            href={`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(APP_CONFIG.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 text-base font-bold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
          >
            Agendar Demostración Guiada
          </a>
        </div>

        {/* Reassurance items */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400 font-medium">
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 text-brand-emerald mr-1.5" /> Migración de datos desde Excel
          </span>
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 text-brand-emerald mr-1.5" /> Soporte personalizado 24/7
          </span>
          <span className="flex items-center">
            <CheckCircle className="w-4 h-4 text-brand-emerald mr-1.5" /> Cancelas cuando quieras
          </span>
        </div>
      </div>
    </section>
  );
};

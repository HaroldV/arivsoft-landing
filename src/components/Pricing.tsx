"use client";

import React from "react";
import { PRICING_PLANS } from "@/data/content";
import { Check, Sparkles, ArrowRight, ShieldCheck, Building2, Layers, CheckCircle2 } from "lucide-react";

interface PricingProps {
  onOpenDemo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  return (
    <section id="planes" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-blue/10 via-brand-cyan/10 to-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Planes a la Medida de tu Negocio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950">
            Soluciones diseñadas para cada etapa de tu empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Desde pequeños comercios hasta empresas multisede y corporativos. Comienza con una prueba gratuita de 14 días o solicita una propuesta personalizada.
          </p>
        </div>

        {/* Pricing Cards Grid (Without Hardcoded Prices) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  isPopular
                    ? "bg-gradient-card-dark text-white border-2 border-brand-cyan shadow-glow-cyan transform lg:-translate-y-2"
                    : "bg-slate-50 text-slate-900 border border-slate-200/90 shadow-card-soft hover:shadow-lg"
                }`}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-navy-950 text-xs font-black uppercase tracking-wider shadow-md">
                    Más Recomendado
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Tagline */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className={`text-2xl font-black ${isPopular ? "text-white" : "text-brand-navy-950"}`}>
                        {plan.name}
                      </h3>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                          isPopular
                            ? "bg-brand-cyan/20 text-brand-cyan-light border border-brand-cyan/30"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>
                    <p className={`text-xs mt-2 ${isPopular ? "text-slate-300" : "text-slate-500"}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Scope / Capacity Box (Clean alternative to fixed numbers) */}
                  <div
                    className={`p-4 rounded-2xl border ${
                      isPopular
                        ? "bg-brand-navy-900/90 border-brand-cyan/30 text-slate-200"
                        : "bg-white border-slate-200 text-slate-700 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <Layers className={`w-4 h-4 ${isPopular ? "text-brand-cyan-light" : "text-brand-blue"}`} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Alcance del Plan
                      </span>
                    </div>
                    <p className={`text-sm font-extrabold ${isPopular ? "text-white" : "text-brand-navy-950"}`}>
                      {plan.scope}
                    </p>
                    <p className={`text-[11px] mt-0.5 ${isPopular ? "text-slate-400" : "text-slate-500"}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <p className={`text-xs font-bold uppercase tracking-wider ${isPopular ? "text-brand-cyan-light" : "text-slate-400"}`}>
                      ¿Qué incluye esta solución?
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isPopular ? "text-brand-emerald" : "text-brand-emerald-dark"}`} />
                          <span className={isPopular ? "text-slate-200" : "text-slate-700"}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-6 border-t border-slate-700/40">
                  <button
                    onClick={onOpenDemo}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center space-x-2 ${
                      isPopular
                        ? "bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-navy-950 hover:opacity-95 shadow-md"
                        : "bg-brand-navy text-white hover:bg-brand-navy-900 shadow-sm"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className={`text-[11px] text-center mt-2.5 ${isPopular ? "text-slate-400" : "text-slate-500"}`}>
                    Prueba 14 días gratis • Sin compromiso • Asesoría personalizada
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tailored Consultation Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center space-x-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-brand-navy text-brand-cyan-light flex items-center justify-center flex-shrink-0 shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-brand-navy-950">
                ¿Necesitas un paquete personalizado o tienes múltiples sucursales?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Evaluamos el volumen de tus transacciones y diseñamos una propuesta ajustada al presupuesto de tu empresa.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-brand hover:opacity-95 shadow-md flex-shrink-0"
          >
            Solicitar Asesoría VIP
          </button>
        </div>
      </div>
    </section>
  );
};

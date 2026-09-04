"use client";

import React from "react";
import { INDUSTRIES, IndustryItem } from "@/data/content";
import {
  ShoppingBag,
  Store,
  Utensils,
  Building2,
  HeartPulse,
  Briefcase,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface IndustriesProps {
  onOpenDemo: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenDemo }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6" />;
      case "Store":
        return <Store className="w-6 h-6" />;
      case "Utensils":
        return <Utensils className="w-6 h-6" />;
      case "Building2":
        return <Building2 className="w-6 h-6" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6" />;
      default:
        return <Store className="w-6 h-6" />;
    }
  };

  return (
    <section id="industrias" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Adaptado a tu Rubro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950">
            Diseñado para adaptarse a la dinámica real de tu empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            No importa si vendes por mostrador, despachas a mayoristas o administras servicios: ArivSoft se ajusta a tu flujo operativo.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-7 shadow-card-soft border border-slate-200/90 flex flex-col justify-between space-y-6 hover:shadow-xl hover:border-brand-cyan/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-brand-navy-50 text-brand-navy group-hover:bg-gradient-brand group-hover:text-white transition-all shadow-xs">
                    {getIndustryIcon(item.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-navy-950">{item.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                </div>

                {/* Pain point vs Solution */}
                <div className="space-y-2.5 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                    <span className="font-bold text-rose-600 block mb-0.5">El Reto Habitual:</span>
                    <p>{item.painPoint}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-slate-800">
                    <span className="font-bold text-emerald-800 block mb-0.5">La Solución ArivSoft:</span>
                    <p className="font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-bold text-brand-navy bg-slate-100 hover:bg-gradient-brand hover:text-white transition-all"
              >
                <span>Ver demo para {item.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Industry Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-navy-950 to-brand-navy-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">¿Tu modelo de negocio o rubro es particular?</h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Nuestra arquitectura modular permite personalizar campos, listas de precios, formatos de tickets y flujos de trabajo.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-brand-navy-950 bg-gradient-to-r from-brand-cyan to-brand-emerald hover:opacity-95 shadow-md flex-shrink-0"
          >
            Hablar con un Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

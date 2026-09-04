"use client";

import React from "react";
import { COMPARISON_FEATURES } from "@/data/content";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";

interface ComparisonTableProps {
  onOpenDemo: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenDemo }) => {
  return (
    <section id="comparativa" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-brand-blue border border-brand-blue/20 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>Comparativa Frente al Mercado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950">
            ¿Por qué las empresas eligen ArivSoft Solutions?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Compara objetivamente lo que obtienes con ArivSoft frente a métodos tradicionales y herramientas limitadas.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-3xl bg-white border border-slate-200/90 shadow-card-soft">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="py-5 px-6 text-sm font-bold text-slate-800 w-1/3">
                  Funcionalidades & Capacidades
                </th>
                {/* ArivSoft Column Highlight */}
                <th className="py-5 px-6 text-sm font-extrabold text-white bg-gradient-brand rounded-t-2xl text-center w-1/4 shadow-md">
                  <div className="flex flex-col items-center">
                    <span className="text-base tracking-wide">ArivSoft Solutions</span>
                    <span className="text-[11px] text-brand-emerald-light font-medium">ERP en la Nube 360°</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-sm font-bold text-slate-600 text-center w-1/5">
                  Hojas de Excel
                </th>
                <th className="py-5 px-6 text-sm font-bold text-slate-600 text-center w-1/5">
                  ERPs Antiguos / Locales
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {COMPARISON_FEATURES.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  {/* Feature name and description */}
                  <td className="py-4 px-6 font-semibold text-slate-800">
                    <div>{item.feature}</div>
                    <div className="text-[11px] text-slate-400 font-normal mt-0.5">{item.detail}</div>
                  </td>

                  {/* ArivSoft (Highlighted cell) */}
                  <td className="py-4 px-6 text-center bg-cyan-50/30 border-x border-brand-cyan/20 font-bold text-brand-navy">
                    {typeof item.arivsoft === "boolean" ? (
                      <div className="inline-flex p-1.5 rounded-full bg-emerald-500 text-white shadow-xs">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                        {item.arivsoft}
                      </span>
                    )}
                  </td>

                  {/* Excel */}
                  <td className="py-4 px-6 text-center text-slate-500">
                    {typeof item.excel === "boolean" ? (
                      item.excel ? (
                        <Check className="w-4 h-4 text-slate-400 mx-auto" />
                      ) : (
                        <div className="inline-flex p-1 rounded-full bg-rose-50 text-rose-500">
                          <X className="w-4 h-4" />
                        </div>
                      )
                    ) : (
                      <span className="text-xs text-slate-500">{item.excel}</span>
                    )}
                  </td>

                  {/* Legacy ERP */}
                  <td className="py-4 px-6 text-center text-slate-500">
                    {typeof item.legacyErp === "boolean" ? (
                      item.legacyErp ? (
                        <Check className="w-4 h-4 text-slate-600 mx-auto" />
                      ) : (
                        <div className="inline-flex p-1 rounded-full bg-rose-50 text-rose-500">
                          <X className="w-4 h-4" />
                        </div>
                      )
                    ) : (
                      <span className="text-xs text-slate-500">{item.legacyErp}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-brand hover:opacity-95 shadow-md hover:shadow-glow-cyan transition-all"
          >
            <span>Descubre la diferencia con ArivSoft</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { HERO_METRICS } from "@/data/content";
import { TrendingUp, CheckCircle, ShieldCheck, Clock } from "lucide-react";

export const MetricsBanner: React.FC = () => {
  const icons = [
    <TrendingUp key="1" className="w-5 h-5 text-brand-cyan" />,
    <CheckCircle key="2" className="w-5 h-5 text-brand-emerald" />,
    <Clock key="3" className="w-5 h-5 text-brand-cyan-light" />,
    <ShieldCheck key="4" className="w-5 h-5 text-brand-emerald-light" />,
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold tracking-wider uppercase text-brand-cyan-light">
            Resultados Comprobados
          </p>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Empresas que crecen con control y orden financiero
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HERO_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-navy-900/60 border border-slate-800 backdrop-blur-sm flex flex-col items-center text-center transform transition-transform hover:-translate-y-1 hover:border-brand-cyan/40"
            >
              <div className="p-2.5 rounded-xl bg-brand-navy-800 border border-slate-700/80 mb-3">
                {icons[idx]}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-cyan-light">
                {metric.value}
              </span>
              <p className="text-sm font-bold text-slate-200 mt-1">{metric.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

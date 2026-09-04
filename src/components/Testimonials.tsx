"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/content";
import { Star, Quote, Sparkles, Building, MapPin } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-cyan-50 text-brand-navy border border-brand-cyan/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Casos de Éxito y Confianza</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950">
            Historias reales de empresas que crecen con ArivSoft
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Descubre cómo dueños de negocios, gerentes contables y directores comerciales optimizaron su operación.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="rounded-3xl bg-white p-8 shadow-card-soft border border-slate-200/90 flex flex-col justify-between space-y-6 relative hover:shadow-xl hover:border-brand-cyan/40 transition-all"
            >
              <div className="space-y-4">
                {/* Metric pill */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-extrabold border border-emerald-200">
                  {test.metricHighlight}
                </div>

                {/* Star rating */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &quot;{test.quote}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-brand text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                  {test.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy-950">{test.name}</h4>
                  <p className="text-xs text-brand-blue font-medium">{test.role}</p>
                  <p className="text-[11px] text-slate-400 flex items-center mt-0.5">
                    <Building className="w-3 h-3 mr-1" /> {test.company} • {test.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

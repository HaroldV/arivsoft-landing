"use client";

import React from "react";
import { PAIN_POINTS } from "@/data/content";
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
  PackageSearch,
  Coins,
  Receipt,
  Users,
  LineChart,
  Sparkles
} from "lucide-react";

export const PainPoints: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-5 h-5" />;
      case "PackageSearch":
        return <PackageSearch className="w-5 h-5" />;
      case "Coins":
        return <Coins className="w-5 h-5" />;
      case "ReceiptAlert":
        return <Receipt className="w-5 h-5" />;
      case "Users":
        return <Users className="w-5 h-5" />;
      case "LineChart":
        return <LineChart className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold">
            <span>¿Te resulta familiar esta situación?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950">
            Administrar tu empresa no debería ser un dolor de cabeza diario
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Descubre cómo ArivSoft Solutions transforma los cuellos de botella administrativos en procesos automatizados y fluidos.
          </p>
        </div>

        {/* Before vs After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 shadow-card-soft border border-slate-200/90 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
            >
              {/* Card Header with Icon */}
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-slate-100 text-brand-navy border border-slate-200/80">
                  {getIcon(item.icon)}
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Caso #{idx + 1}
                </span>
              </div>

              {/* Before (Problem) */}
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 text-slate-700 text-sm space-y-1.5">
                <div className="flex items-center space-x-2 text-rose-700 font-bold text-xs uppercase tracking-wide">
                  <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>Antes (El problema)</span>
                </div>
                <p className="text-slate-700 leading-snug">{item.before}</p>
              </div>

              {/* Arrow Indicator */}
              <div className="flex justify-center -my-3">
                <span className="p-1.5 rounded-full bg-slate-100 text-slate-400 border border-slate-200">
                  <ArrowRight className="w-3.5 h-3.5 rotate-90 md:rotate-0" />
                </span>
              </div>

              {/* After (Solution with ArivSoft) */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-slate-800 text-sm space-y-1.5">
                <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xs uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                  <span>Con ArivSoft Solutions</span>
                </div>
                <p className="text-slate-800 font-medium leading-snug">{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

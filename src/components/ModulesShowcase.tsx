"use client";

import React, { useState } from "react";
import { ERP_MODULES } from "@/data/content";
import {
  ShoppingCart,
  Boxes,
  Truck,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  KeyRound,
  Layers,
  ChevronRight
} from "lucide-react";

interface ModulesShowcaseProps {
  onOpenDemo: () => void;
}

export const ModulesShowcase: React.FC<ModulesShowcaseProps> = ({ onOpenDemo }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>("ventas");

  const selectedModule = ERP_MODULES.find((m) => m.id === selectedModuleId) || ERP_MODULES[0];

  const getModuleIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "ShoppingCart":
        return <ShoppingCart className={className} />;
      case "Boxes":
        return <Boxes className={className} />;
      case "Truck":
        return <Truck className={className} />;
      case "Landmark":
        return <Landmark className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      default:
        return <Zap className={className} />;
    }
  };

  return (
    <section id="modulos" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-brand-navy-50 text-brand-navy border border-brand-cyan/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
            <span>Arquitectura Modular Completa • 4 Módulos Principales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950">
            Control integral de cada área de tu empresa
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Explora la estructura completa de módulos, submódulos y permisos habilitados diseñados para operar sin fricción.
          </p>
        </div>

        {/* Tab Buttons Horizontal Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start lg:justify-center">
          {ERP_MODULES.map((module) => {
            const isActive = module.id === selectedModuleId;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedModuleId(module.id)}
                className={`flex items-center space-x-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-gradient-brand text-white shadow-glow-cyan"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {getModuleIcon(module.icon, isActive ? "text-brand-cyan-light w-4 h-4" : "text-slate-500 w-4 h-4")}
                <span>{module.shortName}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-white/20 text-brand-emerald-light"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {module.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Module Showcase Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 shadow-card-soft space-y-10">
          {/* Top Row: Description & Live Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-brand-blue/10 to-brand-cyan/20 text-brand-navy border border-brand-cyan/30">
                    Módulo Activo
                  </span>
                  <span className="text-xs text-brand-emerald-dark font-bold">
                    {selectedModule.submodules.length} submódulos integrados
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-950 leading-tight">
                  {selectedModule.name}
                </h3>
                <p className="text-sm font-semibold text-brand-blue">
                  {selectedModule.tagline}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {selectedModule.description}
              </p>

              {/* Highlights List */}
              <ul className="space-y-2">
                {selectedModule.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Key stats row */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200">
                {selectedModule.keyStats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <p className="text-xl font-black text-brand-navy">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-brand hover:opacity-95 shadow-md transition-all"
                >
                  <span>Probar {selectedModule.shortName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Interactive Preview */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-brand-navy-950 p-4 sm:p-5 border border-slate-800 text-white shadow-xl space-y-4">
                {/* Preview Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-brand-navy-900 border border-slate-800 text-brand-cyan-light">
                      {getModuleIcon(selectedModule.icon, "w-4 h-4")}
                    </div>
                    <span className="text-xs font-bold text-slate-200">
                      {selectedModule.previewDetails.title}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30">
                    En Vivo
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {selectedModule.previewDetails.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-brand-navy-900/90 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">{m.label}</span>
                      <p className="text-sm sm:text-base font-bold text-white mt-0.5">{m.value}</p>
                      {m.change && (
                        <span className={`text-[10px] font-semibold ${m.positive ? "text-brand-emerald" : "text-amber-400"}`}>
                          {m.change}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mini Table Preview */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-brand-navy-900/60">
                  <table className="w-full text-left text-[11px]">
                    <thead className="bg-brand-navy-950 text-slate-400 border-b border-slate-800">
                      <tr>
                        {selectedModule.previewDetails.tableHeaders.slice(0, 4).map((th, idx) => (
                          <th key={idx} className="py-2 px-2.5">{th}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {selectedModule.previewDetails.tableRows.slice(0, 4).map((row, rIdx) => (
                        <tr key={rIdx}>
                          <td className="py-2 px-2.5 font-mono text-cyan-400">{row.col1}</td>
                          <td className="py-2 px-2.5">{row.col2}</td>
                          <td className="py-2 px-2.5 text-slate-400">{row.col3}</td>
                          <td className="py-2 px-2.5 font-semibold text-white">{row.col4}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Permisos configurables por rol de usuario</span>
                  <span className="text-brand-cyan-light font-medium">ArivSoft ERP Core</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submodules & Permissions Detailed Grid */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h4 className="text-lg font-extrabold text-brand-navy-950 flex items-center">
                  <Layers className="w-5 h-5 text-brand-cyan mr-2" />
                  Submódulos y Permisos Habilitados en {selectedModule.shortName}
                </h4>
                <p className="text-xs text-slate-500">
                  Estructura de acceso granular y control de operaciones para cada miembro de tu equipo.
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-navy text-brand-cyan-light self-start sm:self-auto">
                {selectedModule.submodules.length} submódulos activos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {selectedModule.submodules.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-brand-cyan/40 transition-all flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-brand-navy-950 group-hover:text-brand-blue transition-colors">
                        {sub.name}
                      </span>
                      {sub.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {sub.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {sub.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                    <span className="flex items-center font-mono text-slate-400">
                      <KeyRound className="w-3 h-3 mr-1 text-brand-emerald" />
                      {sub.permissionKey}
                    </span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      En Plan
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

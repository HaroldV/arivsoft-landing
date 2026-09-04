"use client";

import React, { useState } from "react";
import {
  Calculator,
  Clock,
  DollarSign,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

interface RoiCalculatorProps {
  onOpenDemo: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [employees, setEmployees] = useState<number>(8);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(14);
  const [monthlyInvoices, setMonthlyInvoices] = useState<number>(850);

  // Estimations logic
  // Average admin hourly cost ~$6 USD / hr
  const hourlyAdminRate = 6.5;
  const hoursSavedFactor = 0.72; // ArivSoft automates ~72% of manual data entry
  const annualHoursSaved = Math.round(manualHoursPerWeek * 52 * hoursSavedFactor);
  const annualMoneySaved = Math.round(annualHoursSaved * hourlyAdminRate + (employees * 120));
  const errorReductionPercentage = 92;

  return (
    <section id="roi" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-cyan-50 text-brand-navy border border-brand-cyan/30 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Simulador de Retorno de Inversión (ROI)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950">
            Calcula cuánto tiempo y dinero ahorrarás con ArivSoft
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Ajusta los controles deslizantes con los datos de tu empresa para descubrir el impacto de automatizar tus operaciones.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 shadow-card-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Slider 1: Employees */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="employees-slider" className="font-bold text-slate-800">
                  Número de empleados / equipo administrativo
                </label>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 font-extrabold text-brand-navy text-sm">
                  {employees} personas
                </span>
              </div>
              <input
                id="employees-slider"
                type="range"
                min="1"
                max="50"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>1 emprendedor</span>
                <span>25 equipo</span>
                <span>50+ corporativo</span>
              </div>
            </div>

            {/* Slider 2: Manual hours */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="hours-slider" className="font-bold text-slate-800">
                  Horas semanales dedicadas a cuadres, Excel e inventario
                </label>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 font-extrabold text-brand-blue text-sm">
                  {manualHoursPerWeek} hrs/semana
                </span>
              </div>
              <input
                id="hours-slider"
                type="range"
                min="2"
                max="40"
                value={manualHoursPerWeek}
                onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>2 hrs (poco)</span>
                <span>20 hrs (medio)</span>
                <span>40 hrs (crítico)</span>
              </div>
            </div>

            {/* Slider 3: Invoices */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="invoices-slider" className="font-bold text-slate-800">
                  Facturas y tickets de venta procesados por mes
                </label>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 font-extrabold text-brand-emerald-dark text-sm">
                  {monthlyInvoices.toLocaleString()} facturas
                </span>
              </div>
              <input
                id="invoices-slider"
                type="range"
                min="50"
                max="5000"
                step="50"
                value={monthlyInvoices}
                onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-emerald"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>50 ventas</span>
                <span>2,500 ventas</span>
                <span>5,000+ ventas</span>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-slate-900 p-6 sm:p-7 text-white border border-brand-cyan/30 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-brand-cyan-light uppercase tracking-wider">
                  Impacto Estimado Anual
                </span>
                <Sparkles className="w-4 h-4 text-brand-emerald" />
              </div>

              {/* Stat 1: Hours */}
              <div className="space-y-1">
                <span className="text-xs text-slate-400 flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-cyan" /> Tiempo productivo recuperado
                </span>
                <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-cyan-light">
                  {annualHoursSaved.toLocaleString()} horas / año
                </p>
                <p className="text-[11px] text-slate-400">
                  Equivalente a {(annualHoursSaved / 8).toFixed(0)} jornadas laborales completas.
                </p>
              </div>

              {/* Stat 2: Money */}
              <div className="space-y-1 pt-3 border-t border-slate-800">
                <span className="text-xs text-slate-400 flex items-center">
                  <DollarSign className="w-3.5 h-3.5 mr-1.5 text-brand-emerald" /> Ahorro económico en costos
                </span>
                <p className="text-3xl font-black text-emerald-400">
                  ${annualMoneySaved.toLocaleString()} USD / año
                </p>
                <p className="text-[11px] text-slate-400">
                  Menos horas extras, compras duplicadas y errores de inventario.
                </p>
              </div>

              {/* Stat 3: Errors */}
              <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/70 text-xs flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-brand-emerald flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">+{errorReductionPercentage}% reducción de errores</p>
                  <p className="text-[10px] text-slate-300">En cuentas por cobrar y cuadres de caja.</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-brand-navy-950 bg-gradient-to-r from-brand-cyan to-brand-emerald hover:opacity-95 shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <span>Empieza a ahorrar con ArivSoft</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

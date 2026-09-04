"use client";

import React from "react";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Play,
  MessageCircle,
  Zap,
  Globe2,
  Lock,
  Layers
} from "lucide-react";
import { APP_CONFIG } from "@/data/content";
import { InteractiveDashboard } from "./InteractiveDashboard";

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Dynamic Background Glows matching ArivSoft Colors */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-blue/15 via-brand-cyan/20 to-brand-emerald/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-brand-emerald/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-60 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-brand-cyan/30 text-xs sm:text-sm font-semibold text-brand-navy">
            <span className="flex h-2 w-2 rounded-full bg-brand-emerald animate-pulse" />
            <span className="text-slate-700">El Software ERP #1 para Empresas que quieren Crecer</span>
            <span className="text-brand-cyan font-bold">•</span>
            <span className="text-brand-emerald-dark font-bold">100% en la Nube</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy-950 leading-[1.15]">
            El ERP en la nube que{" "}
            <span className="text-gradient-cyan-emerald">transforma</span> la administración de tu empresa
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Centraliza <strong className="text-brand-navy font-semibold">ventas & POS</strong>,{" "}
            <strong className="text-brand-navy font-semibold">órdenes de compra & recepciones</strong>,{" "}
            <strong className="text-brand-navy font-semibold">control de inventario & valuación</strong> y{" "}
            <strong className="text-brand-navy font-semibold">cuentas & finanzas multimoneda</strong> en una plataforma ultrarrápida, moderna e intuitiva.
          </p>

          {/* Value Highlights Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs sm:text-sm text-slate-600 font-medium">
            <span className="flex items-center bg-white/80 px-3 py-1 rounded-full border border-slate-200 shadow-xs">
              <CheckCircle className="w-4 h-4 text-brand-emerald mr-1.5" /> Sin hojas de Excel rotas
            </span>
            <span className="flex items-center bg-white/80 px-3 py-1 rounded-full border border-slate-200 shadow-xs">
              <CheckCircle className="w-4 h-4 text-brand-emerald mr-1.5" /> Multimoneda (USD / Bs. / Divisas)
            </span>
            <span className="flex items-center bg-white/80 px-3 py-1 rounded-full border border-slate-200 shadow-xs">
              <CheckCircle className="w-4 h-4 text-brand-emerald mr-1.5" /> Implementación en 24h
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-brand hover:opacity-95 shadow-xl hover:shadow-glow-cyan rounded-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Comenzar Prueba Gratis (14 días)</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <a
              href={`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(APP_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-brand-navy bg-white hover:bg-slate-50 border border-slate-300/90 shadow-sm rounded-xl transition-all hover:border-brand-cyan"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600 mr-2" />
              <span>Hablar con un Asesor</span>
            </a>
          </div>

          {/* Small Sub-cta Note */}
          <p className="text-xs text-slate-500 pt-1">
            ⚡ Configuración rápida • Sin tarjeta de crédito • Acompañamiento personalizado 24/7
          </p>
        </div>

        {/* Live Interactive ERP Dashboard Preview Section */}
        <div id="demo-interactive" className="mt-12 sm:mt-16 relative">
          {/* Decorative badge above mockup */}
          <div className="text-center mb-4">
            <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-brand-navy text-brand-cyan-light shadow-sm">
              <Zap className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Simulador en Vivo: Interactúa con el sistema a continuación</span>
            </span>
          </div>

          <InteractiveDashboard />
        </div>

        {/* Trust & Security Badges below mockup */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-white/70 border border-slate-200/80 shadow-xs flex items-center justify-center space-x-3">
            <Globe2 className="w-5 h-5 text-brand-blue" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">100% en la Nube</p>
              <p className="text-[11px] text-slate-500">Acceso PC, Mac y Móvil</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-slate-200/80 shadow-xs flex items-center justify-center space-x-3">
            <Lock className="w-5 h-5 text-brand-emerald" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">Cifrado Bancario 256-bit</p>
              <p className="text-[11px] text-slate-500">Datos blindados y seguros</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-slate-200/80 shadow-xs flex items-center justify-center space-x-3">
            <Zap className="w-5 h-5 text-brand-cyan" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">99.9% Disponibilidad</p>
              <p className="text-[11px] text-slate-500">Sin caídas ni interrupciones</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-slate-200/80 shadow-xs flex items-center justify-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-brand-navy" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">Soporte Dedicado 24/7</p>
              <p className="text-[11px] text-slate-500">WhatsApp, chat y llamada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { APP_CONFIG } from "@/data/content";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    APP_CONFIG.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative max-w-xs p-3 rounded-2xl bg-white shadow-xl border border-slate-200 text-xs text-slate-700 animate-float hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center space-x-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="font-bold text-brand-navy">Asesor ArivSoft en línea</p>
          </div>
          <p className="text-[11px] text-slate-500 leading-snug">
            ¿Necesitas una cotización o tienes dudas? Escríbenos por WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
          WhatsApp Directo
        </span>
      </a>
    </div>
  );
};

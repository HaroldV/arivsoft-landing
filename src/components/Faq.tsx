"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/content";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { APP_CONFIG } from "@/data/content";

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-brand-navy border border-slate-200 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Resolvemos tus Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-950">
            Preguntas frecuentes sobre ArivSoft ERP
          </h2>
          <p className="text-base text-slate-600">
            Todo lo que necesitas saber antes de comenzar tu prueba gratuita de 14 días.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-slate-50/80 border-brand-cyan/40 shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-brand-navy-950">{item.question}</span>
                  <div
                    className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform ${
                      isOpen ? "rotate-180 bg-brand-navy text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-brand-navy-950 to-brand-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">¿Tienes alguna pregunta específica?</h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Nuestro equipo técnico y comercial te responde en menos de 5 minutos por WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(APP_CONFIG.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-brand-navy-950 bg-gradient-to-r from-brand-cyan to-brand-emerald hover:opacity-95 shadow-md flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-brand-navy-950" />
            <span>Chat por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

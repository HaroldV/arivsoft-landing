"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, CheckCircle2, ArrowRight, Sparkles, Building, Mail, Phone, User, ShieldCheck } from "lucide-react";
import { APP_CONFIG } from "@/data/content";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "retail",
    employees: "1-5",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // After 2.5 seconds, redirect user to the app login / register page
    setTimeout(() => {
      window.open(APP_CONFIG.registerUrl, "_blank");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200/80 overflow-hidden">
        {/* Top subtle gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-brand" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <div className="h-10 w-auto">
                  <Image
                    src="/logo.png"
                    alt="ArivSoft Solutions Logo"
                    width={180}
                    height={46}
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>14 Días Gratis</span>
                </div>
              </div>
              <h3 className="text-2xl font-black text-brand-navy-950">
                Activa tu cuenta de ArivSoft ERP
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Completa los datos de tu empresa para configurar tu entorno en la nube en menos de 2 minutos.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nombre y Apellido</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nombre de la Empresa</label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Ej. Inversiones El Sol"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">WhatsApp / Teléfono</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="Ej. +58 412 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Correo Electrónico Corporativo</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="carlos@tuempresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Rubro / Industria</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-cyan text-slate-800 bg-white"
                  >
                    <option value="retail">Comercio & Retail</option>
                    <option value="supermarket">Supermercado / Bodegón</option>
                    <option value="restaurant">Restaurante / Alimentos</option>
                    <option value="wholesale">Mayorista & Distribución</option>
                    <option value="health">Farmacia & Salud</option>
                    <option value="services">Servicios Profesionales</option>
                    <option value="other">Otro Rubro</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tamaño del Equipo</label>
                  <select
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-cyan text-slate-800 bg-white"
                  >
                    <option value="1-5">1 a 5 personas</option>
                    <option value="6-20">6 a 20 personas</option>
                    <option value="21-50">21 a 50 personas</option>
                    <option value="50+">Más de 50 personas</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-brand hover:opacity-95 shadow-md hover:shadow-glow-cyan transition-all flex items-center justify-center space-x-2 mt-2"
              >
                <span>Acceder a la Plataforma ArivSoft</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald mr-1" />
                Tus datos están protegidos y no compartimos información con terceros.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-emerald mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-brand-navy-950">
              ¡Bienvenido a ArivSoft Solutions!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Hemos registrado la solicitud para <strong>{formData.companyName}</strong>. Te estamos redirigiendo a la plataforma en la nube...
            </p>
            <div className="pt-2">
              <a
                href={APP_CONFIG.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-brand shadow-md"
              >
                <span>Ir al Sistema Ahora Mismo</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

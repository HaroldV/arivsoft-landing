"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Globe, Mail, Phone, MapPin, Heart } from "lucide-react";
import { APP_CONFIG } from "@/data/content";

interface FooterProps {
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  return (
    <footer className="bg-brand-navy-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
                <Image
                  src="/logo.png"
                  alt="ArivSoft Solutions Logo"
                  width={240}
                  height={62}
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              <strong>ArivSoft Solutions</strong> es la plataforma de gestión empresarial (ERP) en la nube diseñada para acelerar y automatizar ventas, inventario, compras, tesorería y nómina con precisión y simplicidad.
            </p>
            <div className="flex items-center space-x-3 text-xs text-brand-cyan-light font-semibold pt-1">
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-brand-emerald mr-1" /> Servidores Cloud Seguros
              </span>
              <span>•</span>
              <span>Disponibilidad 99.9%</span>
            </div>
          </div>

          {/* Módulos */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Módulos ERP</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#modulos" className="hover:text-white transition-colors">Ventas & Punto de Venta POS</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Compras & Notas de Recepción</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Control de Inventario & Valuación</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Cuentas, Bancos & CxC/CxP</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Reportes Financieros y Analítica BI</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Nómina & Recursos Humanos</a></li>
            </ul>
          </div>

          {/* Industrias & Herramientas */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Soluciones</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#industrias" className="hover:text-white transition-colors">Comercio & Retail</a></li>
              <li><a href="#industrias" className="hover:text-white transition-colors">Supermercados</a></li>
              <li><a href="#industrias" className="hover:text-white transition-colors">Restaurantes & Alimentos</a></li>
              <li><a href="#industrias" className="hover:text-white transition-colors">Mayoristas & Distribución</a></li>
              <li><a href="#industrias" className="hover:text-white transition-colors">Farmacias & Salud</a></li>
              <li><a href="#roi" className="hover:text-white transition-colors">Calculadora de ROI</a></li>
            </ul>
          </div>

          {/* Contacto & Acceso */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Acceso & Contacto</p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href={APP_CONFIG.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-cyan-light hover:text-white transition-colors"
                >
                  → Iniciar Sesión en ArivSoft
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDemo}
                  className="font-bold text-brand-emerald-light hover:text-white transition-colors"
                >
                  → Solicitar Demo Gratuita
                </button>
              </li>
              <li className="flex items-center space-x-2 pt-1 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span>contacto@arivsoft.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400">
                <Globe className="w-3.5 h-3.5 text-brand-emerald" />
                <span>www.arivsoft.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} ArivSoft Solutions C.A. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-slate-300">Términos de Servicio</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Política de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Seguridad Cloud</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

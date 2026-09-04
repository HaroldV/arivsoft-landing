"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Sparkles, ChevronRight, ShieldCheck } from "lucide-react";
import { APP_CONFIG } from "@/data/content";

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Módulos", href: "#modulos" },
    { label: "Industrias", href: "#industrias" },
    { label: "Calculadora ROI", href: "#roi" },
    { label: "Comparativa", href: "#comparativa" },
    { label: "Planes", href: "#planes" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-navy-950 via-brand-navy-800 to-brand-navy-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-brand-cyan/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-gradient-to-r from-brand-cyan to-brand-emerald text-white">
              <Sparkles className="w-3 h-3 mr-1" /> Nuevo
            </span>
            <span className="text-slate-200">
              Potencia tu empresa con el ERP en la nube más ágil y completo.
            </span>
            <a
              href={APP_CONFIG.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center text-brand-emerald-light hover:text-white font-medium underline underline-offset-2 ml-1"
            >
              Accede a la plataforma <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xs text-slate-300">
            <span className="flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald mr-1" /> Seguridad Bancaria 256-bit
            </span>
            <span className="text-slate-500">|</span>
            <a
              href={`https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(APP_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Ventas: WhatsApp Directo
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card-soft border-b border-slate-200/80 py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-200/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-12 sm:h-14 w-auto flex items-center py-0.5">
                <Image
                  src="/logo.png"
                  alt="ArivSoft Solutions Logo"
                  width={240}
                  height={62}
                  priority
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-brand-navy hover:bg-slate-100/70 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={APP_CONFIG.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors"
              >
                Iniciar Sesión
              </a>
              <a
                href={APP_CONFIG.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-brand hover:opacity-95 shadow-md hover:shadow-glow-cyan rounded-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Acceder al Sistema</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href={APP_CONFIG.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-brand rounded-lg shadow-sm"
              >
                Ingresar
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-brand-navy hover:bg-slate-100 focus:outline-none"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:text-brand-navy hover:bg-slate-50 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2.5">
              <a
                href={APP_CONFIG.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-sm font-semibold text-brand-navy bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                Iniciar Sesión en ArivSoft
              </a>
              <a
                href={APP_CONFIG.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-semibold text-white bg-gradient-brand rounded-xl shadow-md"
              >
                Ingresar a la Plataforma ArivSoft
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

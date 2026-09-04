"use client";

import React, { useState } from "react";
import {
  Boxes,
  ShoppingCart,
  Truck,
  Landmark,
  ShieldCheck,
  Search,
  Bell,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Layers,
  FileText,
  KeyRound,
  Store,
  UserCheck
} from "lucide-react";

export const InteractiveDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ventas" | "compras" | "inventario" | "cuentas">("ventas");
  const [currency, setCurrency] = useState<"USD" | "BS">("USD");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const exchangeRate = 58.4; // 1 USD = 58.40 Bs

  const formatAmount = (usdVal: number) => {
    if (currency === "USD") {
      return `$${usdVal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      const bsVal = usdVal * exchangeRate;
      return `Bs. ${bsVal.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl bg-brand-navy-950 p-2 sm:p-3 shadow-2xl border border-slate-700/50 relative overflow-hidden group">
      {/* Ambient background glow inside the frame */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />

      {/* Frame Top Bar (Mac style buttons + URL mock) */}
      <div className="bg-brand-navy-900/90 rounded-t-xl px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs text-slate-300">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="hidden sm:inline-block text-slate-500 font-mono text-[11px] ml-2">
            https://app.arivsoft.com/panel/operaciones
          </span>
        </div>

        {/* Currency Switcher & Rate Badge */}
        <div className="flex items-center space-x-2">
          <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] bg-brand-navy-800 text-slate-300 border border-slate-700">
            Tasa Oficial: Bs. 58.40 / USD
          </span>
          <div className="inline-flex rounded-lg bg-brand-navy-800 p-0.5 border border-slate-700">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                currency === "USD"
                  ? "bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-navy-950 font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              USD $
            </button>
            <button
              onClick={() => setCurrency("BS")}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                currency === "BS"
                  ? "bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-navy-950 font-bold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Bs. Oficial
            </button>
          </div>
          <button
            onClick={handleRefresh}
            title="Actualizar datos"
            className="p-1.5 text-slate-400 hover:text-brand-cyan rounded-md hover:bg-brand-navy-800 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-brand-emerald" : ""}`} />
          </button>
        </div>
      </div>

      {/* Main Internal ERP Layout */}
      <div className="bg-slate-900/95 rounded-b-xl border-t border-slate-800 text-slate-100 flex flex-col md:flex-row min-h-[520px]">
        {/* Mock ERP Sidebar with the 4 Modules */}
        <aside className="w-full md:w-60 bg-brand-navy-950/80 border-b md:border-b-0 md:border-r border-slate-800/80 p-3 flex flex-col justify-between">
          <div className="space-y-4">
            {/* User Company pill */}
            <div className="flex items-center space-x-2.5 px-2.5 py-2 rounded-xl bg-brand-navy-900/90 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center font-bold text-white text-xs shadow-glow-cyan">
                AS
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-white truncate">ArivSoft ERP Core</p>
                <p className="text-[10px] text-brand-emerald-light flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald inline-block mr-1"></span>
                  4 Módulos Habilitados
                </p>
              </div>
            </div>

            {/* Navigation Tabs corresponding to the 4 modules */}
            <div className="space-y-1">
              {/* 1. Ventas */}
              <button
                onClick={() => setActiveTab("ventas")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "ventas"
                    ? "bg-gradient-to-r from-brand-blue/30 to-brand-cyan/20 text-brand-cyan-light border-l-2 border-brand-cyan font-semibold"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Ventas & POS</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-navy-800 text-slate-300">7 sub</span>
              </button>

              {/* 2. Compras */}
              <button
                onClick={() => setActiveTab("compras")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "compras"
                    ? "bg-gradient-to-r from-brand-blue/30 to-brand-cyan/20 text-brand-cyan-light border-l-2 border-brand-cyan font-semibold"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Truck className="w-4 h-4" />
                  <span>Compras & Facturas</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-navy-800 text-slate-300">5 sub</span>
              </button>

              {/* 3. Control de Inventario */}
              <button
                onClick={() => setActiveTab("inventario")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "inventario"
                    ? "bg-gradient-to-r from-brand-blue/30 to-brand-cyan/20 text-brand-cyan-light border-l-2 border-brand-cyan font-semibold"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Boxes className="w-4 h-4" />
                  <span>Control de Inventario</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-navy-800 text-slate-300">7 sub</span>
              </button>

              {/* 4. Cuentas */}
              <button
                onClick={() => setActiveTab("cuentas")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "cuentas"
                    ? "bg-gradient-to-r from-brand-blue/30 to-brand-cyan/20 text-brand-cyan-light border-l-2 border-brand-cyan font-semibold"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Landmark className="w-4 h-4" />
                  <span>Cuentas & Finanzas</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-navy-800 text-brand-cyan">6 sub</span>
              </button>
            </div>
          </div>

          {/* AI Assistant Callout */}
          <div className="mt-4 p-2.5 rounded-xl bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-slate-900 border border-brand-cyan/30 text-xs">
            <div className="flex items-center space-x-1.5 text-brand-cyan-light font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
              <span>ArivSoft Operations</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Permisos y submódulos asignados por rol con sincronización inmediata.
            </p>
          </div>
        </aside>

        {/* Main Content Pane */}
        <main className="flex-1 p-3 sm:p-5 flex flex-col justify-between space-y-4">
          {/* Header inside ERP */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
            <div>
              <h4 className="text-base font-bold text-white flex items-center">
                {activeTab === "ventas" && "Ventas (Punto de Venta & Operaciones)"}
                {activeTab === "compras" && "Compras (Órdenes, Recepciones & Facturas)"}
                {activeTab === "inventario" && "Control de Inventario (Catálogo & Stock)"}
                {activeTab === "cuentas" && "Cuentas (Bancos, CxC, CxP & Historial)"}
              </h4>
              <p className="text-xs text-slate-400">
                Módulo en Plan • Sincronización en tiempo real con base de datos en la nube
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar en el sistema..."
                  className="bg-brand-navy-900 text-xs text-slate-200 pl-8 pr-3 py-1.5 rounded-lg border border-slate-700/80 focus:outline-none focus:border-brand-cyan w-36 sm:w-48"
                  readOnly
                  value=""
                />
              </div>
              <div className="p-1.5 rounded-lg bg-brand-navy-900 border border-slate-700 text-slate-300">
                <Bell className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* TAB 1: VENTAS */}
          {activeTab === "ventas" && (
            <div className="space-y-3">
              {/* Submodules Badges Strip */}
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-cyan-300 border border-slate-700">Punto de Venta</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Facturación de Venta</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Cotizaciones</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Notas de Pedido</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Notas de Entrega</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Clientes</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-emerald-300 border border-slate-700">Turnos y Arqueos</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Ventas de Hoy</span>
                  <p className="text-base font-bold text-white">{formatAmount(4850)}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Facturas & Tickets</span>
                  <p className="text-base font-bold text-brand-emerald">142 emitidos</p>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Arqueo de Turno</span>
                  <p className="text-base font-bold text-cyan-300">Turno 01 Cuadrado</p>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-brand-navy-900/90">
                <table className="w-full text-left text-xs">
                  <thead className="bg-brand-navy-950/80 text-[11px] text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3">Código</th>
                      <th className="py-2.5 px-3">Submódulo</th>
                      <th className="py-2.5 px-3">Cliente</th>
                      <th className="py-2.5 px-3">Monto USD</th>
                      <th className="py-2.5 px-3">Permiso</th>
                      <th className="py-2.5 px-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-200">
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">POS-0089</td>
                      <td className="py-2 px-3 font-medium text-white">Punto de Venta</td>
                      <td className="py-2 px-3">Consumidor Final</td>
                      <td className="py-2 px-3 font-semibold text-emerald-400">$45.00</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">pos:create</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Cobrado
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">FAC-001092</td>
                      <td className="py-2 px-3 font-medium text-white">Facturación Venta</td>
                      <td className="py-2 px-3">Distribuidora Los Andes</td>
                      <td className="py-2 px-3 font-semibold text-emerald-400">$420.00</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">sales:invoicing</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Facturada
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">PED-000418</td>
                      <td className="py-2 px-3 font-medium text-white">Notas de Pedido</td>
                      <td className="py-2 px-3">Farmacia San José</td>
                      <td className="py-2 px-3 font-semibold text-white">$1,250.00</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">sales:orders</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Preparando
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">ENT-000295</td>
                      <td className="py-2 px-3 font-medium text-white">Notas de Entrega</td>
                      <td className="py-2 px-3">Inversiones Miranda</td>
                      <td className="py-2 px-3 font-semibold text-white">$890.00</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">sales:deliveries</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          En Despacho
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: COMPRAS */}
          {activeTab === "compras" && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-cyan-300 border border-slate-700">Órdenes de Compra</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Notas de Recepción</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Registrar Compra</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Facturación de Compra</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-emerald-300 border border-slate-700">Proveedores</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Compras del Mes</span>
                  <p className="text-base font-bold text-white">{formatAmount(18400)}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Órdenes Pendientes</span>
                  <p className="text-base font-bold text-amber-400">4 por recibir</p>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Proveedores Registrados</span>
                  <p className="text-base font-bold text-cyan-300">28 activos</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-brand-navy-900/90">
                <table className="w-full text-left text-xs">
                  <thead className="bg-brand-navy-950/80 text-[11px] text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3">Código</th>
                      <th className="py-2.5 px-3">Submódulo</th>
                      <th className="py-2.5 px-3">Proveedor</th>
                      <th className="py-2.5 px-3">Monto USD</th>
                      <th className="py-2.5 px-3">Permiso</th>
                      <th className="py-2.5 px-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-200">
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">OC-00452</td>
                      <td className="py-2 px-3 font-medium text-white">Órdenes de Compra</td>
                      <td className="py-2 px-3">Importadora Continental</td>
                      <td className="py-2 px-3 font-semibold">$3,450.00</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">purchases:orders</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Aprobada
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">REC-00189</td>
                      <td className="py-2 px-3 font-medium text-white">Notas de Recepción</td>
                      <td className="py-2 px-3">Manufacturas del Centro</td>
                      <td className="py-2 px-3 font-semibold">$1,890.00</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">purchases:receptions</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          100% Recibido
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">FC-00892</td>
                      <td className="py-2 px-3 font-medium text-white">Facturación de Compra</td>
                      <td className="py-2 px-3">Distribuidora Química</td>
                      <td className="py-2 px-3 font-semibold text-rose-400">$5,200.00</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">purchases:invoices</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          Por Pagar 15d
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: INVENTARIO */}
          {activeTab === "inventario" && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-cyan-300 border border-slate-700">Crear Productos</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Listado de Productos</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-emerald-300 border border-slate-700">Actualizar Precios Masivo</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Valuación de Inventario</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Almacenes</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Categorías</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Movimientos</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Valuación Contable</span>
                  <p className="text-base font-bold text-white">{formatAmount(48920)}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Productos Activos</span>
                  <p className="text-base font-bold text-brand-cyan">1,840 SKUs</p>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Depósitos / Almacenes</span>
                  <p className="text-base font-bold text-brand-emerald">3 Conectados</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-brand-navy-900/90">
                <table className="w-full text-left text-xs">
                  <thead className="bg-brand-navy-950/80 text-[11px] text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3">SKU</th>
                      <th className="py-2.5 px-3">Submódulo</th>
                      <th className="py-2.5 px-3">Producto</th>
                      <th className="py-2.5 px-3">Stock / Almacén</th>
                      <th className="py-2.5 px-3">Permiso</th>
                      <th className="py-2.5 px-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-200">
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">SKU-9901</td>
                      <td className="py-2 px-3 font-medium text-white">Listado de Productos</td>
                      <td className="py-2 px-3">Aceite Sintético 5W30</td>
                      <td className="py-2 px-3 font-bold text-emerald-400">142 unids (Principal)</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">inventory:stock</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Óptimo
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">ACT-PRE-02</td>
                      <td className="py-2 px-3 font-medium text-white">Actualizar Precios Masivo</td>
                      <td className="py-2 px-3">Categoría Filtros (+8%)</td>
                      <td className="py-2 px-3 text-slate-300">32 SKUs modificados</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">inventory:bulk_prices</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          Actualizado
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-cyan-400">MOV-00084</td>
                      <td className="py-2 px-3 font-medium text-white">Movimientos</td>
                      <td className="py-2 px-3">Traslado de Baterías 12V</td>
                      <td className="py-2 px-3 text-slate-300">Central → Valencia</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">inventory:moves</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Transferido
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: CUENTAS */}
          {activeTab === "cuentas" && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-cyan-300 border border-slate-700">Cuentas Bancarias</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Cuentas por Cobrar (CxC)</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Cuentas por Pagar (CxP)</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Historial Financiero</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-emerald-300 border border-slate-700">Reportes y Analítica BI</span>
                <span className="px-2 py-0.5 rounded bg-brand-navy-900 text-slate-300 border border-slate-700">Nómina & RRHH</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Saldo en Bancos</span>
                  <p className="text-base font-bold text-white">{formatAmount(32840)}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Cuentas por Cobrar</span>
                  <p className="text-base font-bold text-brand-emerald">{formatAmount(12450)}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-navy-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Cuentas por Pagar</span>
                  <p className="text-base font-bold text-amber-400">{formatAmount(6210)}</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-brand-navy-900/90">
                <table className="w-full text-left text-xs">
                  <thead className="bg-brand-navy-950/80 text-[11px] text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3">Cuenta / Registro</th>
                      <th className="py-2.5 px-3">Submódulo</th>
                      <th className="py-2.5 px-3">Moneda</th>
                      <th className="py-2.5 px-3">Saldo / Monto</th>
                      <th className="py-2.5 px-3">Permiso</th>
                      <th className="py-2.5 px-3">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-200">
                    <tr>
                      <td className="py-2 px-3 font-semibold text-white">Banesco Banco Universal</td>
                      <td className="py-2 px-3 font-medium text-cyan-400">Cuentas Bancarias</td>
                      <td className="py-2 px-3 font-bold text-slate-300">Bs.</td>
                      <td className="py-2 px-3 font-mono">Bs. 842,500.00</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">banks:accounts</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Conciliado
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-white">Crédito Inversiones Miranda</td>
                      <td className="py-2 px-3 font-medium text-cyan-400">Cuentas por Cobrar (CxC)</td>
                      <td className="py-2 px-3 font-bold text-slate-300">USD</td>
                      <td className="py-2 px-3 font-mono text-emerald-400">$890.00</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">accounts:receivables</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          Vence en 8d
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-white">Reporte P&L Mensual</td>
                      <td className="py-2 px-3 font-medium text-cyan-400">Reportes y Analítica</td>
                      <td className="py-2 px-3 font-bold text-slate-300">USD</td>
                      <td className="py-2 px-3 font-mono text-brand-emerald">+$16,940.00 Neta</td>
                      <td className="py-2 px-3 font-mono text-[10px] text-slate-400">reports:view</td>
                      <td className="py-2 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Auditable
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Interactive Footer banner of the Mockup */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
              <span>Visualizador interactivo de los 4 módulos del ERP ArivSoft.</span>
            </span>
            <span className="text-brand-cyan-light font-medium">
              Haz clic en cualquier módulo de la barra lateral para ver su desglose ↗
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

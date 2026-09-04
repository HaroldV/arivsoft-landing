export interface SubmoduleItem {
  name: string;
  description: string;
  permissionKey: string;
  badge?: string;
}

export interface FeatureModule {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  badge: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  highlights: string[];
  submodules: SubmoduleItem[];
  keyStats: { label: string; value: string }[];
  previewDetails: {
    title: string;
    metrics: { label: string; value: string; change?: string; positive?: boolean }[];
    tableHeaders: string[];
    tableRows: { [key: string]: string }[];
  };
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  painPoint: string;
  solution: string;
  tag: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  scope: string;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaType: "primary" | "secondary" | "dark";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  rating: number;
  avatar: string;
  quote: string;
  metricHighlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "funciones" | "migracion" | "seguridad" | "pagos";
}

export const APP_CONFIG = {
  appName: "ArivSoft Solutions",
  shortName: "ArivSoft",
  appUrl: "https://arivsoft.com",
  loginUrl: "https://arivsoft.com",
  registerUrl: "https://arivsoft.com",
  demoUrl: "https://arivsoft.com",
  whatsappNumber: "584120000000",
  whatsappMessage: "¡Hola ArivSoft! Me interesa conocer más sobre la plataforma ERP y solicitar una demostración personalizada.",
  supportEmail: "soporte@arivsoft.com",
  salesEmail: "ventas@arivsoft.com",
};

export const HERO_METRICS = [
  { value: "+50,000", label: "Transacciones procesadas", detail: "cada mes sin retrasos" },
  { value: "99.8%", label: "Precisión de inventario", detail: "en almacenes y sucursales" },
  { value: "-15 hrs", label: "Tiempo ahorrado", detail: "semanal en administración" },
  { value: "98.7%", label: "Satisfacción", detail: "de clientes y contadores" },
];

export const PAIN_POINTS = [
  {
    before: "Hojas de Excel con fórmulas rotas y datos desfasados que nadie entiende.",
    after: "Base de datos en la nube única, sincronizada al segundo entre sucursales.",
    icon: "FileSpreadsheet"
  },
  {
    before: "Inventario 'fantasma': no saber qué tienes hasta que el cliente va a pagar.",
    after: "Control de stock en tiempo real con alertas automáticas de reposición y valuación.",
    icon: "PackageSearch"
  },
  {
    before: "Descuadres entre bolívares, dólares, transferencias y pagos móviles en caja.",
    after: "Turnos y arqueos de caja precisos con gestión multimoneda nativa y bancos.",
    icon: "Coins"
  },
  {
    before: "Cuentas por cobrar olvidadas y flujo de caja en números rojos por falta de orden.",
    after: "Control exacto de CxC, CxP, historial financiero y cobros programados.",
    icon: "ReceiptAlert"
  },
  {
    before: "Precios desactualizados que te hacen perder dinero frente a la inflación.",
    after: "Herramienta de actualización masiva de precios por categorías o porcentaje.",
    icon: "TrendingUp"
  },
  {
    before: "Desorden en recepciones de mercancía y facturas de proveedores sin auditar.",
    after: "Circuito completo: Órdenes de compra → Notas de recepción → Factura de compra.",
    icon: "Truck"
  }
];

export const ERP_MODULES: FeatureModule[] = [
  {
    id: "ventas",
    name: "Ventas (Punto de Venta & Operaciones)",
    shortName: "Ventas & POS",
    tagline: "Punto de venta táctil, facturación rápida, cotizaciones y control de turnos de caja",
    badge: "7 Submódulos",
    icon: "ShoppingCart",
    color: "from-blue-600 to-cyan-500",
    gradient: "bg-gradient-to-r from-blue-600 to-cyan-500",
    description: "Gestiona el ciclo comercial completo: desde la emisión de cotizaciones y pedidos hasta el despacho con notas de entrega, facturación fiscal/digital y arqueos de turnos de caja.",
    highlights: [
      "Punto de Venta (POS) ultrarrápido con soporte para lectores y pantallas táctiles",
      "Facturación de Venta multimoneda en Bolívares y Dólares con conversión en tiempo real",
      "Cotizaciones convertibles a facturas o pedidos en 1 solo clic",
      "Control de Notas de Pedido y Notas de Entrega para logística y despachos",
      "Directorio completo de clientes con historial de compras y límites de crédito",
      "Apertura, cierre y arqueos de turnos de caja por cajero y sucursal"
    ],
    submodules: [
      {
        name: "Punto de Venta",
        description: "Acceso al módulo POS de caja y facturación rápida para atención ágil al público.",
        permissionKey: "pos:create",
        badge: "Caja Rápida"
      },
      {
        name: "Facturación de Venta",
        description: "Módulo de emisión, anulación y consulta de facturas de venta fiscales y digitales.",
        permissionKey: "sales:invoicing",
        badge: "Comprobantes"
      },
      {
        name: "Cotizaciones",
        description: "Emisión, seguimiento y conversión de cotizaciones comerciales a ventas.",
        permissionKey: "sales:quotations",
        badge: "Comercial"
      },
      {
        name: "Notas de Pedido",
        description: "Gestión de pedidos de venta, pedidos en espera y programación de despacho.",
        permissionKey: "sales:orders",
        badge: "Pedidos"
      },
      {
        name: "Notas de Entrega",
        description: "Control de despachos de mercancía, guías de traslado y firmas de recepción.",
        permissionKey: "sales:deliveries",
        badge: "Despachos"
      },
      {
        name: "Clientes",
        description: "Directorio, gestión del catálogo de clientes, límites de crédito y listas de precios.",
        permissionKey: "clients:manage",
        badge: "CRM"
      },
      {
        name: "Turnos y Arqueos",
        description: "Apertura, control de fondo de caja, arqueos intermedios y cierre de turnos.",
        permissionKey: "pos:shifts",
        badge: "Auditoría Caja"
      }
    ],
    keyStats: [
      { label: "Tiempo por venta", value: "< 5 seg" },
      { label: "Cuadre de caja", value: "100% exacto" }
    ],
    previewDetails: {
      title: "Punto de Venta & Facturación - Turno Activo",
      metrics: [
        { label: "Ventas Totales Hoy", value: "$4,850.00", change: "+18.4%", positive: true },
        { label: "Tickets & Facturas", value: "142 emitidas", change: "+12", positive: true },
        { label: "Efectivo en Caja", value: "$1,320.00", change: "Bs. 77,088", positive: true },
        { label: "Arqueo de Turno", value: "Cuadrado", change: "Turno T-01", positive: true }
      ],
      tableHeaders: ["Comprobante", "Cliente", "Submódulo", "Monto USD", "Monto Bs.", "Estado"],
      tableRows: [
        { col1: "FAC-001092", col2: "Distribuidora Los Andes", col3: "Facturación Venta", col4: "$420.00", col5: "Bs. 24,528.00", col6: "Pagada" },
        { col1: "PED-000418", col2: "Farmacia San José", col3: "Nota de Pedido", col4: "$1,250.00", col5: "Bs. 73,000.00", col6: "En Preparación" },
        { col1: "ENT-000295", col2: "Inversiones Miranda", col3: "Nota de Entrega", col4: "$890.00", col5: "Bs. 51,976.00", col6: "Despachado" },
        { col1: "COT-000910", col2: "Comercializadora Global", col3: "Cotización", col4: "$310.50", col5: "Bs. 18,133.20", col6: "Aprobada" }
      ]
    }
  },
  {
    id: "compras",
    name: "Compras (Órdenes, Recepciones & Facturas)",
    shortName: "Compras & Proveedores",
    tagline: "Circuito integral: desde la orden de compra y recepción en almacén hasta la factura",
    badge: "5 Submódulos",
    icon: "Truck",
    color: "from-blue-700 to-indigo-600",
    gradient: "bg-gradient-to-r from-blue-700 to-indigo-600",
    description: "Supervisa cada gasto y adquisición de mercancía. Emite órdenes de compra con aprobación, verifica la mercancía recibida con notas de recepción y registra facturas de proveedores para un estricto control de costos.",
    highlights: [
      "Órdenes de compra formales con cálculo de impuestos y condiciones de pago",
      "Notas de recepción para verificar cantidades físicas antes de dar entrada a stock",
      "Formulario ágil de Registro de Compra directa",
      "Facturación de Compra para auditoría y control de cuentas por pagar a proveedores",
      "Directorio de proveedores con condiciones comerciales y catálogo de suministros"
    ],
    submodules: [
      {
        name: "Órdenes de Compra",
        description: "Gestión, emisión y flujo de aprobación de órdenes de compra a proveedores.",
        permissionKey: "purchases:orders",
        badge: "Aprobaciones"
      },
      {
        name: "Notas de Recepción",
        description: "Verificación de mercancía física recibida vs orden de compra emitida.",
        permissionKey: "purchases:receptions",
        badge: "Recepción Almacén"
      },
      {
        name: "Registrar Compra",
        description: "Formulario de registro directo e intuitivo de compras y gastos corrientes.",
        permissionKey: "purchases:new",
        badge: "Registro Rápido"
      },
      {
        name: "Facturación de Compra",
        description: "Registro de facturas fiscales de proveedores y control de cuentas por pagar.",
        permissionKey: "purchases:invoices",
        badge: "Control CxP"
      },
      {
        name: "Proveedores",
        description: "Directorio, ficha fiscal, condiciones de pago y catálogo por proveedor.",
        permissionKey: "providers:manage",
        badge: "Catálogo Aliados"
      }
    ],
    keyStats: [
      { label: "Control de entradas", value: "100% verificado" },
      { label: "Ahorro en compras", value: "hasta 12%" }
    ],
    previewDetails: {
      title: "Gestión de Compras y Recepción de Mercancía",
      metrics: [
        { label: "Compras del Mes", value: "$18,400.00", change: "-3.2%", positive: true },
        { label: "Órdenes por Recibir", value: "4 órdenes", change: "En tránsito", positive: true },
        { label: "Notas de Recepción", value: "18 verificadas", change: "Stock cargado", positive: true },
        { label: "Proveedores Activos", value: "28 aliados", change: "Registrados", positive: true }
      ],
      tableHeaders: ["Código", "Proveedor", "Submódulo", "Monto USD", "Condición", "Estado"],
      tableRows: [
        { col1: "OC-00452", col2: "Importadora Continental", col3: "Órdenes de Compra", col4: "$3,450.00", col5: "Crédito 30d", col6: "Aprobada" },
        { col1: "REC-00189", col2: "Manufacturas del Centro", col3: "Notas de Recepción", col4: "$1,890.00", col5: "100% Recibido", col6: "Verificado" },
        { col1: "FC-00892", col2: "Distribuidora Química S.A.", col3: "Facturación Compra", col4: "$5,200.00", col5: "Por Pagar 15d", col6: "Registrada" },
        { col1: "OC-00449", col2: "Empaques y Plásticos C.A.", col3: "Órdenes de Compra", col4: "$720.00", col5: "Contado", col6: "Cerrada" }
      ]
    }
  },
  {
    id: "inventario",
    name: "Control de Inventario (Catálogo & Stock)",
    shortName: "Inventario & Stock",
    tagline: "Catálogo de productos, valuación contable, almacenes y actualización masiva de precios",
    badge: "7 Submódulos",
    icon: "Boxes",
    color: "from-teal-600 to-emerald-500",
    gradient: "bg-gradient-to-r from-teal-600 to-emerald-500",
    description: "Control absoluto de tu stock en tiempo real. Alta de productos, clasificación por categorías, gestión de múltiples almacenes, valuación contable del inventario y actualización masiva de precios.",
    highlights: [
      "Alta ágil de productos con códigos de barra, imágenes y variantes",
      "Listado de productos con consulta de existencias y costos ponderados en vivo",
      "Actualización masiva de precios por lote, porcentaje o categoría con 1 clic",
      "Valuación de inventario con reportes de auditoría y costo de reposición",
      "Gestión de múltiples almacenes físicos, bodegas y sucursales",
      "Registro de movimientos internos: mermas, traslados entre sedes y ajustes"
    ],
    submodules: [
      {
        name: "Crear Productos",
        description: "Alta de nuevos productos en el catálogo con SKU, código de barras y variantes.",
        permissionKey: "inventory:create",
        badge: "Alta Catálogo"
      },
      {
        name: "Listado de Productos",
        description: "Consulta de stock en tiempo real, catálogo completo y listas de precios activas.",
        permissionKey: "inventory:stock",
        badge: "Stock en Vivo"
      },
      {
        name: "Actualizar Precios Masivo",
        description: "Herramienta para ajustar masivamente precios por porcentaje, categoría o tasa cambiaria.",
        permissionKey: "inventory:bulk_prices",
        badge: "Ajuste Masivo"
      },
      {
        name: "Valuación de Inventario",
        description: "Reportes de auditoría contable, costo ponderado y valorización total del stock.",
        permissionKey: "inventory:valuation",
        badge: "Auditoría Stock"
      },
      {
        name: "Almacenes",
        description: "Gestión y configuración de depósitos, almacenes centrales y sucursales.",
        permissionKey: "inventory:warehouse",
        badge: "Multialmacén"
      },
      {
        name: "Categorías",
        description: "Clasificación, rubros y familias de productos para reportes y búsquedas ordenadas.",
        permissionKey: "inventory:categories",
        badge: "Clasificación"
      },
      {
        name: "Movimientos",
        description: "Registro de ajustes de stock, mermas, transferencias entre depósitos y consumos.",
        permissionKey: "inventory:moves",
        badge: "Traslados & Mermas"
      }
    ],
    keyStats: [
      { label: "Actualización de precios", value: "en 30 seg" },
      { label: "Trazabilidad de stock", value: "100% en vivo" }
    ],
    previewDetails: {
      title: "Control de Catálogo, Valuación & Almacenes",
      metrics: [
        { label: "Productos en Catálogo", value: "1,840 SKUs", change: "100% sincronizado", positive: true },
        { label: "Valuación del Inventario", value: "$48,920.00", change: "Costo ponderado", positive: true },
        { label: "Almacenes Activos", value: "3 depósitos", change: "Conectados", positive: true },
        { label: "Movimientos Hoy", value: "34 registros", change: "Traslados y ajustes", positive: true }
      ],
      tableHeaders: ["SKU / Código", "Producto", "Submódulo", "Existencia", "Precio USD", "Estado"],
      tableRows: [
        { col1: "SKU-9901", col2: "Aceite Sintético 5W30 1L", col3: "Listado de Productos", col4: "142 unids", col5: "$12.50", col6: "Óptimo" },
        { col1: "MOV-00219", col2: "Filtro de Aire Universal", col3: "Movimientos (Traslado)", col4: "25 unids", col5: "Principal → Valencia", col6: "Completado" },
        { col1: "LOTE-ACT-04", col2: "Línea Baterías 12V", col3: "Actualizar Precios Masivo", col4: "45 unids", col5: "+5% Ajustado", col6: "Aplicado" },
        { col1: "SKU-9904", col2: "Pastillas de Freno Delanteras", col3: "Valuación Inventario", col4: "4 unids", col5: "$35.00", col6: "Stock Bajo" }
      ]
    }
  },
  {
    id: "cuentas",
    name: "Cuentas (Bancos, CxC, CxP & Historial)",
    shortName: "Cuentas & Finanzas",
    tagline: "Cuentas bancarias, cuentas por cobrar, cuentas por pagar, analítica BI y nómina",
    badge: "Visión 360°",
    icon: "Landmark",
    color: "from-emerald-600 to-teal-500",
    gradient: "bg-gradient-to-r from-emerald-600 to-teal-500",
    description: "Ten control absoluto de la tesorería y liquidez de tu empresa. Administra cuentas bancarias multimoneda, sigue cada crédito a clientes (CxC), compromisos con proveedores (CxP), historial financiero y reportes de analítica ejecutiva.",
    highlights: [
      "Administración y conciliación de cuentas bancarias nacionales e internacionales",
      "Control estricto de Cuentas por Cobrar (CxC) con cálculo de mora y alertas",
      "Control de Cuentas por Pagar (CxP) para calendarizar pagos a proveedores",
      "Historial financiero completo y auditable de cada transacción del negocio",
      "Centro de Reportes y Analítica BI para evaluar ventas, márgenes y rentabilidad",
      "Módulo de Nómina & Recursos Humanos para cálculo de sueldos y liquidaciones"
    ],
    submodules: [
      {
        name: "Cuentas Bancarias",
        description: "Administración de cuentas corrientes, custodias y saldos en Bs. y Divisas.",
        permissionKey: "banks:accounts",
        badge: "Bancos"
      },
      {
        name: "Cuentas por Cobrar (CxC)",
        description: "Control de créditos otorgados a clientes, vencimientos y seguimiento de cobranza.",
        permissionKey: "accounts:receivables",
        badge: "Créditos & Cobros"
      },
      {
        name: "Cuentas por Pagar (CxP)",
        description: "Gestión de compromisos financieros, facturas de compras por pagar y programación.",
        permissionKey: "accounts:payables",
        badge: "Pagos Pendientes"
      },
      {
        name: "Historial Financiero",
        description: "Auditoría cronológica de ingresos, egresos y movimientos de fondos del negocio.",
        permissionKey: "accounts:history",
        badge: "Auditoría"
      },
      {
        name: "Reportes y Analítica",
        description: "Centro de reportes BI con Estado de Resultados (P&L), ventas por rubro y KPIs clave.",
        permissionKey: "reports:view",
        badge: "Business Intelligence"
      },
      {
        name: "Nómina & Recursos Humanos",
        description: "Cálculo y liquidación de sueldos, comisiones del POS y recibos de pago digitales.",
        permissionKey: "payroll:manage",
        badge: "RRHH & Sueldos"
      }
    ],
    keyStats: [
      { label: "Visibilidad de caja", value: "Tiempo Real" },
      { label: "Días de cobro (DSO)", value: "-40%" }
    ],
    previewDetails: {
      title: "Tesorería, Bancos, CxC y Analítica BI",
      metrics: [
        { label: "Saldo Total Bancos", value: "$32,840.00", change: "+9.5%", positive: true },
        { label: "Cuentas por Cobrar (CxC)", value: "$12,450.00", change: "88% al día", positive: true },
        { label: "Cuentas por Pagar (CxP)", value: "$6,210.00", change: "En fecha", positive: true },
        { label: "Reportes BI", value: "P&L Generado", change: "Margen 43.9%", positive: true }
      ],
      tableHeaders: ["Entidad / Registro", "Submódulo", "Moneda", "Monto", "Condición", "Estado"],
      tableRows: [
        { col1: "Banesco Corriente 0134", col2: "Cuentas Bancarias", col3: "Bs.", col4: "Bs. 842,500.00", col5: "$14,426 eq.", col6: "Conciliado" },
        { col1: "Crédito Dist. Los Andes", col2: "Cuentas por Cobrar (CxC)", col3: "USD", col4: "$890.00", col5: "Vence en 8 días", col6: "Por Cobrar" },
        { col1: "Pago Imp. Continental", col2: "Cuentas por Pagar (CxP)", col3: "USD", col4: "$3,450.00", col5: "Programado 15/09", col6: "Aprobado" },
        { col1: "P&L Mes en Curso", col2: "Reportes y Analítica", col3: "USD", col4: "$16,940.00", col5: "Utilidad Neta", col6: "Auditable" }
      ]
    }
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "retail",
    name: "Retail & Comercio",
    icon: "ShoppingBag",
    description: "Tiendas de ropa, calzado, tecnología y accesorios con venta rápida en mostrador.",
    painPoint: "Control por tallas, colores, códigos de barra y arqueo de múltiples cajas.",
    solution: "POS ágil con búsqueda instantánea, variantes de productos y cuadres en minutos.",
    tag: "Comercio Minorista"
  },
  {
    id: "supermercados",
    name: "Supermercados & Bodegones",
    icon: "Store",
    description: "Abastos, supermercados, bodegas y mini-markets de alto volumen de facturación.",
    painPoint: "Miles de SKUs, pesaje de balanza, rotación acelerada y pagos mixtos.",
    solution: "Integración con balanzas, lectores rápidos de códigos y facturación multimoneda fluida.",
    tag: "Alto Volumen"
  },
  {
    id: "restaurantes",
    name: "Restaurantes & Alimentos",
    icon: "Utensils",
    description: "Restaurantes, cafeterías, panaderías, pizzerías y negocios gastronómicos.",
    painPoint: "Control de recetas, mermas de ingredientes y cuentas de mesas divididas.",
    solution: "Descuento automático de insumos según recetas y comandas ordenadas.",
    tag: "Gastronomía"
  },
  {
    id: "mayoristas",
    name: "Mayoristas & Distribuidoras",
    icon: "Building2",
    description: "Distribución de consumo masivo, ferreterías industriales y repuestos.",
    painPoint: "Ventas a crédito, listas de precios por volumen y despachos multialmacén.",
    solution: "Control de límites de crédito, rutas de entrega y cotizaciones mayoristas en 1 clic.",
    tag: "B2B & Logística"
  },
  {
    id: "farmacias",
    name: "Farmacias & Salud",
    icon: "HeartPulse",
    description: "Droguerías, farmacias comunitarias y comercializadoras de insumos médicos.",
    painPoint: "Fechas de caducidad, control de principios activos y lotes regulados.",
    solution: "Trazabilidad completa de lotes con avisos de medicamentos próximos a vencer.",
    tag: "Salud & Cuidados"
  },
  {
    id: "servicios",
    name: "Servicios & Consultoría",
    icon: "Briefcase",
    description: "Agencias, talleres mecánicos, servicios técnicos y firmas profesionales.",
    painPoint: "Facturación recurrente, cobranzas a 30/60 días y control de costos por servicio.",
    solution: "Emisión periódica de facturas, recordatorios automáticos de cobro y P&L por proyecto.",
    tag: "Profesionales"
  }
];

export const COMPARISON_FEATURES = [
  {
    feature: "Punto de Venta POS, Notas de Pedido y Notas de Entrega",
    arivsoft: true,
    excel: false,
    legacyErp: true,
    basicApp: false,
    detail: "Ciclo comercial completo con despacho y control de entregas"
  },
  {
    feature: "Órdenes de Compra, Notas de Recepción y Facturas de Proveedor",
    arivsoft: true,
    excel: false,
    legacyErp: true,
    basicApp: false,
    detail: "Verificación de mercancía física recibida antes de pagar"
  },
  {
    feature: "Actualización Masiva de Precios por categoría o porcentaje",
    arivsoft: true,
    excel: "Manual fórmula por fórmula",
    legacyErp: "Complejo y lento",
    basicApp: false,
    detail: "Ajusta miles de precios en segundos frente a cambios de tasa"
  },
  {
    feature: "Valuación de Inventario contable y múltiples almacenes",
    arivsoft: true,
    excel: false,
    legacyErp: true,
    basicApp: "Muy limitado",
    detail: "Auditoría de stock, costo ponderado y transferencias internas"
  },
  {
    feature: "Gestión de Bancos, CxC, CxP e Historial Financiero",
    arivsoft: true,
    excel: "Riesgo de descuadre",
    legacyErp: true,
    basicApp: false,
    detail: "Conciliación bancaria y flujo de caja proyectado"
  },
  {
    feature: "Turnos y Arqueos de Caja con permisos granulares por cajero",
    arivsoft: true,
    excel: false,
    legacyErp: true,
    basicApp: false,
    detail: "Apertura, arqueos intermedios y cierre de turno blindado"
  },
  {
    feature: "Configuración Fiscal, Timbres y Roles de Usuario",
    arivsoft: true,
    excel: false,
    legacyErp: "Requiere consultoría",
    basicApp: false,
    detail: "Permisos independientes por cajero, vendedor o administrador"
  },
  {
    feature: "Soporte técnico dedicado vía WhatsApp y llamada 24/7",
    arivsoft: true,
    excel: false,
    legacyErp: "Costos adicionales por hora",
    basicApp: "Solo tickets lentos",
    detail: "Acompañamiento humano y migración de datos guiada"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Plan Emprendedor",
    tagline: "Ideal para pequeños comercios y negocios que dan el salto fuera de Excel",
    scope: "1 Sucursal • Hasta 3 usuarios",
    badge: "Para Empezar",
    description: "Control esencial de ventas, inventario y cuentas para 1 sucursal.",
    features: [
      "Hasta 3 usuarios con roles básicos",
      "1 Sucursal / Punto de Venta (POS)",
      "Punto de Venta y Facturación de Venta",
      "Catálogo de productos y lista de precios",
      "Turnos y Arqueos de caja diarios",
      "Cuentas Bancarias básicas y CxC",
      "Multimoneda nativa (USD / Bs. / Moneda local)",
      "Soporte por WhatsApp y Correo"
    ],
    notIncluded: [
      "Múltiples sucursales y almacenes",
      "Actualización masiva de precios",
      "Notas de recepción y pedidos avanzados"
    ],
    ctaText: "Comenzar Prueba Gratis",
    ctaType: "secondary"
  },
  {
    id: "growth",
    name: "Plan Crecimiento & PyME",
    tagline: "La solución más completa para empresas en expansión que buscan control total",
    scope: "Hasta 3 Sucursales • Hasta 10 usuarios",
    popular: true,
    badge: "Más Popular",
    description: "Los 4 módulos completos con inventario multisede, compras, cuentas y reportes.",
    features: [
      "Hasta 10 usuarios incluidos (roles y permisos granulares)",
      "Hasta 3 Sucursales / Almacenes conectados",
      "Ventas: POS, Facturas, Cotizaciones, Pedidos y Notas de Entrega",
      "Compras: Órdenes de Compra, Notas de Recepción y Proveedores",
      "Inventario: Valuación, Movimientos y Actualización Masiva de Precios",
      "Cuentas: Bancos, CxC, CxP, Historial, Reportes BI y Nómina",
      "Configuración Fiscal completa y asignación de cajas",
      "Soporte prioritario 24/7 vía WhatsApp",
      "Migración gratuita de datos desde Excel"
    ],
    ctaText: "Solicitar Demostración",
    ctaType: "primary"
  },
  {
    id: "enterprise",
    name: "Plan Corporativo / Enterprise",
    tagline: "Para medianas y grandes empresas con operaciones a gran escala y múltiples sedes",
    scope: "Sucursales ilimitadas • Usuarios ilimitados",
    badge: "Empresarial",
    description: "Capacidad ilimitada, integraciones API y soporte gerencial dedicado.",
    features: [
      "Usuarios ilimitados con permisos granulares (14+ permisos)",
      "Sucursales y Almacenes ilimitados",
      "Multi-empresa (gestiona varias razones sociales)",
      "Auditoría avanzada de acciones por usuario",
      "Acceso a API para integraciones a medida",
      "Personalización de formatos de impresión y documentos",
      "Gerente de cuenta y asesor contable dedicado",
      "Capacitación personalizada para todo tu equipo",
      "SLA garantizado de 99.95% de disponibilidad"
    ],
    ctaText: "Cotizar Plan a Medida",
    ctaType: "dark"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Ing. Roberto Alarcón",
    role: "Director General",
    company: "Inversiones & Repuestos Alarcón C.A.",
    city: "Caracas",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Con el circuito de Órdenes de Compra y Notas de Recepción logramos verificar cada repuesto antes de pagar a los proveedores. Además, la actualización masiva de precios nos ahorra horas cada semana.",
    metricHighlight: "Control 100% de recepciones"
  },
  {
    id: "test-2",
    name: "Lic. María Elena Carrillo",
    role: "Gerente de Finanzas",
    company: "Cadena de Farmacias La Salud",
    city: "Valencia",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote: "La valuación de inventario y los reportes de CxC nos dieron la claridad financiera que necesitábamos. Los arqueos de turnos de caja en cada sucursal ahora cuadran sin ninguna diferencia.",
    metricHighlight: "Cajas 100% cuadradas"
  },
  {
    id: "test-3",
    name: "David Mendoza",
    role: "Fundador & CEO",
    company: "Gourmet Market & Bistro",
    city: "Lechería",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "El punto de venta es ágil y fácil para los cajeros. La combinación de Notas de Pedido y Notas de Entrega organizó completamente nuestros despachos a domicilio y mostrador.",
    metricHighlight: "< 5 seg por comprobante"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    category: "migracion",
    question: "¿Puedo migrar mi información actual desde Excel u otro sistema administrativo?",
    answer: "¡Sí, totalmente! ArivSoft cuenta con plantillas de importación masiva en Excel para cargar tus productos, inventario inicial, clientes, proveedores y saldos en cuestión de minutos. Además, nuestro equipo técnico te asiste en la migración sin costo adicional."
  },
  {
    id: "faq-2",
    category: "funciones",
    question: "¿Cómo funcionan los turnos y arqueos de caja en el Punto de Venta?",
    answer: "Cada cajero abre su turno con un fondo de caja asignado. Durante el turno, el sistema registra cada venta según el medio de pago (dólares en efectivo, bolívares, pago móvil, tarjeta o transferencias). Al cierre, se emite el arqueo de caja detallado comparando lo registrado contra el conteo físico, evitando cualquier descuadre."
  },
  {
    id: "faq-3",
    category: "funciones",
    question: "¿Qué diferencia hay entre Cotización, Nota de Pedido y Nota de Entrega?",
    answer: "ArivSoft maneja el flujo comercial completo: 1) La Cotización es la propuesta de precios para el cliente; 2) La Nota de Pedido reserva el stock y programa la preparación del pedido; 3) La Nota de Entrega ampara el despacho físico de la mercancía con guía de entrega; y 4) La Factura de Venta formaliza el cobro y la transacción fiscal."
  },
  {
    id: "faq-4",
    category: "funciones",
    question: "¿Cómo ayuda la herramienta de Actualización Masiva de Precios?",
    answer: "Te permite modificar los precios de venta de cientos o miles de productos en segundos: puedes aplicar aumentos o descuentos porcentuales por categoría, cambiar listas de precios mayoristas o ajustar el tipo de cambio oficial sin tener que editar producto por producto."
  },
  {
    id: "faq-5",
    category: "seguridad",
    question: "¿Cómo se configuran los roles y permisos de los empleados?",
    answer: "En el módulo de Configuración de Empresa puedes crear usuarios con permisos granulares (por ejemplo, permitir que un cajero solo acceda al POS pero no a reportes financieros, o que un encargado de depósito solo cree notas de recepción pero no modifique precios)."
  },
  {
    id: "faq-6",
    category: "general",
    question: "¿Cómo funciona la prueba gratuita de 14 días?",
    answer: "Puedes crear tu cuenta y acceder de inmediato a todas las funciones del Plan Crecimiento durante 14 días de forma 100% gratuita. No te solicitamos tarjeta de crédito para iniciar la prueba."
  }
];

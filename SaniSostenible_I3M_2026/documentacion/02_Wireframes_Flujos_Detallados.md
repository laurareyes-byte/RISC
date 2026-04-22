# 🖼️ Wireframes Detallados — SaniSostenible 2.0
## Flujos, Transiciones, Elementos Interactivos y Retroalimentación al Usuario
### Concurso I3M 2026-1 · Universidad Santo Tomás Tunja

---

## PRINCIPIOS DE DISEÑO

### Paleta de Colores
| Color | Hex | Uso |
|---|---|---|
| Verde Primario | `#1B5E20` | Headers, CTAs principales, elementos de marca |
| Verde Claro | `#4CAF50` | Confirmaciones, estados OK, etiquetas positivas |
| Amarillo Alerta | `#F9A825` | Advertencias, estados de precaución |
| Rojo Urgente | `#C62828` | Errores, emergencias, alertas críticas |
| Azul Agua | `#0277BD` | Módulo de agua, información neutral |
| Blanco/Crema | `#FAFAFA` | Fondos principales |
| Gris Oscuro | `#212121` | Texto principal |
| Gris Claro | `#9E9E9E` | Texto secundario, placeholders |

### Tipografía
- **Título H1:** Poppins Bold 24px
- **Título H2:** Poppins SemiBold 20px
- **Título H3:** Poppins SemiBold 16px
- **Cuerpo:** Poppins Regular 14px
- **Caption:** Poppins Light 12px

### Espaciado y Grid
- Margen lateral: 16px
- Padding de cards: 16px
- Border radius: 12px (cards) / 8px (botones)
- Sombra cards: `0 2px 8px rgba(0,0,0,0.12)`

---

## ARQUITECTURA DE INFORMACIÓN

```
SaniSostenible 2.0
├── 🏠 INICIO (Home)
│   ├── Hero + estadísticas
│   ├── Acciones rápidas (6 botones)
│   └── Sobre nosotros
│
├── 🛠️ SERVICIOS
│   ├── Lista de servicios
│   └── Detalle + cotización WhatsApp
│
├── 🛒 PRODUCTOS (Módulo Gratuito)
│   ├── Filtro por categoría (Lodos/Grasas/Gases/Agua)
│   └── Detalle + modo de uso
│
├── 📚 GUÍAS INTERACTIVAS (Acceso Libre)
│   ├── Lista de guías
│   └── Guía paso a paso
│
├── 🧮 CALCULADORA
│   ├── Input dimensiones + usuarios
│   └── Resultado + productos recomendados
│
├── 🔍 DIAGNÓSTICO RÁPIDO ⭐NUEVO
│   ├── Selección de componente
│   ├── Checklist de síntomas
│   └── Resultado + acción recomendada
│
└── 🌱 ECO-COMPOST ⭐NUEVO
    ├── Diagnóstico de seguridad del lodo
    ├── Protocolo de tratamiento
    ├── Guía de compostera
    └── Calendario de monitoreo
```

---

## FLUJO 1: INICIO → DIAGNÓSTICO RÁPIDO

### Pantalla 1.1 — Home Principal
```
┌──────────────────────────────────────────┐
│ ████████████████████████████████████████ │
│ ██  [Logo RISC]  RISC Ingeniería  ██   │
│ ██  Soluciones ambientales rurales ██   │
│ ████████████████████████████████████████ │
│                                          │
│  📊 100+ Clientes  10+ Años  98% Sat.  │
│                                          │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │   🛠️    │ │   🛒    │ │   📚    │ │
│ │Servicios │ │Productos │ │  Guías  │ │
│ └──────────┘ └──────────┘ └──────────┘ │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │   🧮    │ │   🔍    │ │   🌱    │ │
│ │Calculad. │ │Diagnóst. │ │Eco-Comp. │ │
│ └──────────┘ └──────────┘ └──────────┘ │
│                                          │
│ ┌──────────────────────────────────────┐ │
│ │  🤖 Chat de Ayuda                   │ │
│ └──────────────────────────────────────┘ │
│                                          │
│ [🏠] [🛠️] [🛒] [📚] [🧮]             │
└──────────────────────────────────────────┘

TRANSICIONES:
- Tap en botón → slide-in desde derecha (300ms ease-in-out)
- Nav bottom → fade (150ms)
- Hero → scroll suave hacia contenido
```

### Pantalla 1.2 — Módulo Diagnóstico Rápido (Entrada)
```
┌──────────────────────────────────────────┐
│ ← Diagnóstico Rápido              🔔    │
├──────────────────────────────────────────┤
│                                          │
│    🔍                                   │
│    ¿Qué parte de tu sistema             │
│    quieres revisar?                      │
│                                          │
│ ┌──────────────────────────────────────┐ │
│ │  🪣  Tanque Séptico                 │ │
│ │      Revisa niveles y estado         │ →│
│ └──────────────────────────────────────┘ │
│ ┌──────────────────────────────────────┐ │
│ │  🫧  Trampa de Grasas               │ │
│ │      Limpieza y obstrucciones        │ →│
│ └──────────────────────────────────────┘ │
│ ┌──────────────────────────────────────┐ │
│ │  💧  Campo de Infiltración          │ │
│ │      Saturación y funcionamiento     │ →│
│ └──────────────────────────────────────┘ │
│ ┌──────────────────────────────────────┐ │
│ │  💨  Gases y Olores                 │ │
│ │      Detección de riesgos            │ →│
│ └──────────────────────────────────────┘ │
│                                          │
│ ℹ️  Diagnóstico sin costo · Acceso libre│
└──────────────────────────────────────────┘

ELEMENTOS INTERACTIVOS:
- Cada card tiene chevron → indicador de navegación
- Cards con hover/press: elevación 4dp + color tint
- Íconos animados con micro-interacción al tap

RETROALIMENTACIÓN:
- Haptic feedback al seleccionar
- Toast: "Cargando diagnóstico..." (500ms)
```

### Pantalla 1.3 — Checklist de Síntomas (ejemplo: Tanque Séptico)
```
┌──────────────────────────────────────────┐
│ ← 🪣 Tanque Séptico                 1/3 │
├──────────────────────────────────────────┤
│                                          │
│  Responde estas preguntas para          │
│  evaluar el estado de tu sistema        │
│                                          │
│ ┌──────────────────────────────────────┐ │
│ │ ¿Hace cuánto lo manteniste?         │ │
│ │                                      │ │
│ │ ○ Menos de 1 año           🟢       │ │
│ │ ○ Entre 1 y 2 años         🟡       │ │
│ │ ● Más de 2 años            🔴       │ │
│ │ ○ No lo recuerdo / No sé   🟡       │ │
│ └──────────────────────────────────────┘ │
│                                          │
│ ─────────────────── ● ○ ○ ──────────── │
│                                          │
│           [Siguiente pregunta →]         │
└──────────────────────────────────────────┘

TRANSICIONES:
- Siguiente pregunta: slide-left (250ms)
- Progress bar anima al avanzar
- Selección: radio button con animación de check

RETROALIMENTACIÓN:
- Selector cambia color inmediatamente
- Botón "Siguiente" se activa solo si hay selección
- Indicador de progreso (1/3, 2/3, 3/3)
```

### Pantalla 1.4 — Resultado del Diagnóstico
```
┌──────────────────────────────────────────┐
│ ← Resultado del Diagnóstico              │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  🔴  ATENCIÓN REQUERIDA           │ │
│  │  Tu sistema necesita mantenimiento  │ │
│  │  en las próximas 2 semanas          │ │
│  └────────────────────────────────────┘ │
│                                          │
│  📋 Acciones recomendadas:              │
│  ┌────────────────────────────────────┐ │
│  │ 1. 🧪 Aplicar Bioactivador        │ │
│  │    250ml · Frecuencia: hoy mismo  │ │
│  │                      [Ver cómo →] │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │ 2. 🚫 Reducir uso de antibióticos │ │
│  │    en el sistema los próximos días │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │ 3. 👷 Contactar técnico especializ.│ │
│  │    Para vaciado y revisión         │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  💬 Solicitar visita técnica RISC  │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  🔄 Hacer otro diagnóstico         │ │
│  └────────────────────────────────────┘ │
└──────────────────────────────────────────┘

TRANSICIONES:
- Entrada: fade-in + slide-up desde abajo (400ms)
- Card de alerta: animación de pulso (1s, 2 veces)
- Acciones: stagger animation (cada item 100ms delay)

RETROALIMENTACIÓN:
- Color de la card de resultado dinámico (verde/amarillo/rojo)
- Ícono animado según severidad
- Botón WhatsApp → deep link a wa.me/573005560572
```

---

## FLUJO 2: CALCULADORA MEJORADA

### Pantalla 2.1 — Calculadora (Entrada)
```
┌──────────────────────────────────────────┐
│ ← Calculadora de Mantenimiento           │
├──────────────────────────────────────────┤
│                                          │
│  🧮 Calcula la frecuencia y los         │
│  productos para tu sistema              │
│                                          │
│  📐 Dimensiones del Tanque              │
│  ┌────────────────────────────────────┐ │
│  │ Largo (m)  [    2.5          ]     │ │
│  │ Ancho (m)  [    1.5          ]     │ │
│  │ Prof. (m)  [    1.2          ]     │ │
│  └────────────────────────────────────┘ │
│                                          │
│  👥 Personas que usan el sistema        │
│  ┌────────────────────────────────────┐ │
│  │ N° de personas  [ - ] [ 4 ] [ + ] │ │
│  └────────────────────────────────────┘ │
│                                          │
│  📅 ¿Cuándo fue el último mantenimiento?│
│  ┌────────────────────────────────────┐ │
│  │ [  Seleccionar fecha  📅  ]        │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │      🧮 Calcular Ahora             │ │
│  └────────────────────────────────────┘ │
└──────────────────────────────────────────┘

ELEMENTOS INTERACTIVOS:
- Campos numéricos con teclado numérico nativo
- Stepper +/- para personas con límites (1-20)
- Date picker nativo del dispositivo
- Validación en tiempo real (bordes rojo/verde)

RETROALIMENTACIÓN:
- Error inline si dimensiones < 0 o > 50m
- Resumen visual: "Volumen = 4,5 m³ = 4.500 L"
- Loading spinner al calcular (300ms)
```

### Pantalla 2.2 — Resultado de la Calculadora
```
┌──────────────────────────────────────────┐
│ ← Resultado del Cálculo                  │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  📊 Resumen del Sistema            │ │
│  │  Volumen: 4,5 m³ = 4.500 litros   │ │
│  │  Carga: 4 personas × 120L = 480L/d│ │
│  │  Tiempo de retención: 9,4 días    │ │
│  └────────────────────────────────────┘ │
│                                          │
│  📅 Próximo Mantenimiento               │
│  ┌────────────────────────────────────┐ │
│  │  ⏰ En 6 meses                     │ │
│  │  (15 de Octubre de 2026)           │ │
│  │  [🔔 Agregar recordatorio]         │ │
│  └────────────────────────────────────┘ │
│                                          │
│  🧪 Productos Recomendados Mensuales:   │
│  ┌────────────────────────────────────┐ │
│  │ 🧪 Bioactivador de Lodos  9 dosis │ │
│  │ 🫧 Desengrasante Biológico 5 L    │ │
│  │ 💊 Pastillas Purificadoras 9 u.   │ │
│  └────────────────────────────────────┘ │
│                                          │
│  [📋 Ver guía de aplicación]            │
│  [🛒 Ver productos en catálogo]         │
│  [💬 Solicitar mantenimiento]           │
└──────────────────────────────────────────┘

TRANSICIONES:
- Resultados: contador animado (count-up animation)
- Fecha: fade-in con highlight amarillo
- Productos: aparecen en cascada (stagger 80ms)

RETROALIMENTACIÓN:
- Confetti/celebración si el sistema está en buen estado
- Barra de progreso del nivel de lodos estimado
- Botón "Agregar recordatorio" → integración calendario nativo
```

---

## FLUJO 3: ECO-COMPOST (MÓDULO NUEVO)

### Pantalla 3.1 — Entrada al Módulo Eco-Compost
```
┌──────────────────────────────────────────┐
│ ← 🌱 Eco-Compost                    FREE│
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │          🌿                        │ │
│  │  Transforma tus residuos           │ │
│  │  en abono para tu parcela         │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ¿En qué etapa estás?                  │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  🔍 Tengo lodos recién extraídos  │ │
│  │     Necesito saber si son seguros  │ →│
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  🌡️ Ya pasé por el diagnóstico    │ │
│  │     Ver protocolo de tratamiento   │ →│
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  🏗️ Quiero construir mi compostera│ │
│  │     Guía paso a paso               │ →│
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  📅 Ya tengo compostera activa    │ │
│  │     Ver mi calendario de volteo   │ →│
│  └────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

### Pantalla 3.2 — Diagnóstico de Seguridad del Lodo
```
┌──────────────────────────────────────────┐
│ ← 🔍 Diagnóstico del Lodo           1/4 │
├──────────────────────────────────────────┤
│                                          │
│  Para garantizar un manejo seguro,      │
│  responde estas preguntas:              │
│                                          │
│  ¿Hubo enfermedades gastrointestinales  │
│  en el hogar los últimos 3 meses?       │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  ○  Sí, hubo enfermedades          │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  ○  No, todos estuvieron sanos     │ │
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  ○  No estoy seguro/a              │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ⚠️ Esta info es para tu seguridad.    │
│  No se almacena ni comparte.            │
│                                          │
│ ─── ● ○ ○ ○ ───────────────────────── │
│                 [Siguiente →]            │
└──────────────────────────────────────────┘
```

### Pantalla 3.3 — Resultado del Diagnóstico del Lodo
```
┌──────────────────────────────────────────┐
│ ← Nivel de Seguridad del Lodo            │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  🟡  RIESGO MEDIO                 │ │
│  │  Se recomienda tratamiento         │ │
│  │  térmico antes del compostaje      │ │
│  └────────────────────────────────────┘ │
│                                          │
│  📋 Protocolo Recomendado:             │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  Paso 1: Tratamiento Térmico       │ │
│  │  🌡️ 55°C mínimo por 3 días         │ │
│  │  🔄 Voltear cada 24 horas           │ │
│  │  📏 Pila mínima: 1m³               │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  📖 Ver protocolo completo         │ │
│  │     con ilustraciones técnicas     │ →│
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  🏗️ Ver guía de compostera        │ →│
│  └────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

### Pantalla 3.4 — Calendario de Monitoreo (12 Semanas)
```
┌──────────────────────────────────────────┐
│ ← 📅 Calendario de Compostaje            │
├──────────────────────────────────────────┤
│                                          │
│  Semana actual: 3/12                    │
│  Inicio: 1 Abril 2026                  │
│  Cosecha estimada: 24 Junio 2026        │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  Sem  Estado        Acción        │ │
│  │  ─────────────────────────────   │ │
│  │  ✅1  Completada    Volteo hecho  │ │
│  │  ✅2  Completada    Volteo hecho  │ │
│  │  🔄3  HOY →        ⚠️ Voltear hoy│ │
│  │  ○  4  Pendiente    Volteo + agua  │ │
│  │  ○  5  Pendiente    Tomar temp.   │ │
│  │  ...                              │ │
│  │  🌱12  Meta        ¡Cosecha!      │ │
│  └────────────────────────────────────┘ │
│                                          │
│  [🔔 Activar recordatorios semanales]   │
│  [📷 Registrar foto de progreso]        │
│                                          │
│  💡 Eco-tip de hoy:                    │
│  "El compost de lodo es rico en         │
│  nitrógeno, ideal para hortalizas."     │
└──────────────────────────────────────────┘

ELEMENTOS INTERACTIVOS:
- Cada semana es expandible (accordion)
- Fotos opcionales para registro visual
- Notificaciones push semanales
- Indicador de temperatura con emoji termómetro
```

---

## FLUJO 4: GUÍAS INTERACTIVAS (MEJORADAS)

### Pantalla 4.1 — Lista de Guías con Categorías
```
┌──────────────────────────────────────────┐
│ ← 📚 Guías Técnicas               FREE  │
├──────────────────────────────────────────┤
│                                          │
│  [Todas] [Mantenim.] [Agua] [Gases]      │
│  [Lodos]  [Eco-Tips] [Seguridad]        │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  🔧 Mantenimiento de Tanque Séptico│ │
│  │  6 pasos · 15 min estimados        │ │
│  │  ⭐ Más popular                    │ →│
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  🫧 Limpieza Trampa de Grasas      │ │
│  │  4 pasos · 10 min estimados        │ →│
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  🌿 Cómo hacer Eco-Compost        │ │
│  │  12 pasos · 12 semanas            │ │
│  │  🆕 Nuevo                         │ →│
│  └────────────────────────────────────┘ │
│  ┌────────────────────────────────────┐ │
│  │  ⚠️ Protocolo de Seguridad H₂S   │ │
│  │  5 pasos · Lectura rápida         │ →│
│  └────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

### Pantalla 4.2 — Guía Paso a Paso (en progreso)
```
┌──────────────────────────────────────────┐
│ ← Mantenimiento de Tanque Séptico    3/6 │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐ │
│  │    [Ilustración técnica del        │ │
│  │     paso actual — diagrama         │ │
│  │     animado del tanque]            │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Paso 3: Medir el nivel de lodos        │
│                                          │
│  Usa una regla o vara larga para medir  │
│  desde la superficie hasta el fondo     │
│  del sedimento.                         │
│                                          │
│  📐 Si los lodos superan el 50% de     │
│  la profundidad total, necesitas        │
│  vaciado urgente.                       │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  ⚠️ Usa guantes y gafas.          │ │
│  │  No introduzcas la cabeza.         │ │
│  └────────────────────────────────────┘ │
│                                          │
│  ── ✅ ✅ 🔄 ○ ○ ○ ──────────────   │
│                                          │
│  [← Anterior]    [Marcar como hecho ✅] │
└──────────────────────────────────────────┘

TRANSICIONES:
- Entre pasos: swipe horizontal natural
- Marcar como hecho: check animation + confetti mini
- Progreso: barra verde que avanza con cada paso

RETROALIMENTACIÓN:
- Vibración haptica al completar un paso
- Toast: "✅ Paso 3 completado" (2s)
- Al completar todos: modal de celebración
```

---

## MAPA DE TRANSICIONES ENTRE PANTALLAS

```
[Home] ─────────────────────────────────────────────┐
   │                                                 │
   ├──→ [Servicios] ──→ [Detalle Servicio] ──→ [WhatsApp]
   │
   ├──→ [Productos] ──→ [Detalle Producto]
   │        │
   │        └──→ [Calculadora] ──→ [Resultado Calc.]
   │                                    │
   │                                    └──→ [Guía de producto]
   │
   ├──→ [Guías] ──→ [Guía paso a paso] ──→ [Completada]
   │
   ├──→ [Diagnóstico] ──→ [Síntomas] ──→ [Resultado]
   │         │                                │
   │         └──────────────────────────→ [WhatsApp]
   │                                          │
   │                                          └──→ [Eco-Compost]
   │
   └──→ [Eco-Compost] ──→ [Diag. Lodo] ──→ [Protocolo]
                              │                  │
                              └──→ [Compostera]──→ [Calendario]
```

---

## ESPECIFICACIONES DE ANIMACIONES

| Elemento | Tipo | Duración | Easing |
|---|---|---|---|
| Navegación entre páginas | Slide + Fade | 300ms | ease-in-out |
| Cards al cargar | Stagger fade-up | 80ms por ítem | ease-out |
| Botones al presionar | Scale 0.95 | 100ms | ease |
| Resultados de cálculo | Count-up | 800ms | ease-out |
| Alertas/notificaciones | Slide-down | 200ms | spring |
| Progreso de pasos | Fill gradual | 250ms | ease-in-out |
| Modal de éxito | Bounce-in | 400ms | spring |

---

*Documento generado el 21 de Abril de 2026 · RISC Ingeniería S.A.S*  
*Concurso I3M 2026-1 · Universidad Santo Tomás Tunja*

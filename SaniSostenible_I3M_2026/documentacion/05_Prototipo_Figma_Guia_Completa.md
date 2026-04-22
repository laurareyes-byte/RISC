# 🎨 Guía Completa del Prototipo Interactivo en Figma
## SaniSostenible 2.0 — De Wireframe a Prototipo de Alta Fidelidad
### Concurso I3M 2026-1 · Universidad Santo Tomás Tunja

---

## 1. CONFIGURACIÓN INICIAL EN FIGMA

### 1.1 Estructura del Proyecto Figma

```
📁 SaniSostenible 2.0 — I3M 2026
├── 📄 Página 1: Cover + Presentación
├── 📄 Página 2: Design System
│   ├── 🎨 Paleta de colores (styles)
│   ├── 📝 Tipografías (text styles)
│   ├── 🔲 Componentes UI
│   └── 🖼️ Assets / Iconografía
├── 📄 Página 3: Wireframes (Lo-Fi)
│   ├── Frame: Home
│   ├── Frame: Diagnóstico
│   ├── Frame: Eco-Compost
│   ├── Frame: Calculadora
│   └── Frame: Guías
├── 📄 Página 4: Prototipo Hi-Fi
│   ├── Frame: [Todos los screens del flujo]
│   └── Prototype connections
└── 📄 Página 5: Handoff Notes
```

### 1.2 Configuración del Frame (Mobile First)
```
Device: Android / iPhone 14 Pro
Width: 390px
Height: 844px
Background: #FAFAFA

Safe zones:
- Status bar: 44px (top)
- Home indicator: 34px (bottom)
- Content area: 766px efectivos
```

---

## 2. DESIGN SYSTEM — COMPONENTES A CREAR

### 2.1 Paleta de Colores (Color Styles en Figma)

```figma-styles
// Crear en: Local Styles > Color

Primary/Green-900    #1B5E20
Primary/Green-700    #2E7D32
Primary/Green-500    #4CAF50
Primary/Green-100    #C8E6C9
Primary/Green-50     #E8F5E9

Alert/Warning        #F9A825
Alert/Warning-Light  #FFF8E1
Alert/Error          #C62828
Alert/Error-Light    #FFEBEE
Alert/Success        #2E7D32
Alert/Success-Light  #E8F5E9

Neutral/Black        #212121
Neutral/Gray-700     #616161
Neutral/Gray-400     #9E9E9E
Neutral/Gray-100     #F5F5F5
Neutral/White        #FFFFFF

Water/Blue-700       #0277BD
Water/Blue-100       #E1F5FE
```

### 2.2 Tipografías (Text Styles en Figma)

```figma-styles
// Crear en: Local Styles > Text
// Font: Poppins (Agregar desde Google Fonts en Figma)

H1/Bold-24          Poppins Bold, 24px, line-height 32px
H2/SemiBold-20      Poppins SemiBold, 20px, line-height 28px
H3/SemiBold-16      Poppins SemiBold, 16px, line-height 24px
Body/Regular-14     Poppins Regular, 14px, line-height 20px
Body/Medium-14      Poppins Medium, 14px, line-height 20px
Caption/Light-12    Poppins Light, 12px, line-height 16px
Button/SemiBold-14  Poppins SemiBold, 14px, line-height 20px
```

### 2.3 Componentes UI a Construir en Figma

#### 🔲 Componente: Bottom Navigation Bar
```
Estructura del componente:
├── Background: White, shadow-sm
├── Height: 64px
├── Items: 5 íconos + labels
│   ├── Home (🏠)
│   ├── Servicios (🛠️)
│   ├── Productos (🛒)
│   ├── Guías (📚)
│   └── Calculadora (🧮)
└── Estado activo: Color Primary/Green-500, ícono filled

Variantes del componente:
- home-active, services-active, products-active, guides-active, calc-active
```

#### 🔲 Componente: Card Principal
```
Estructura:
├── Container: White, border-radius 12px, shadow
├── Image area: 120px height (opcional)
├── Content padding: 16px
├── Icon: 32px emoji/svg
├── Title: H3/SemiBold-16
├── Description: Body/Regular-14, color Neutral/Gray-700
└── CTA area: optional

Variantes:
- default, with-image, compact, alert-green, alert-yellow, alert-red
```

#### 🔲 Componente: Primary Button
```
Estructura:
├── Background: Primary/Green-700
├── Text: Button/SemiBold-14, White
├── Border radius: 8px
├── Padding: 14px 24px
├── Height: 48px
├── Width: full-width (preferred) o fit-content

Estados (Figma Interactions):
- Default → Hover (scale 1.01, shadow aumenta)
- Pressed (scale 0.97, brightness -10%)
- Loading (spinner reemplaza texto)
- Disabled (opacity 0.5)
```

#### 🔲 Componente: Status Badge (Semáforo)
```
Variantes:
- 🟢 Green: bg #C8E6C9, text #1B5E20, "OK"
- 🟡 Yellow: bg #FFF8E1, text #E65100, "ATENCIÓN"
- 🔴 Red: bg #FFEBEE, text #C62828, "URGENTE"

Tamaños:
- sm: 12px font, 4px 8px padding
- md: 14px font, 6px 12px padding
- lg: 16px font, 8px 16px padding
```

#### 🔲 Componente: Step Indicator
```
Estructura:
├── Número del paso: Circle 32px, bg Primary/Green-700, White text
├── Línea conectora: 2px, Primary/Green-500
└── Estado: active (filled green), done (check ✅), pending (empty)
```

#### 🔲 Componente: Progress Bar Lineal
```
Container: bg Neutral/Gray-100, height 4px, border-radius 2px
Fill: bg Primary/Green-500, animated width
Label: "Paso X de Y" · Caption/Light-12
```

---

## 3. CONSTRUCCIÓN DE PANTALLAS Hi-Fi

### 3.1 Pantalla: Splash Screen / Onboarding

```
Frame: Splash
Background: Linear gradient #1B5E20 → #2E7D32
Center elements:
├── Logo RISC (blanco) 120x120px
├── "RISC Ingeniería" H1/Bold-24 White
├── "S.A.S" Body/Regular-14 White 0.7 opacity
└── Loading dots animation (3 círculos)

Frame: Onboarding-1
├── Illustration: Sistema séptico rural (SVG técnico)
├── "Comprende tu sistema" H2/SemiBold-20
├── "Aprende a operarlo con guías visuales simples" Body
├── Pagination dots: ● ○ ○
└── [Siguiente] Primary Button
```

### 3.2 Pantalla: Home Principal

```
Frame: Home
├── Status bar (44px)
├── HERO section (180px)
│   ├── Background: gradient verde
│   ├── Logo: 60px
│   ├── "RISC Ingeniería S.A.S" H2
│   ├── Subtitle Body/Regular-14 blanco
│   └── Wave SVG (transición hacia contenido)
├── Stats bar (60px)
│   ├── "100+ Clientes"
│   ├── "10+ Años"
│   └── "98% Satisfacción"
├── Quick Actions Grid (2x3)
│   ├── 🛠️ Servicios
│   ├── 🛒 Productos
│   ├── 📚 Guías
│   ├── 🧮 Calculadora
│   ├── 🔍 Diagnóstico [⭐NUEVO]
│   └── 🌱 Eco-Compost [⭐NUEVO]
├── Sección "¿Quiénes somos?" Card
└── Bottom Nav: home-active
```

### 3.3 Pantalla: Diagnóstico — Selección de Componente

```
Frame: Diagnostico-Inicio
├── Header: "← Diagnóstico Rápido" H3 + 🔔
├── Subtitle: "¿Qué parte de tu sistema quieres revisar?" Body
├── Lista de opciones (4 cards)
│   ├── Card 1: 🪣 Tanque Séptico → chevron →
│   ├── Card 2: 🫧 Trampa de Grasas → chevron →
│   ├── Card 3: 💧 Campo de Infiltración → chevron →
│   └── Card 4: 💨 Gases y Olores → chevron →
├── Footer note: "ℹ️ Diagnóstico sin costo · Acceso libre"
└── Bottom Nav: ninguno activo
```

### 3.4 Pantallas: Checklist (3 preguntas por componente)

```
Frame: Diagnostico-Tanque-P1
├── Header: "← 🪣 Tanque Séptico" + Progress "1/3"
├── Pregunta: "¿Hace cuánto fue el último mantenimiento?"
├── Radio options (4 opciones con colores indicativos)
│   ├── Menos de 1 año [dot verde]
│   ├── 1-2 años [dot amarillo]
│   ├── Más de 2 años [dot rojo]
│   └── No lo sé [dot gris]
├── Progress indicator: ─── ● ○ ○ ───
└── [Siguiente →] (disabled hasta selección)

Frame: Diagnostico-Tanque-P2
(misma estructura, siguiente pregunta)

Frame: Diagnostico-Tanque-P3
(misma estructura, última pregunta)
```

### 3.5 Pantalla: Resultado del Diagnóstico

```
Frame: Diagnostico-Resultado-Rojo
├── Header: "← Resultado del Diagnóstico"
├── Alert Card (rojo): "🔴 ATENCIÓN REQUERIDA"
│   ├── Título H2 rojo
│   └── Descripción Body
├── Lista de acciones recomendadas (3 cards)
│   ├── Card 1: 🧪 Aplicar Bioactivador → [Ver cómo]
│   ├── Card 2: 🚫 Reducir antibióticos
│   └── Card 3: 👷 Contactar técnico
├── CTA principal: [💬 Solicitar visita técnica RISC]
│   ── background Primary/Green-700
└── CTA secundario: [🔄 Hacer otro diagnóstico]

Frame: Diagnostico-Resultado-Verde
(misma estructura, colores verde, mensaje positivo)

Frame: Diagnostico-Resultado-Amarillo
(misma estructura, colores amarillo, mensaje de precaución)
```

### 3.6 Pantalla: Eco-Compost — Entrada

```
Frame: EcoCompost-Inicio
├── Header: "← 🌱 Eco-Compost" + badge "FREE"
├── Hero card verde con ilustración compost
├── "¿En qué etapa estás?" H3
├── 4 opciones de etapa:
│   ├── 🔍 Diagnóstico del lodo → [card]
│   ├── 🌡️ Protocolo de tratamiento → [card]
│   ├── 🏗️ Construir compostera → [card]
│   └── 📅 Monitorear compostera activa → [card]
└── Bottom Nav
```

---

## 4. CONEXIÓN DE FLUJOS (PROTOTYPE MODE)

### 4.1 Configuración del Modo Prototipo en Figma

```
CÓMO CONECTAR EN FIGMA:
1. Click en elemento interactivo (botón, card, etc.)
2. En panel derecho: Prototype > Interactions
3. "On Tap" → "Navigate to" → Frame destino
4. Elegir animación

ANIMACIONES RECOMENDADAS POR TIPO:
├── Navegación hacia adelante: Smart Animate, 300ms, Ease In Out
├── Volver atrás: Smart Animate, 250ms, Ease Out
├── Modal/Popup: Dissolve, 200ms, Ease In Out
├── Bottom Sheet: Slide from Bottom, 350ms, Spring
└── Toast notification: Slide from Top, 200ms, Ease Out
```

### 4.2 Mapa de Conexiones (Flujo Principal)

```
[Splash] ──300ms──→ [Onboarding-1] ──→ [Onboarding-2] ──→ [Home]
                                                              │
                        ┌─────────────────────────────────────┤
                        ↓                                     │
[Diagnóstico-Inicio] ←──┤      ┌── [Servicios] ←─────────────┤
        │               │      │   [Productos] ←─────────────┤
        ↓               │      │   [Guías] ←─────────────────┤
[D-Tanque-P1] → [D-Tanque-P2] → [D-Tanque-P3] → [D-Resultado]
                                                       │
                                          [WhatsApp deeplink]
                                          [Ver guía producto]
                                          [Eco-Compost]

[Eco-Compost] → [EC-Diagnóstico-L1] → [EC-Diagnóstico-L2] → [EC-Diagnóstico-L3]
                                                                      │
                                        ┌─────────────────────────────┤
                              [EC-Resultado-Verde]              [EC-Resultado-Amarillo]
                                        │                             │
                              [EC-Compostera]              [EC-Tratamiento-Termico]
                                        │                             │
                              [EC-Calendario] ←──────────────────────┘
```

---

## 5. CREACIÓN DE ACTIVOS VISUALES

### 5.1 Iconografía Técnica Requerida

| Ícono | Descripción | Estilo |
|---|---|---|
| `ic_tanque_septico` | Corte transversal de tanque séptico | Outline verde, técnico |
| `ic_trampa_grasa` | Vista isométrica de trampa | Outline verde |
| `ic_campo_infiltracion` | Vista lateral del campo | Outline azul |
| `ic_lodo` | Capa de lodos en tanque | Filled marrón |
| `ic_gas_h2s` | Molécula H₂S + nube | Outline gris |
| `ic_compost` | Montículo de compost + plantas | Filled verde |
| `ic_compostera` | Estructura de compostera | Outline madera |
| `ic_termometro` | Termómetro de suelo | Outline rojo |
| `ic_usuario_rural` | Silueta usuario con sombrero | Filled verde |
| `ic_tecnico_risc` | Técnico con herramientas | Filled azul |

**Dónde crear los íconos:**
- **Figma**: Para todos los íconos UI (vectores, escalables)
- **Canva**: Para ilustraciones ricas (escenas, personajes)
- **SketchUp / Blender** (opcional): Modelos 3D de los sistemas (para video o presentación)

### 5.2 Ilustraciones Técnicas Principales

| Ilustración | Uso | Herramienta sugerida |
|---|---|---|
| Diagrama corte tanque séptico | Guías interactivas | Figma o Canva |
| Flujo completo del tren séptico | Onboarding / Home | Figma |
| Proceso de compostaje | Eco-Compost | Canva o Figma |
| Señales de alerta visuales | Diagnóstico | Figma |
| Compostera paso a paso | Eco-Compost | Canva |

### 5.3 Guía de Paleta de Imágenes

```
FILTRO FOTOGRÁFICO COHERENTE:
- Fotos de campo: +10% saturación, +5% brillo
- Íconos técnicos: Flat design, trazo 2px, redondeado
- Fondos de cards: Gradientes suaves verdes
- Ilustraciones: Estilo "clean technical" no infantil
```

---

## 6. IMPLEMENTACIÓN DE INTERACCIONES AVANZADAS EN FIGMA

### 6.1 Componente Interactive: Calculadora con Resultado Dinámico

```
CÓMO SIMULAR EN FIGMA (sin código):

1. Crear 3 variantes del frame de Calculadora:
   - Calculadora-Vacía (estado inicial)
   - Calculadora-Completa (todos los campos llenos)
   - Calculadora-Resultado (con el resultado visible)

2. Conectar con Variables de Figma (Feature Beta):
   Variables a crear:
   - largo: number (0.5 - 50)
   - ancho: number (0.5 - 50)
   - profundidad: number (0.5 - 10)
   - personas: number (1 - 20)

3. O simplificar: usar "On Click" en botón Calcular
   → Navigate to: Calculadora-Resultado (con datos precargados de ejemplo)
```

### 6.2 Componente Interactive: Diagnóstico con Resultado Condicional

```
ESTRATEGIA PARA FIGMA:
Crear 3 flujos completos:
- Flujo-Verde: respuestas todas positivas → resultado verde
- Flujo-Amarillo: algunas respuestas preocupantes → resultado amarillo
- Flujo-Rojo: respuestas críticas → resultado rojo

En la pantalla de selección de síntomas,
usar Prototype Conditions (Figma Advanced):
- Si respuesta = "Más de 2 años" → Navigate to Ruta-Rojo
- Si respuesta = "1-2 años" → Navigate to Ruta-Amarillo
- Si respuesta = "Menos de 1 año" → Navigate to Ruta-Verde
```

### 6.3 Calendario Eco-Compost Interactivo

```
Crear componente Calendar con 3 estados:
├── sem-pendiente: círculo gris vacío
├── sem-actual: círculo verde con pulso
└── sem-completada: checkmark verde relleno

Al tap en semana actual:
├── Expand animation (accordion)
└── Mostrar: acciones del día + botones

Al marcar como completada:
├── Micro-animación check
├── Toast "✅ Semana 3 completada"
└── Avanzar al siguiente (auto-scroll)
```

---

## 7. VALIDACIÓN Y REFINAMIENTO (PRUEBAS DE USABILIDAD)

### 7.1 Plan de Pruebas

| Participante | Perfil | Tarea principal | Métricas a medir |
|---|---|---|---|
| P1: Usuario rural | 45 años, primaria, smartphone básico | Hacer diagnóstico del tanque | Tiempo hasta resultado, errores |
| P2: Técnico RISC | 30 años, técnico, smartphone Android | Registrar inspección en campo | Pasos para completar tarea |
| P3: Joven rural | 22 años, bachiller, smartphone | Iniciar proceso eco-compost | Comprensión del flujo |
| P4: Jurado concurso | Profesional, evaluador | Navegar el prototipo completo | Usabilidad general, impresión |

### 7.2 Preguntas de Evaluación

```
POST-TASK QUESTIONS (escala 1-5):

1. ¿Qué tan fácil fue entender qué debías hacer? (1=muy difícil, 5=muy fácil)
2. ¿Los textos e instrucciones fueron claros?
3. ¿Los colores del resultado te indicaron claramente qué hacer?
4. ¿Agregarías esta app a tu celular para uso diario?
5. ¿Recomendarías esta app a un vecino?

SUS SCORE TARGET: > 75 (Good usability)
```

### 7.3 Puntos de Fricción a Monitorear

| Punto de fricción potencial | Solución implementada |
|---|---|
| Términos técnicos incomprensibles | Glosario en tooltip al tocar la palabra |
| Confusión en diagnóstico multicriteria | Preguntas de sí/no ilustradas |
| Pasos del eco-compost muy largos | División en sub-etapas + progreso visual |
| Calculadora con decimales | Teclado numérico con un decimal máximo |
| Frustración si no hay internet | Banner offline + guías cacheadas en SW |

---

## 8. LINK DEL PROTOTIPO Y ENTREGA

### 8.1 Formato de Entrega del Prototipo

```
LINK DE FIGMA (Prototype Mode):
https://www.figma.com/proto/[TU-FILE-ID]/SaniSostenible-2-I3M-2026
?node-id=[STARTING-FRAME]&scaling=scale-down&page-id=0%3A1

CONFIGURACIÓN DE PRESENTACIÓN:
- Fit: Scale down to fit
- Background: #000000
- Show hotspot hints: OFF (para presentación profesional)
- Show device: iPhone 14 (para pantalla de presentación)
- Starting screen: Splash → Onboarding 1
```

### 8.2 Checklist de Calidad del Prototipo

```
ANTES DE ENTREGAR, VERIFICAR:

Flujos:
□ Flujo 1 completo: Home → Diagnóstico → Resultado
□ Flujo 2 completo: Calculadora → Resultado con productos
□ Flujo 3 completo: Eco-Compost → Diagnóstico → Calendario
□ Flujo 4 completo: Guías → Paso a paso → Completada

Diseño:
□ Paleta de colores consistente en todas las pantallas
□ Tipografía Poppins en todos los textos
□ Bordes redondeados uniformes (12px cards, 8px botones)
□ Espaciado consistente (múltiplos de 8px)
□ Íconos del mismo estilo en toda la app

Prototipo:
□ Todas las pantallas enlazadas correctamente
□ Animaciones coherentes y suaves
□ Estados de error y loading presentes
□ WhatsApp deeplink configurado
□ Back buttons funcionales en todas las pantallas
□ Bottom navigation funcional en screens principales
```

---

*Documento generado el 21 de Abril de 2026 · RISC Ingeniería S.A.S*  
*Concurso I3M 2026-1 · Universidad Santo Tomás Tunja*

# 📦 Entregables del Concurso I3M 2026-1
## Checklist Completo, Formatos y Criterios de Evaluación
### SaniSostenible 2.0 · RISC Ingeniería S.A.S

---

## 1. ENTREGABLE 1: PROTOTIPO INTERACTIVO FUNCIONAL

### Formato de Entrega
**Archivo navegable:** Link de Figma (modo Prototype)  
**Alternativas aceptadas por el concurso:**
- Link de Figma (alta fidelidad, **RECOMENDADO**)
- Presentación Canva con hipervínculos
- Demo en Genially
- Presentación PowerPoint con animaciones

### Contenido Mínimo Requerido

| Requisito del concurso | Implementación en SaniSostenible 2.0 | Estado |
|---|---|---|
| **Flujo completo de las mediciones** | Calculadora mejorada: dimensiones + usuarios + caudal → frecuencia + productos | ✅ Incluido |
| **Ideas y flujo de creación de subproductos** | Módulo Eco-Compost: diagnóstico → tratamiento → compostera → calendario | ✅ Incluido |
| **Navegación intuitiva entre módulos** | Bottom Nav + Quick Actions + back buttons | ✅ Incluido |
| **Elementos visuales de alta calidad** | Design System consistente, ilustraciones técnicas, paleta verde | ✅ Incluido |

### Pantallas Mínimas del Prototipo (Cantidad recomendada: 15-20)

```
✅ PANTALLAS OBLIGATORIAS:

Bloque Home (2 screens):
□ 1. Splash Screen
□ 2. Home / Dashboard principal

Bloque Diagnóstico (5 screens):
□ 3. Selección de componente
□ 4. Pregunta 1/3
□ 5. Pregunta 2/3
□ 6. Pregunta 3/3
□ 7. Resultado del diagnóstico (al menos 1 variante: verde/amarillo/rojo)

Bloque Eco-Compost (4 screens):
□ 8. Entrada al módulo
□ 9. Diagnóstico de seguridad del lodo
□ 10. Resultado + Protocolo
□ 11. Calendario de monitoreo

Bloque Calculadora (2 screens):
□ 12. Formulario de entrada
□ 13. Resultado con productos recomendados

Bloque Guías (2 screens):
□ 14. Lista de guías
□ 15. Guía paso a paso en progreso

EXTRAS (recomendados para destacar):
□ 16. Onboarding (1-2 slides)
□ 17. Perfil/configuración básica
□ 18. Error state / Sin conexión
```

---

## 2. ENTREGABLE 2: DOCUMENTACIÓN COMPLEMENTARIA

### Formato de Entrega
**Documento PDF de 1-2 páginas** que explique:

```
ESTRUCTURA DEL DOCUMENTO COMPLEMENTARIO (máx 2 páginas):

PÁGINA 1:
├── Título: SaniSostenible 2.0 — Metodología de Diseño
├── El problema: 70% de sistemas rurales fallan [estadística clave]
├── Nuestra solución: descripción breve del sistema
├── Metodología de diseño UX usada:
│   • Design Thinking (Empatizar, Definir, Idear, Prototipar, Testear)
│   • Mobile-First: diseñado para smartphones básicos rurales
│   • Offline-First: PWA con Service Worker para modo sin conexión
└── Decisiones técnicas clave:
    • Por qué PWA: acceso sin Play Store/App Store, instalable
    • Por qué Figma: prototipado rápido de alta fidelidad

PÁGINA 2:
├── Flujo de los 2 módulos principales (diagrama simplificado)
├── Modelo de valor: pilar social (libre) vs empresarial (pro)
├── Impacto esperado:
│   • Familias beneficiadas en año 1: 200+
│   • Kg de compost generados: 500+ kg
│   • Reducción de ETAs: 15%
└── Próximos pasos:
    • Fase 1: Validación en comunidades piloto (Boyacá)
    • Fase 2: Desarrollo completo de la PWA
    • Fase 3: Integración con operadores municipales
    • Fase 4: Escalamiento nacional
```

---

## 3. CHECKLIST DE CALIDAD ANTES DE ENTREGAR

### 3.1 Verificación del Prototipo

```
CALIDAD DEL DISEÑO:
□ Paleta de colores coherente (verde #1B5E20 como primario)
□ Tipografía Poppins en todas las pantallas
□ Iconografía consistente (mismo estilo en toda la app)
□ Espaciado uniforme (grid de 8px)
□ Contraste suficiente para accesibilidad (ratio 4.5:1 mínimo)
□ Textos en español correcto, sin errores tipográficos

CALIDAD DE LA INTERACCIÓN:
□ Botón "atrás" funcional en cada pantalla interna
□ Bottom navigation activa en pantallas principales
□ Al menos 2 flujos completos sin interrupciones
□ Animaciones suaves (no abruptas ni lentas)
□ Estados de carga presentes (loading spinners)
□ Mensajes de retroalimentación en acciones clave

CALIDAD DEL CONTENIDO:
□ Lenguaje simple y accesible (nivel bachillerato)
□ Sin jerga técnica sin explicar
□ Estadísticas con fuente o nota de contexto
□ Protocolos técnicamente correctos (Decreto 1287 de 2014)
□ Cálculos de la calculadora verificados
□ Flujo eco-compost ambientalmente correcto
```

### 3.2 Verificación de la Documentación

```
DOCUMENTO COMPLEMENTARIO:
□ Máximo 2 páginas (A4 o carta)
□ Diseño visual coherente con la app (verde RISC)
□ Metodología de diseño claramente explicada
□ Decisiones técnicas justificadas
□ Próximos pasos realistas y medibles
□ Sin plagio (todo contenido original o citado)
□ Logo del equipo / RISC Ingeniería S.A.S presente
```

---

## 4. CRITERIOS DE EVALUACIÓN DEL CONCURSO

### 4.1 Criterios Estimados del Jurado I3M

| Criterio | Peso estimado | Cómo cumplirlo |
|---|---|---|
| **Innovación y originalidad** | 25% | Módulo Eco-Compost único, diagnóstico visual, modelo doble pilar |
| **Impacto social y ambiental** | 25% | ODS 6, economía circular, comunidades rurales específicas |
| **Factibilidad técnica** | 20% | PWA funcional existente, APIs en .NET 8, SQLite |
| **Usabilidad y experiencia** | 15% | Prototipo de alta fidelidad, pruebas de usuario |
| **Presentación del pitch** | 15% | Script de 5 min, demo en vivo, storytelling |

### 4.2 Diferenciadores Clave de SaniSostenible 2.0

```
¿QUÉ NOS HACE DIFERENTES?

1. BASE TÉCNICA REAL: No es solo un mockup. RISC Ingeniería S.A.S
   ya tiene una PWA funcional en producción con .NET 8, APIs
   reales y Service Worker. El prototipo Figma es la extensión
   visual de algo que ya existe.

2. DOBLE IMPACTO: No solo digital. La solución genera compost
   real (subproducto físico tangible) que representa un activo
   económico para las familias rurales.

3. ACCESO LIBRE DE VERDAD: No es freemium restrictivo. Las
   funcionalidades core (diagnóstico, eco-compost, guías,
   calculadora) son 100% gratuitas y offline.

4. NORMATIVA COLOMBIANA: Alineado con Decreto 1287/2014,
   Resolución 330/2017 y Plan Nacional de Desarrollo.

5. ESCALABILIDAD: Modelo replicable a nivel nacional con
   operadores locales de cada municipio.
```

---

## 5. PAQUETE FINAL DE ENTREGA — ESTRUCTURA DE ARCHIVOS

```
📁 SaniSostenible_I3M_2026/
│
├── 📄 README.md
│   └── "Instrucciones rápidas para acceder al prototipo"
│
├── 🔗 PROTOTIPO_FIGMA.url
│   └── "https://figma.com/proto/[ID]/SaniSostenible-I3M-2026"
│
├── 📄 Documentacion_Complementaria.pdf
│   └── "Metodología, decisiones técnicas y próximos pasos"
│
├── 📊 Presentacion_Pitch.pdf
│   └── "5 slides para la presentación oral"
│
├── 🎥 Demo_Video_60s.mp4 (opcional pero muy recomendado)
│   └── "Recorrido rápido del prototipo con voz en off"
│
└── 📁 assets/
    ├── logo_sanisostenible.png
    ├── logo_risc_ingenieria.png
    └── screenshots/ (5 capturas de pantalla clave)
```

---

## 6. MÉTRICAS DE ÉXITO DEL ENTREGABLE

| Métrica | Objetivo mínimo | Objetivo ideal |
|---|---|---|
| Pantallas en el prototipo | 15 | 20+ |
| Flujos completos sin errores | 2 | 4 |
| Páginas del documento complementario | 1 | 2 |
| Tiempo de carga del prototipo | < 5 seg | < 2 seg |
| Claridad del valor al jurado (encuesta) | 3.5/5 | 4.5/5 |
| Originalidad percibida (encuesta) | 4/5 | 4.8/5 |

---

*Documento generado el 21 de Abril de 2026 · RISC Ingeniería S.A.S*  
*Concurso I3M 2026-1 · Universidad Santo Tomás Tunja*

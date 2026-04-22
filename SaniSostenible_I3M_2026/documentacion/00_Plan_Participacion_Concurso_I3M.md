# 🏆 Plan Estratégico de Participación — Concurso I3M 2026-1
## SaniSostenible 2.0: Transformando el Saneamiento Campestre
### Universidad Santo Tomás Tunja · DMBB · 2026

---

## 1. RESUMEN EJECUTIVO

**Proyecto:** SaniSostenible 2.0  
**Empresa:** RISC Ingeniería S.A.S  
**Plataforma existente:** PWA (.NET 8 + SQLite + JS Vanilla)  
**Objetivo del concurso:** Presentar una solución tecnológica innovadora que transforme el saneamiento rural mediante un asistente técnico virtual con módulo gratuito y generación de subproductos sostenibles.

---

## 2. ALINEACIÓN ENTRE LA SOLUCIÓN ACTUAL Y EL CONCURSO

| Componente del Concurso | Estado en RISC Ingeniería S.A.S | Acción Requerida |
|---|---|---|
| Manual interactivo de operación | ✅ Guías paso a paso en API `/api/guides` | Ampliar con casos campestres |
| Calculadora de mantenimiento | ✅ `/api/calculator` (vol. tanque séptico) | Integrar frecuencias por caudal |
| Catálogo de productos sostenibles | ✅ `/api/products` (Lodos, Grasas, Gases, Agua) | Añadir subproductos de compost |
| Chatbot / Asistente virtual | ✅ Chat de ayuda en UI | Potenciar con flujo de diagnóstico |
| Servicios de mantenimiento | ✅ `/api/services` | Conectar con flujo de agenda |
| PWA / Acceso offline | ✅ Service Worker + manifest.json | Validar caching de guías campestres |
| Módulo gratuito / acceso libre | ⚠️ Toda la app es gratuita | Diferenciar módulo Pro vs Libre |
| Generación de subproductos | ❌ No existe aún | **Crear módulo Eco-Compost** |
| Storyboard / Wireframes | ❌ No documentado | **Crear en Figma + este doc** |
| Modelo de valor documentado | ❌ No existe | **Crear canvas de valor** |

---

## 3. ÍNDICE DE DOCUMENTOS GENERADOS

| # | Archivo | Descripción |
|---|---|---|
| 01 | `01_Diagnostico_Sector.md` | Contexto del problema, estadísticas, impacto |
| 02 | `02_Casos_Criticos.md` | Casos de uso críticos: empresa mantenimiento + MOM |
| 03 | `03_Wireframes_Flujos.md` | Wireframes textuales + guía Figma por pantalla |
| 04 | `04_Subproductos_Sostenibles.md` | Módulo Eco-Compost: lodos → compost |
| 05 | `05_Modelo_Valor.md` | Canvas doble: Pilar Social + Pilar Empresarial |
| 06 | `06_Modulo_Gratuito_Acceso_Libre.md` | Funcionalidades libres y open access |
| 07 | `07_Prototipo_Figma.md` | Guía completa de construcción en Figma |
| 08 | `08_Entregables_Concurso.md` | Checklist y formatos requeridos |
| 09 | `09_Pitch_Presentacion.md` | Script del pitch, estructura y tips de presentación |

---

## 4. CRONOGRAMA DE TRABAJO

```
SEMANA 1 — DIAGNÓSTICO Y PLANIFICACIÓN
├── Leer PDF del concurso y extraer requisitos ✅
├── Mapear solución actual vs. requerimientos ✅
├── Definir alcance del prototipo Figma
└── Preparar assets visuales base

SEMANA 2 — DISEÑO UX Y WIREFRAMES
├── Crear wireframes de baja fidelidad (papel/Figma)
├── Definir paleta de colores y tipografía
├── Diseñar iconografía consistente
└── Documentar 4 flujos principales

SEMANA 3 — PROTOTIPO FIGMA
├── Construir pantallas de alta fidelidad
├── Conectar flujos interactivos
├── Animaciones de transición
└── Pruebas de usabilidad internas

SEMANA 4 — MÓDULO SUBPRODUCTOS + MODELO VALOR
├── Diseñar flujo Eco-Compost
├── Construir canvas de modelo de valor
├── Documentar casos críticos
└── Integrar módulo gratuito vs. Pro

SEMANA 5 — ENTREGABLES Y PITCH
├── Armar paquete de entregables
├── Preparar presentación (5 min)
├── Ensayos del pitch
└── Revisión final
```

---

## 5. EQUIPO Y ROLES SUGERIDOS

| Rol | Responsabilidad |
|---|---|
| **Lead UX/UI Designer** | Figma, wireframes, prototipo interactivo |
| **Investigador de contexto** | Diagnóstico del sector, fuentes, estadísticas |
| **Desarrollador de contenido** | Guías técnicas, eco-tips, flujos paso a paso |
| **Modelador de negocio** | Canvas de valor, modelo Pro vs. Libre |
| **Presentador / Pitcher** | Script, demo en vivo, Q&A |

---

## 6. PROPUESTA DE VALOR CORE (para el jurado)

> **"SaniSostenible 2.0 democratiza el conocimiento técnico de saneamiento rural,  
> convierte residuos en recursos mediante economía circular,  
> y crea un modelo empresarial sostenible alineado con el ODS 6."**

### Los 3 pilares del valor:
1. **🌍 Ambiental** — Reducción de contaminación de acuíferos, manejo responsable de lodos y gases
2. **💰 Económico** — Subproductos (compost) comercializables, reducción de costos de reparación
3. **👥 Social** — Empoderamiento comunitario rural, acceso libre al conocimiento técnico

---

## 7. ODS ALINEADOS

| ODS | Relación con SaniSostenible 2.0 |
|---|---|
| **ODS 6** — Agua limpia y saneamiento | Objetivo principal: sistemas sépticos operativos y seguros |
| **ODS 11** — Ciudades y comunidades sostenibles | Gestión sostenible de infraestructura rural |
| **ODS 12** — Producción y consumo responsables | Economía circular: lodos → compost |
| **ODS 3** — Salud y bienestar | Reducción de enfermedades transmitidas por agua |

---

## 8. MÉTRICAS CLAVE PARA EL PITCH

- **70%** de sistemas rurales fallan por falta de mantenimiento técnico
- **100% gratuito** el módulo de operación básica
- **0 programación** necesaria para usar la PWA (acceso desde cualquier navegador móvil)
- **3 capas** de valor: ambiental, económico y social
- **1 sola app** que unifica guías, calculadora, diagnóstico y subproductos

---

*Documento generado el 21 de Abril de 2026 · RISC Ingeniería S.A.S*

# 📦 SaniSostenible 2.0 — Paquete de Entrega
## Concurso I3M 2026-1 · Universidad Santo Tomás Tunja · DMBB

---

## 🚀 Acceso Rápido (mientras el servidor esté activo)

| Recurso | URL local | Descripción |
|---|---|---|
| **App principal** | `http://localhost:5000` | PWA RISC Ingeniería S.A.S |
| **Prototipo Hi-Fi** | `http://localhost:5000/prototipo` | 18 pantallas interactivas |
| **Slides del Pitch** | `http://localhost:5000/pitch-slides` | 5 slides · modo presentación |
| **Documentación PDF** | `http://localhost:5000/doc-complementaria` | 2 páginas A4 imprimibles |
| **Entrenador Pitch** | `http://localhost:5000/pitch-trainer` | 7 ensayos con timer |

---

## 📁 Estructura del Paquete de Entrega

```
SaniSostenible_I3M_2026/
│
├── 📄 README.md                          ← Este archivo
│
├── 🔗 PROTOTIPO_URL.txt                  ← Link al prototipo en línea
│
├── 📊 Presentacion_Pitch.pdf             ← Imprimir desde /pitch-slides
│   → Chrome: Archivo → Imprimir → A4 Horizontal → "Gráficos de fondo" ON
│
├── 📄 Documentacion_Complementaria.pdf  ← Imprimir desde /doc-complementaria
│   → Chrome: Archivo → Imprimir → A4 → "Gráficos de fondo" ON
│
├── 📁 figma/
│   ├── tokens.json           ← Importar en Tokens Studio for Figma
│   ├── figma-structure.json  ← Especificación completa de frames
│   ├── figma-plugin.js       ← Plugin ejecutable en Figma Dev Mode
│   ├── manifest.json         ← Manifiesto del plugin
│   └── README.md             ← Instrucciones de importación Figma
│
├── 📁 assets/
│   ├── logo-sanisostenible.svg  ← Logo del proyecto
│   ├── logoempresa.png          ← Logo RISC Ingeniería S.A.S
│   └── screenshots/             ← Capturas clave del prototipo
│       ├── 01-home.png
│       ├── 02-diagnostico.png
│       ├── 03-resultado-rojo.png
│       ├── 04-ecocompost.png
│       └── 05-calendario.png
│
└── 📁 documentacion/
    ├── 00_Plan_Participacion_Concurso_I3M.md
    ├── 01_Diagnostico_Sector_Casos_Criticos.md
    ├── 02_Wireframes_Flujos_Detallados.md
    ├── 03_Subproductos_Sostenibles_Eco_Compost.md
    ├── 04_Modelo_Valor_Modulo_Gratuito_Acceso_Libre.md
    ├── 05_Prototipo_Figma_Guia_Completa.md
    ├── 06_Entregables_Concurso_I3M.md
    └── 07_Pitch_Presentacion_Script.md
```

---

## 🖨️ Instrucciones para Generar PDFs

### Presentación del Pitch (5 slides A4 horizontal)
1. Abrir `http://localhost:5000/pitch-slides` en Google Chrome
2. `Ctrl+P` → Impresora: **Guardar como PDF**
3. Más opciones → Tamaño: **A4** · Orientación: **Horizontal**
4. ✅ Activar **"Gráficos de fondo"**
5. Guardar como `Presentacion_Pitch.pdf`

### Documentación Complementaria (2 páginas A4)
1. Abrir `http://localhost:5000/doc-complementaria` en Google Chrome
2. Click en botón **"🖨️ Imprimir / Guardar como PDF"**
3. Orientación: **Vertical (retrato)**
4. ✅ Activar **"Gráficos de fondo"**
5. Guardar como `Documentacion_Complementaria.pdf`

---

## 🎤 Instrucciones para el Pitch

### Día del concurso
- [ ] Abrir `http://localhost:5000/pitch-slides` en Chrome modo pantalla completa
- [ ] Click **"▶ Presentar"** → modo presentación activado
- [ ] Navegación con **flechas del teclado** o botones en pantalla
- [ ] Plan B: PDF de slides guardado localmente
- [ ] Protipo abierto en segunda pestaña: `/prototipo`
- [ ] Llegar 30 min antes para probar proyector

### Script completo
Disponible en `documentacion/07_Pitch_Presentacion_Script.md`  
Practicar en: `http://localhost:5000/pitch-trainer` (7 ensayos con timer)

---

## 🔧 Cómo Ejecutar la App Localmente

```bash
cd C:\RISC
dotnet run
# → App disponible en http://localhost:5000
```

Requiere: .NET 8 SDK

---

## 📊 Criterios de Evaluación Cubiertos

| Criterio | Peso | Implementación |
|---|---|---|
| Innovación y originalidad | 25% | Eco-Compost único + diagnóstico semáforo + doble pilar |
| Impacto social y ambiental | 25% | ODS 6, economía circular, Boyacá rural |
| Factibilidad técnica | 20% | PWA .NET 8 en producción real |
| Usabilidad y experiencia | 15% | 18 pantallas hi-fi, Design Thinking documentado |
| Presentación del pitch | 15% | 5 slides + script 5 min + demo en vivo |

---

## 👥 Equipo

**RISC Ingeniería S.A.S**  
Especialistas en saneamiento rural colombiano  
Concurso I3M 2026-1 · Universidad Santo Tomás · Tunja  
Facultad de Ingenierías · DMBB

---

*Generado el 21 de Abril de 2026*

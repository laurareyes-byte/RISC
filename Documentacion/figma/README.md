# Cómo usar los archivos Figma de SaniSostenible 2.0

## Archivos generados

| Archivo | Uso |
|---|---|
| `tokens.json` | Design tokens para **Tokens Studio for Figma** (plugin) |
| `figma-structure.json` | Especificación completa de frames para referencia |
| `figma-plugin.js` + `manifest.json` | Plugin ejecutable directamente en Figma Developer Mode |

---

## Opción A — Tokens Studio (recomendado para design tokens)

1. Instalar el plugin **"Tokens Studio for Figma"** desde el marketplace de Figma
2. Abrirlo: `Plugins → Tokens Studio for Figma`
3. En la barra lateral del plugin: **Settings → Sync → Local file**
4. Importar el archivo `tokens.json` de esta carpeta
5. Click en **"Apply all tokens"** — esto crea automáticamente todos los Color Styles y Text Styles en tu archivo Figma

---

## Opción B — Plugin directo (crea frames + design system)

1. Abrir **Figma Desktop**
2. Ir a: `Plugins → Development → New Plugin...`
3. En el diálogo, elegir **"Run once"**
4. En el campo "Code", pegar el contenido de `figma-plugin.js`
5. Click **"Run"**

El plugin creará automáticamente:
- ✅ **4 páginas**: Cover, Design System, Wireframes Lo-Fi, Prototipo Hi-Fi
- ✅ **17 color styles** del design system
- ✅ **8 text styles** (Poppins H1 → Caption)
- ✅ **18 frames base** de todas las pantallas (390×844px)

---

## Opción C — Manual (para Figma web sin plugins)

Usar el archivo `figma-structure.json` como referencia visual y crear los frames manualmente siguiendo la especificación de cada pantalla.

**Orden recomendado:**
1. Crear las páginas (Cover, Design System, Wireframes, Hi-Fi)
2. Configurar los Color Styles con la paleta del JSON
3. Cargar Poppins desde Google Fonts en Figma
4. Crear los Text Styles
5. Crear frames de 390×844 para cada pantalla
6. Conectar en modo Prototipo siguiendo `prototypeConnections` del JSON

---

## Configuración del frame

- **Dispositivo**: iPhone 14 Pro
- **Tamaño**: 390 × 844 px
- **Presentación**: Scale down to fit · Background: `#000000`
- **Frame inicial**: `01 · Splash`
- **Animación default**: Smart Animate, 300ms, Ease In Out
- **Back buttons**: Push Right, 280ms, Ease Out

// ═══════════════════════════════════════════════════════════════
//  SaniSostenible 2.0 — Plugin de Importación para Figma
//  Concurso I3M 2026-1 · RISC Ingeniería S.A.S
//
//  INSTRUCCIONES DE USO:
//  1. Abrir Figma Desktop
//  2. Menú: Plugins → Development → New Plugin
//  3. Elegir "Run once" (o crear como plugin con manifest)
//  4. Pegar este código en el editor del plugin
//  5. Click "Run" — el plugin creará automáticamente:
//     • Variables/Styles del Design System
//     • Páginas del proyecto
//     • Frames base de todas las pantallas
//
//  ALTERNATIVA RÁPIDA (Figma Plugin Console):
//  Plugins → Development → Open Console → pegar el código
// ═══════════════════════════════════════════════════════════════

const DESIGN_TOKENS = {
  colors: {
    "Primary/900":      "#1B5E20",
    "Primary/700":      "#2E7D32",
    "Primary/500":      "#4CAF50",
    "Primary/100":      "#C8E6C9",
    "Primary/50":       "#E8F5E9",
    "Status/Warning":       "#F9A825",
    "Status/Warning-Light": "#FFF8E1",
    "Status/Error":         "#C62828",
    "Status/Error-Light":   "#FFEBEE",
    "Status/Success":       "#2E7D32",
    "Status/Success-Light": "#E8F5E9",
    "Water/Blue":       "#0277BD",
    "Water/Blue-Light": "#E1F5FE",
    "Neutral/Black":    "#212121",
    "Neutral/Gray-700": "#616161",
    "Neutral/Gray-400": "#9E9E9E",
    "Neutral/Gray-100": "#F5F5F5",
    "Neutral/White":    "#FFFFFF",
    "App/Background":   "#F0F4F0",
    "WhatsApp":         "#25D366"
  },
  textStyles: [
    { name: "H1/Bold-24",      fontSize: 24, fontWeight: "Bold",     lineHeight: 32 },
    { name: "H2/Bold-20",      fontSize: 20, fontWeight: "Bold",     lineHeight: 28 },
    { name: "H3/SemiBold-16",  fontSize: 16, fontWeight: "SemiBold", lineHeight: 24 },
    { name: "Body/Regular-14", fontSize: 14, fontWeight: "Regular",  lineHeight: 20 },
    { name: "Body/Medium-14",  fontSize: 14, fontWeight: "Medium",   lineHeight: 20 },
    { name: "Button/SemiBold-14", fontSize: 14, fontWeight: "SemiBold", lineHeight: 20 },
    { name: "Caption/Light-12",fontSize: 12, fontWeight: "Light",    lineHeight: 16 },
    { name: "Label/SemiBold-11",fontSize: 11, fontWeight: "SemiBold", lineHeight: 14 }
  ]
};

const SCREENS = [
  { id: "splash",             name: "01 · Splash",                   bg: "1B5E20" },
  { id: "onboarding-1",       name: "02 · Onboarding 1/3",           bg: "F0F4F0" },
  { id: "onboarding-2",       name: "03 · Onboarding 2/3",           bg: "F0F4F0" },
  { id: "onboarding-3",       name: "04 · Onboarding 3/3",           bg: "F0F4F0" },
  { id: "home",               name: "05 · Home / Dashboard",          bg: "F0F4F0" },
  { id: "diagnostico",        name: "06 · Diagnóstico Selección",     bg: "F0F4F0" },
  { id: "diag-p1",            name: "07a · Diag Pregunta 1/3",        bg: "F0F4F0" },
  { id: "diag-p2",            name: "07b · Diag Pregunta 2/3",        bg: "F0F4F0" },
  { id: "diag-p3",            name: "07c · Diag Pregunta 3/3",        bg: "F0F4F0" },
  { id: "diag-resultado-verde",   name: "08a · Resultado 🟢 Óptimo",  bg: "F0F4F0" },
  { id: "diag-resultado-yellow",  name: "08b · Resultado 🟡 Atención",bg: "F0F4F0" },
  { id: "diag-resultado-red",     name: "08c · Resultado 🔴 Urgente", bg: "F0F4F0" },
  { id: "ecocompost",         name: "09 · Eco-Compost Entrada",        bg: "F0F4F0" },
  { id: "eco-diagnostico",    name: "10 · Eco Diagnóstico Lodo",       bg: "F0F4F0" },
  { id: "eco-resultado",      name: "11 · Eco Resultado",              bg: "F0F4F0" },
  { id: "eco-protocolo",      name: "12 · Eco Protocolo Tratamiento",  bg: "F0F4F0" },
  { id: "eco-compostera",     name: "13 · Eco Compostera",             bg: "F0F4F0" },
  { id: "eco-calendario",     name: "14 · Eco Calendario 12 sem",      bg: "F0F4F0" }
];

const FRAME_W = 390;
const FRAME_H = 844;
const COL_GAP = 40;

// ── Hexadecimal → RGB (0-1) para Figma API ──────────────────
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255
  };
}

// ── Crear color style ────────────────────────────────────────
async function createColorStyles() {
  const created = [];
  for (const [name, hex] of Object.entries(DESIGN_TOKENS.colors)) {
    const style = figma.createPaintStyle();
    style.name  = name;
    const rgb   = hexToRgb(hex);
    style.paints = [{ type: 'SOLID', color: rgb }];
    created.push(name);
  }
  return created;
}

// ── Crear text styles ────────────────────────────────────────
async function createTextStyles() {
  const created = [];
  for (const ts of DESIGN_TOKENS.textStyles) {
    await figma.loadFontAsync({ family: "Poppins", style: ts.fontWeight });
    const style  = figma.createTextStyle();
    style.name   = ts.name;
    style.fontSize = ts.fontSize;
    style.lineHeight = { unit: "PIXELS", value: ts.lineHeight };
    try {
      style.fontName = { family: "Poppins", style: ts.fontWeight };
    } catch (e) {
      // Si Poppins no está disponible, usar Inter como fallback
      await figma.loadFontAsync({ family: "Inter", style: ts.fontWeight === "Regular" ? "Regular" : ts.fontWeight });
      style.fontName = { family: "Inter", style: ts.fontWeight };
    }
    created.push(ts.name);
  }
  return created;
}

// ── Crear label en frame ─────────────────────────────────────
async function addLabel(frame, text, y, size = 13, color = "212121", weight = "Regular") {
  try {
    await figma.loadFontAsync({ family: "Poppins", style: weight });
  } catch {
    await figma.loadFontAsync({ family: "Inter", style: weight });
  }
  const node       = figma.createText();
  node.characters  = text;
  node.fontSize    = size;
  node.x           = 16;
  node.y           = y;
  node.resize(FRAME_W - 32, size + 4);
  node.fills       = [{ type: 'SOLID', color: hexToRgb(color) }];
  frame.appendChild(node);
  return node;
}

// ── Crear un rectangle de utilidad ──────────────────────────
function rect(x, y, w, h, hex, radius = 0) {
  const r  = figma.createRectangle();
  r.x      = x; r.y = y;
  r.resize(w, h);
  r.cornerRadius = radius;
  r.fills  = [{ type: 'SOLID', color: hexToRgb(hex) }];
  return r;
}

// ── Crear frames de pantallas ────────────────────────────────
async function createScreenFrames(page) {
  const frames = [];

  for (let i = 0; i < SCREENS.length; i++) {
    const sc    = SCREENS[i];
    const frame = figma.createFrame();
    frame.name  = sc.name;
    frame.resize(FRAME_W, FRAME_H);
    frame.x     = i * (FRAME_W + COL_GAP);
    frame.y     = 0;
    frame.fills = [{ type: 'SOLID', color: hexToRgb(sc.bg) }];

    // Añadir indicador de screen ID (como anotación)
    const tag = rect(0, 0, FRAME_W, 6, "4CAF50");
    frame.appendChild(tag);

    // Label central con nombre de pantalla
    await addLabel(frame, sc.name.replace(/^\d+[a-c]? · /, ''), FRAME_H / 2 - 30, 18, "9E9E9E", "SemiBold");
    await addLabel(frame, `ID: ${sc.id}`, FRAME_H / 2 + 5, 11, "C8E6C9", "Regular");
    await addLabel(frame, "Reemplazar con diseño Hi-Fi", FRAME_H / 2 + 25, 10, "9E9E9E", "Regular");

    page.appendChild(frame);
    frames.push(frame);
  }

  return frames;
}

// ── Crear layout de páginas ──────────────────────────────────
async function setupPages() {
  // Renombrar la primera página
  const page1 = figma.root.children[0];
  page1.name  = "📱 Prototipo Hi-Fi";

  // Crear páginas adicionales
  const pageDS   = figma.createPage(); pageDS.name   = "🎨 Design System";
  const pageWF   = figma.createPage(); pageWF.name   = "📐 Wireframes Lo-Fi";
  const pageCover= figma.createPage(); pageCover.name= "📋 Cover";

  return { hifi: page1, ds: pageDS, wf: pageWF, cover: pageCover };
}

// ── Cover page ───────────────────────────────────────────────
async function buildCoverPage(page) {
  figma.currentPage = page;
  const f  = figma.createFrame();
  f.name   = "SaniSostenible 2.0 — Cover";
  f.resize(800, 600);
  f.fills  = [{ type: 'SOLID', color: hexToRgb("1B5E20") }];

  f.appendChild(rect(0, 0, 800, 8, "4CAF50"));
  await addLabel(f, "SaniSostenible 2.0", 100, 36, "FFFFFF", "Bold");
  await addLabel(f, "Transformando el Saneamiento Campestre", 150, 22, "FFFFFF", "Regular");
  await addLabel(f, "RISC Ingeniería S.A.S  ·  Concurso I3M 2026-1", 190, 14, "C8E6C9", "Regular");
  await addLabel(f, "Universidad Santo Tomás · Tunja · DMBB", 240, 13, "81C784", "Regular");

  // Etiquetas ODS
  const ods = rect(600, 80, 140, 50, "0D3B0F", 12);
  f.appendChild(ods);
  await addLabel(f, "🌊 ODS 6", 90, 14, "FFFFFF", "SemiBold");

  page.appendChild(f);
}

// ── Design System page ───────────────────────────────────────
async function buildDSPage(page) {
  figma.currentPage = page;

  // Paleta de colores
  const colFrame = figma.createFrame();
  colFrame.name  = "01 · Paleta de Colores";
  colFrame.resize(800, 320);
  colFrame.fills = [{ type: 'SOLID', color: hexToRgb("FFFFFF") }];
  colFrame.x     = 0; colFrame.y = 0;

  let cx = 16, cy = 40;
  await addLabel(colFrame, "Paleta de Colores — SaniSostenible 2.0", 12, 14, "212121", "SemiBold");

  const entries = Object.entries(DESIGN_TOKENS.colors);
  for (let i = 0; i < entries.length; i++) {
    const [name, hex] = entries[i];
    if (cx + 60 > 800) { cx = 16; cy += 90; }
    const swatch = rect(cx, cy, 56, 40, hex.replace('#', ''), 8);
    colFrame.appendChild(swatch);
    try {
      await figma.loadFontAsync({ family: "Poppins", style: "Regular" });
    } catch {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    }
    const label    = figma.createText();
    label.characters = name.split('/').pop();
    label.fontSize   = 9;
    label.x = cx; label.y = cy + 44;
    label.resize(60, 10);
    label.fills = [{ type: 'SOLID', color: hexToRgb("616161") }];
    colFrame.appendChild(label);
    cx += 68;
  }
  page.appendChild(colFrame);

  // Frame tipografía
  const typoFrame = figma.createFrame();
  typoFrame.name  = "02 · Tipografía";
  typoFrame.resize(800, 400);
  typoFrame.fills = [{ type: 'SOLID', color: hexToRgb("FFFFFF") }];
  typoFrame.x     = 0; typoFrame.y = 360;

  await addLabel(typoFrame, "Tipografía — Poppins (Google Fonts)", 12, 14, "212121", "SemiBold");
  let ty = 40;
  for (const ts of DESIGN_TOKENS.textStyles) {
    try {
      await figma.loadFontAsync({ family: "Poppins", style: ts.fontWeight });
    } catch {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    }
    const t   = figma.createText();
    t.characters = `${ts.name}  →  ${ts.fontSize}px / ${ts.lineHeight}px leading`;
    t.fontSize   = ts.fontSize > 16 ? ts.fontSize : 13;
    t.x = 16; t.y = ty;
    t.resize(760, ts.fontSize + 8);
    t.fills = [{ type: 'SOLID', color: hexToRgb("212121") }];
    typoFrame.appendChild(t);
    ty += ts.fontSize + 20;
  }
  page.appendChild(typoFrame);
}

// ── MAIN ────────────────────────────────────────────────────
async function main() {
  figma.notify("⏳ Construyendo SaniSostenible 2.0...", { timeout: 2000 });

  try {
    // 1. Configurar páginas
    const pages = await setupPages();

    // 2. Cover
    await buildCoverPage(pages.cover);

    // 3. Design System
    await buildDSPage(pages.ds);
    const colorsCreated = await createColorStyles();
    const stylesCreated = await createTextStyles();

    // 4. Frames Hi-Fi (pantallas base)
    figma.currentPage = pages.hifi;
    const frames = await createScreenFrames(pages.hifi);

    // 5. Seleccionar el primer frame
    pages.hifi.selection = [frames[0]];
    figma.viewport.scrollAndZoomIntoView([frames[0]]);

    figma.notify(
      `✅ SaniSostenible 2.0 importado · ${frames.length} frames · ${colorsCreated.length} color styles · ${stylesCreated.length} text styles`,
      { timeout: 5000 }
    );
  } catch (err) {
    figma.notify(`❌ Error: ${err.message}`, { timeout: 4000 });
    console.error(err);
  }

  figma.closePlugin();
}

main();

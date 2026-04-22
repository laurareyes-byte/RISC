/* ═══════════════════════════════════════════════════════
   SaniSostenible 2.0 — Prototipo JS
   Concurso I3M 2026-1 · RISC Ingeniería S.A.S
   ═══════════════════════════════════════════════════════ */

'use strict';

// ── NAVEGACIÓN BASE ────────────────────────────────────────
let currentScreen = 'screen-splash';

function goTo(id) {
  const from = document.getElementById(currentScreen);
  const to   = document.getElementById(id);
  if (!to || id === currentScreen) return;

  // Salida
  from.classList.add('exit-left');
  from.classList.remove('active');

  // Entrada
  to.classList.add('enter-right');
  to.classList.add('active');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      to.classList.remove('enter-right');
      setTimeout(() => from.classList.remove('exit-left'), 350);
    });
  });

  currentScreen = id;

  // Reset scroll
  const sc = to.querySelector('.scroll-content');
  if (sc) sc.scrollTop = 0;
}

// Navega hacia módulos — internamente si tienen pantalla en el prototipo
function navTo(from, page) {
  const MAP = {
    guides:     'screen-guias',
    calculator: 'screen-calculadora',
    services:   'screen-servicios',
    home:       'screen-home'
  };
  const target = MAP[page];
  if (target) {
    goTo(target);
  } else {
    window.open(`/?page=${page}`, '_blank');
  }
}

// ── SPLASH AUTO-ADVANCE ─────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => goTo('screen-onboarding-1'), 2800);
});

// ── DIAGNÓSTICO ─────────────────────────────────────────────
const DIAG_DATA = {
  tanque: {
    title: '🪣 Tanque Séptico',
    questions: [
      {
        context: 'Mantenimiento',
        text: '¿Hace cuánto fue el último mantenimiento del tanque séptico?',
        opts: [
          { label: 'Menos de 1 año',      risk: 0, cls: 'ok'   },
          { label: '1 - 2 años',           risk: 1, cls: 'warn' },
          { label: 'Más de 2 años',        risk: 2, cls: 'err'  },
          { label: 'No lo sé / Nunca',     risk: 2, cls: 'gray' },
        ]
      },
      {
        context: 'Señales visuales',
        text: '¿Has notado olores fuertes a huevo podrido cerca del tanque o en el baño?',
        opts: [
          { label: 'No, ningún olor',       risk: 0, cls: 'ok'   },
          { label: 'A veces, leve',          risk: 1, cls: 'warn' },
          { label: 'Sí, frecuentemente',     risk: 2, cls: 'err'  },
        ]
      },
      {
        context: 'Nivel de lodo',
        text: '¿Has observado charcos, zonas húmedas o vegetación muy verde sobre el campo de infiltración?',
        opts: [
          { label: 'No, todo normal',        risk: 0, cls: 'ok'   },
          { label: 'Un poco de humedad',     risk: 1, cls: 'warn' },
          { label: 'Sí, charcos visibles',   risk: 2, cls: 'err'  },
        ]
      }
    ]
  },
  trampa: {
    title: '🫧 Trampa de Grasas',
    questions: [
      {
        context: 'Limpieza',
        text: '¿Cuándo fue la última vez que se limpió la trampa de grasas?',
        opts: [
          { label: 'Menos de 3 meses',      risk: 0, cls: 'ok'   },
          { label: '3 - 6 meses',           risk: 1, cls: 'warn' },
          { label: 'Más de 6 meses / Nunca', risk: 2, cls: 'err' },
        ]
      },
      {
        context: 'Flujo',
        text: '¿El desagüe de la cocina drena lentamente o se ha represado?',
        opts: [
          { label: 'Fluye con normalidad',   risk: 0, cls: 'ok'   },
          { label: 'Algo lento',             risk: 1, cls: 'warn' },
          { label: 'Represado / obstruido',  risk: 2, cls: 'err'  },
        ]
      },
      {
        context: 'Olores',
        text: '¿Hay olores fuertes en la cocina o cerca de la trampa?',
        opts: [
          { label: 'No hay olores',          risk: 0, cls: 'ok'   },
          { label: 'Olores leves a veces',   risk: 1, cls: 'warn' },
          { label: 'Olor constante e intenso', risk: 2, cls: 'err'},
        ]
      }
    ]
  },
  campo: {
    title: '💧 Campo de Infiltración',
    questions: [
      {
        context: 'Saturación',
        text: '¿Hay agua aflorando en la superficie del campo de infiltración?',
        opts: [
          { label: 'No, superficie seca',    risk: 0, cls: 'ok'   },
          { label: 'Húmeda después de lluvia', risk: 1, cls: 'warn'},
          { label: 'Charcos o agua estancada', risk: 2, cls: 'err' },
        ]
      },
      {
        context: 'Vegetación',
        text: '¿Hay vegetación exuberante, verde o de rápido crecimiento sobre el campo?',
        opts: [
          { label: 'Vegetación normal',      risk: 0, cls: 'ok'   },
          { label: 'Algo más verde que el resto', risk: 1, cls: 'warn'},
          { label: 'Muy diferente, muy verde', risk: 2, cls: 'err'},
        ]
      },
      {
        context: 'Antigüedad',
        text: '¿Hace cuántos años se instaló el campo de infiltración?',
        opts: [
          { label: 'Menos de 10 años',       risk: 0, cls: 'ok'   },
          { label: '10 - 20 años',           risk: 1, cls: 'warn' },
          { label: 'Más de 20 años',         risk: 2, cls: 'err'  },
          { label: 'No lo sé',               risk: 1, cls: 'gray' },
        ]
      }
    ]
  },
  gases: {
    title: '💨 Gases y Olores',
    questions: [
      {
        context: 'Intensidad',
        text: '¿Con qué frecuencia percibes olores a gas o a podrido en la propiedad?',
        opts: [
          { label: 'Nunca o muy raramente',  risk: 0, cls: 'ok'   },
          { label: '1 - 2 veces a la semana', risk: 1, cls: 'warn'},
          { label: 'Casi todos los días',    risk: 2, cls: 'err'  },
        ]
      },
      {
        context: 'Ventilación',
        text: '¿El tubo de ventilación del tanque está libre y sin obstrucciones?',
        opts: [
          { label: 'Sí, está despejado',     risk: 0, cls: 'ok'   },
          { label: 'No estoy seguro',        risk: 1, cls: 'warn' },
          { label: 'Está tapado o no existe', risk: 2, cls: 'err' },
        ]
      },
      {
        context: 'Seguridad',
        text: '¿Has sentido mareos o malestar al estar cerca del tanque?',
        opts: [
          { label: 'No, ningún síntoma',     risk: 0, cls: 'ok'   },
          { label: 'Ligero mareo alguna vez', risk: 1, cls: 'warn'},
          { label: 'Sí, síntomas frecuentes', risk: 2, cls: 'err' },
        ]
      }
    ]
  }
};

const RESULTS = {
  green: {
    icon: '🟢',
    title: 'Tu sistema está en buen estado',
    subtitle: 'Mantén las buenas prácticas y programa el próximo mantenimiento preventivo.',
    badge: '✅ ESTADO: ÓPTIMO',
    badgeCls: 'ok',
    cardCls: 'green',
    actions: [
      { icon: '📅', label: 'Programar próximo mantenimiento', sub: 'En 6-12 meses', cta: 'Agendar' },
      { icon: '📚', label: 'Consultar guías preventivas', sub: 'Buenas prácticas', cta: 'Ver guías' },
      { icon: '🌱', label: 'Iniciar proceso Eco-Compost', sub: 'Tus lodos son aptos', cta: 'Ver' },
    ]
  },
  yellow: {
    icon: '🟡',
    title: 'Se recomienda revisión pronto',
    subtitle: 'Tu sistema muestra señales de atención. Toma medidas preventivas para evitar un fallo.',
    badge: '⚠️ ESTADO: ATENCIÓN',
    badgeCls: 'warn',
    cardCls: 'yellow',
    actions: [
      { icon: '🧪', label: 'Aplicar bioactivador enzimático', sub: 'Reactiva el proceso biológico', cta: 'Ver producto' },
      { icon: '💧', label: 'Reducir uso de desinfectantes', sub: 'Evitan la bacteria benéfica', cta: 'Saber más' },
      { icon: '👷', label: 'Solicitar inspección técnica', sub: 'RISC · Visita en 48h', cta: 'Solicitar' },
    ]
  },
  red: {
    icon: '🔴',
    title: 'Requiere atención urgente',
    subtitle: 'Tu sistema presenta señales críticas. Se recomienda intervención técnica inmediata para evitar daños mayores.',
    badge: '🚨 ESTADO: URGENTE',
    badgeCls: 'err',
    cardCls: 'red',
    actions: [
      { icon: '🚨', label: 'Llamar técnico RISC ahora', sub: 'Emergencia · Disponible 24/7', cta: 'Llamar' },
      { icon: '🚫', label: 'No usar el sistema hasta revisión', sub: 'Riesgo de desbordamiento', cta: 'Entendido' },
      { icon: '💧', label: 'Tomar agua embotellada', sub: 'Posible contaminación del pozo', cta: 'Saber más' },
    ]
  }
};

let diagState = {
  component: null,
  step: 0,
  scores: [],
  selectedIdx: null
};

function startDiag(component) {
  diagState = { component, step: 0, scores: [], selectedIdx: null };
  const data = DIAG_DATA[component];

  document.getElementById('diag-title').textContent = data.title;
  renderDiagQuestion();
  goTo('screen-diag-preguntas');
}

function renderDiagQuestion() {
  const data = DIAG_DATA[diagState.component];
  const q    = data.questions[diagState.step];
  const step = diagState.step;
  const total = data.questions.length;

  document.getElementById('diag-step-label').textContent = `${step + 1}/${total}`;
  document.getElementById('diag-progress').style.width = `${((step + 1) / total) * 100}%`;
  document.getElementById('diag-q-context').textContent = q.context;
  document.getElementById('diag-question').textContent  = q.text;

  // Pasos visuales
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById(`ps${i}`);
    el.classList.remove('active', 'done');
    if (i - 1 < step) el.classList.add('done');
    else if (i - 1 === step) el.classList.add('active');
  }

  // Opciones
  const container = document.getElementById('diag-options');
  container.innerHTML = '';
  diagState.selectedIdx = null;
  document.getElementById('diag-next-btn').disabled = true;

  q.opts.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = `option-btn opt-${opt.cls}`;
    btn.innerHTML = `<span class="opt-dot ${opt.cls}"></span><span class="opt-label">${opt.label}</span>`;
    btn.onclick = () => selectOption(idx, btn);
    container.appendChild(btn);
  });
}

function selectOption(idx, btn) {
  document.querySelectorAll('#diag-options .option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  diagState.selectedIdx = idx;
  document.getElementById('diag-next-btn').disabled = false;
}

function diagNext() {
  if (diagState.selectedIdx === null) return;
  const data = DIAG_DATA[diagState.component];
  const q    = data.questions[diagState.step];
  const opt  = q.opts[diagState.selectedIdx];
  diagState.scores.push(opt.risk);
  diagState.step++;

  if (diagState.step < data.questions.length) {
    renderDiagQuestion();
  } else {
    showDiagResult();
  }
}

function showDiagResult() {
  const total = diagState.scores.reduce((a, b) => a + b, 0);
  const max   = diagState.scores.length * 2;
  const ratio = total / max;

  let level = ratio < 0.35 ? 'green' : ratio < 0.65 ? 'yellow' : 'red';
  const res = RESULTS[level];

  const card = document.getElementById('result-card');
  card.className = `result-card ${res.cardCls}`;
  document.getElementById('result-icon').textContent    = res.icon;
  document.getElementById('result-title').textContent   = res.title;
  document.getElementById('result-subtitle').textContent = res.subtitle;
  const badge = document.getElementById('result-badge');
  badge.textContent  = res.badge;
  badge.className    = `result-badge ${res.badgeCls}`;

  const list = document.getElementById('result-actions');
  list.innerHTML = res.actions.map(a => `
    <div class="action-item">
      <span class="ai-icon">${a.icon}</span>
      <div class="ai-info">
        <strong>${a.label}</strong>
        <span>${a.sub}</span>
      </div>
      <button class="ai-cta">${a.cta}</button>
    </div>
  `).join('');

  goTo('screen-diag-resultado');
  showToast(`Diagnóstico completado · Estado: ${level === 'green' ? '✅ Óptimo' : level === 'yellow' ? '⚠️ Atención' : '🚨 Urgente'}`, level === 'red' ? 'warn' : 'green');
}

// ── ECO-COMPOST DIAGNÓSTICO ───────────────────────────────
const ecoAnswers = {};

function ecoOptSelect(btn, questionId) {
  const parent = btn.closest('.eco-q-opts');
  parent.querySelectorAll('.eco-opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  ecoAnswers[questionId] = btn.dataset.val;

  // Habilitar botón si todas respondidas
  if (ecoAnswers.q1 && ecoAnswers.q2 && ecoAnswers.q3) {
    document.getElementById('eco-diag-btn').disabled = false;
  }
}

function evaluateEcoDiag() {
  const isApt = ecoAnswers.q1 === 'yes' && ecoAnswers.q2 === 'no' && ecoAnswers.q3 !== 'no';
  const card  = document.getElementById('eco-result-card');
  const icon  = document.getElementById('eco-result-icon');
  const title = document.getElementById('eco-result-title');
  const sub   = document.getElementById('eco-result-subtitle');
  const badge = document.getElementById('eco-result-badge');
  const subprod = document.getElementById('eco-subproducto-info');

  if (isApt) {
    card.className  = 'result-card green';
    icon.textContent  = '🟢';
    title.textContent = '¡Lodo apto para compostar!';
    sub.textContent   = 'Tus lodos cumplen criterios básicos del Decreto 1287 de 2014. Puedes iniciar el proceso de compostaje.';
    badge.textContent = '✅ CLASIFICACIÓN: APTO';
    badge.className   = 'result-badge ok';
    subprod.style.display = 'block';
  } else {
    card.className  = 'result-card yellow';
    icon.textContent  = '🟡';
    title.textContent = 'Se requiere tratamiento previo';
    sub.textContent   = 'Tus lodos necesitan tratamiento térmico o aireación extendida antes de compostar según la normativa colombiana.';
    badge.textContent = '⚠️ CLASIFICACIÓN: REQUIERE TRATAMIENTO';
    badge.className   = 'result-badge warn';
    subprod.style.display = 'none';
  }

  goTo('screen-eco-resultado');
}

// ── CALENDARIO ECO-COMPOST ────────────────────────────────
const calData = [
  // Fase activa: semanas 1-8
  { week: 1, phase: 'active', label: 'Mezcla',  icon: '🔄', done: false,
    actions: ['🔄 Preparar mezcla lodo + material carbonoso (relación 1:3)', '🌡️ Registrar temperatura inicial', '💧 Verificar humedad (objetivo 50-60%)'] },
  { week: 2, phase: 'active', label: 'Volteo',  icon: '♻️', done: false,
    actions: ['♻️ Voltear la pila completamente', '🌡️ Medir temperatura (debe subir a 55°C+)', '👃 Verificar olor: debe oler a tierra, no a podredumbre'] },
  { week: 3, phase: 'active', label: 'Control', icon: '📊', done: false,
    actions: ['📊 Registrar temperatura máxima de la semana', '💧 Ajustar humedad si está seca (agregar agua)', '🌡️ Si supera 55°C durante 3 días: fase termofílica activa ✅'] },
  { week: 4, phase: 'active', label: 'Volteo',  icon: '♻️', done: false,
    actions: ['♻️ Segundo volteo de la pila', '🔬 Evaluar descomposición visual', '📝 Anotar cambios de color y textura'] },
  { week: 5, phase: 'active', label: 'Control', icon: '📊', done: false,
    actions: ['📊 Control de temperatura y humedad', '🌿 El material debe verse más oscuro y descompuesto', '♻️ Voltear si la temperatura bajó de 45°C'] },
  { week: 6, phase: 'active', label: 'Volteo',  icon: '♻️', done: false,
    actions: ['♻️ Tercer volteo mayor', '📏 Medir volumen: debe haber reducido ~40%', '💧 Ajustar humedad si es necesario'] },
  { week: 7, phase: 'active', label: 'Eval',    icon: '🔍', done: false,
    actions: ['🔍 Evaluación visual de madurez parcial', '🌡️ La temperatura debe estabilizarse (45-55°C)', '📝 Documentar estado general'] },
  { week: 8, phase: 'active', label: 'Cierre',  icon: '✅', done: false,
    actions: ['✅ Fin de fase de compostaje activo', '🔍 Inspección de calidad: color oscuro, olor a tierra', '🌿 Si cumple: pasar a fase de maduración'] },
  // Fase maduración: semanas 9-12
  { week: 9,  phase: 'mature', label: 'Madura', icon: '🌱', done: false,
    actions: ['🌱 Inicio de fase de maduración', '♻️ Voltear suavemente — ya no debe calentar mucho', '💧 Mantener humedad 40-50%'] },
  { week: 10, phase: 'mature', label: 'Madura', icon: '🌱', done: false,
    actions: ['🌱 Control de maduración', '🌡️ Temperatura estable < 40°C: señal de madurez', '👃 Olor a tierra húmeda de bosque: ✅'] },
  { week: 11, phase: 'mature', label: 'Prueba', icon: '🔬', done: false,
    actions: ['🔬 Prueba de madurez: tomar puñado y exprimir', '✅ Si no hay líquido y huele a tierra: listo', '📝 Documentar peso final estimado'] },
  { week: 12, phase: 'mature', label: '¡Listo!', icon: '🎉', done: false,
    actions: ['🎉 ¡Compost HumusSéptico® terminado!', '📦 Empacar en costales o bolsas de 25 kg', '💰 Valor estimado: $8.000 - $12.000 / kg'] },
];

let calCompletedWeeks = 0;
let calActiveWeek = 1;

function initCalendar() {
  const activeEl  = document.getElementById('cal-active-phase');
  const matureEl  = document.getElementById('cal-mature-phase');
  activeEl.innerHTML  = '';
  matureEl.innerHTML  = '';

  calData.forEach(w => {
    const el = document.createElement('button');
    el.id = `cal-w-${w.week}`;
    el.className = `cal-week ${w.done ? 'done' : w.week === calActiveWeek ? 'active' : 'pending'}`;
    el.onclick = () => openWeek(w.week);
    el.innerHTML = `
      <span class="cw-icon">${w.done ? '✅' : w.icon}</span>
      <span class="cw-num">${w.week}</span>
      <span class="cw-label">${w.label}</span>
    `;
    (w.phase === 'active' ? activeEl : matureEl).appendChild(el);
  });

  updateCalProgress();
}

function openWeek(weekNum) {
  const w = calData[weekNum - 1];
  if (w.done || weekNum > calActiveWeek) return;

  const panel = document.getElementById('cal-week-panel');
  document.getElementById('cal-panel-title').textContent = `Semana ${weekNum} — Acciones`;
  const actionsEl = document.getElementById('cal-panel-actions');
  actionsEl.innerHTML = w.actions.map(a => `
    <div class="week-action-item">
      <span class="wai-icon">${a.split(' ')[0]}</span>
      <span>${a.split(' ').slice(1).join(' ')}</span>
    </div>
  `).join('');

  panel.style.display = 'block';
  panel.dataset.week  = weekNum;

  // Scroll al panel
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function markWeekDone() {
  const panel  = document.getElementById('cal-week-panel');
  const weekNum = parseInt(panel.dataset.week);
  const w = calData[weekNum - 1];
  w.done = true;

  const weekEl = document.getElementById(`cal-w-${weekNum}`);
  if (weekEl) {
    weekEl.className = 'cal-week done';
    weekEl.querySelector('.cw-icon').textContent = '✅';
  }

  calCompletedWeeks++;
  calActiveWeek = weekNum + 1;

  // Activar siguiente semana
  if (calActiveWeek <= 12) {
    const nextEl = document.getElementById(`cal-w-${calActiveWeek}`);
    if (nextEl) nextEl.className = 'cal-week active';
  }

  updateCalProgress();
  panel.style.display = 'none';

  if (calActiveWeek > 12) {
    showToast('🎉 ¡Proceso completado! HumusSéptico® listo para usar.', 'green');
  } else {
    showToast(`✅ Semana ${weekNum} completada · Próxima: Semana ${calActiveWeek}`, 'green');
  }
}

function updateCalProgress() {
  document.getElementById('cal-completed-count').textContent = calCompletedWeeks;
  document.getElementById('cal-prog-fill').style.width = `${(calCompletedWeeks / 12) * 100}%`;
}

// ── TOAST ────────────────────────────────────────────────
function showToast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `toast ${type} show`;
  setTimeout(() => el.classList.remove('show'), 3000);
}

// ── INICIALIZACIÓN ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCalendar();

  // Inicializar la pantalla del calendario cuando se navega a ella
  const calScreen = document.getElementById('screen-eco-calendario');
  if (calScreen) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        if (m.target.classList.contains('active')) {
          initCalendar();
        }
      });
    });
    observer.observe(calScreen, { attributes: true, attributeFilter: ['class'] });
  }

  // Hint auto-hide
  setTimeout(() => {
    const hint = document.getElementById('proto-hint');
    if (hint) hint.style.display = 'none';
  }, 8000);

  // Init guías
  renderGuiaList('');
});

// ═══════════════════════════════════════════════════════
//  CALCULADORA
// ═══════════════════════════════════════════════════════
let calcTipoActivo = 'residencial';

function calcSelTipo(btn) {
  document.querySelectorAll('.calc-sel-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  calcTipoActivo = btn.dataset.tipo;
}

function calcularProto() {
  const largo    = parseFloat(document.getElementById('p-calc-largo').value)   || 0;
  const ancho    = parseFloat(document.getElementById('p-calc-ancho').value)   || 0;
  const prof     = parseFloat(document.getElementById('p-calc-prof').value)    || 0;
  const personas = parseInt(document.getElementById('p-calc-personas').value)  || 0;

  if (!largo || !ancho || !prof || !personas) {
    showToast('⚠️ Completa todos los campos antes de calcular', 'warn');
    return;
  }

  const volumen = largo * ancho * prof;
  // Carga hidráulica: litros/persona/día según tipo
  const dotacion = { residencial: 150, comercial: 100, rural: 80 };
  const dotVal   = dotacion[calcTipoActivo] || 150;
  const cargaDia = personas * dotVal; // L/día

  // Frecuencia: cuando lodos llegan al 50% del volumen
  // Acumulación ~ 35-50 L/persona/año
  const acumAnual = personas * 40; // L/año
  const volLodos  = volumen * 1000 * 0.5; // L (50% del vol en litros)
  let frecMeses   = Math.round((volLodos / acumAnual) * 12);
  frecMeses = Math.max(6, Math.min(frecMeses, 36));

  // Icono según frecuencia
  const icon = frecMeses <= 12 ? '🔴' : frecMeses <= 24 ? '🟡' : '🟢';

  // Actualizar resultado
  document.getElementById('crh-icon').textContent  = icon;
  document.getElementById('crh-freq').textContent  = `Cada ${frecMeses} meses`;
  document.getElementById('crh-vol').textContent   = `Volumen: ${volumen.toFixed(2)} m³`;
  document.getElementById('crd-vol').textContent      = `${volumen.toFixed(2)} m³`;
  document.getElementById('crd-carga').textContent    = `${cargaDia} L/día`;
  document.getElementById('crd-usuarios').textContent = `${personas} persona${personas > 1 ? 's' : ''}`;
  document.getElementById('crd-tipo').textContent     = calcTipoActivo.charAt(0).toUpperCase() + calcTipoActivo.slice(1);

  // Productos recomendados
  const products = [
    { icon: '🦠', nombre: 'Bioactivador Séptico', desc: 'Acelera la digestión anaerobia de sólidos', periodo: 'Mensual' },
    { icon: '💧', nombre: 'Desgrasante Enzimático', desc: 'Para trampas de grasa y trampa de entrada', periodo: 'Mensual' },
    { icon: '🧪', nombre: 'Desincrustante Tubos', desc: 'Previene obstrucciones en la red de distribución', periodo: 'Trimestral' }
  ];
  document.getElementById('calc-products-list').innerHTML = products.map(p => `
    <div class="calc-product-row">
      <span class="cpr-icon">${p.icon}</span>
      <div class="cpr-info">
        <strong>${p.nombre}</strong>
        <span>${p.desc}</span>
        <span class="cpr-period">Aplicación: ${p.periodo}</span>
      </div>
    </div>
  `).join('');

  goTo('screen-calc-resultado');
  showToast(`📊 Frecuencia calculada: cada ${frecMeses} meses`, frecMeses <= 12 ? 'warn' : 'green');
}

// ═══════════════════════════════════════════════════════
//  GUÍAS
// ═══════════════════════════════════════════════════════
const GUIAS = [
  { id: 'g1', cat: 'tanque',  icon: '🪣', title: 'Inspección del Tanque Séptico',
    desc: 'Aprende a revisar el estado de tu tanque séptico de forma segura.',
    tiempo: '8 min', nivel: 'Básico',
    pasos: [
      { num:'01', icon:'🧤', title:'Equipo de protección', desc:'Usa guantes de nitrilo, mascarilla N95 y gafas de seguridad antes de comenzar cualquier inspección.', tip:'⚠️ NUNCA inspecciones sin equipo de protección personal.' },
      { num:'02', icon:'🔦', title:'Localiza la tapa de inspección', desc:'Encuentra la tapa de registro del tanque. Normalmente está al ras del suelo o a máximo 30 cm de profundidad.', tip:'💡 Marca la ubicación con una señal permanente para futuras inspecciones.' },
      { num:'03', icon:'👃', title:'Revisión de olores desde distancia', desc:'Antes de abrir, verifica si hay olores excesivos a nivel del suelo. Un olor fuerte puede indicar problemas de ventilación.', tip:'🌬️ Si el olor es muy intenso, ventila la zona 10 minutos antes.' },
      { num:'04', icon:'📏', title:'Medir nivel de lodos', desc:'Introduce suavemente una vara larga con tela blanca en el fondo. El lodo que queda marcado indica el nivel acumulado.', tip:'📊 Si los lodos superan el 50% de la profundidad, requiere desocupación urgente.' },
      { num:'05', icon:'📝', title:'Registrar y decidir', desc:'Anota la medición con la fecha. Si el nivel de lodos está por encima del 50%, programa el mantenimiento con un técnico certificado.', tip:'📞 Contacta a RISC Ingeniería si necesitas asistencia profesional.' }
    ]
  },
  { id: 'g2', cat: 'trampa', icon: '♻️', title: 'Limpieza de Trampa de Grasas',
    desc: 'Procedimiento paso a paso para limpiar tu trampa de grasas doméstica.',
    tiempo: '12 min', nivel: 'Intermedio',
    pasos: [
      { num:'01', icon:'🔒', title:'Cierra la llave de paso', desc:'Cierra el flujo de agua en las tuberías que llegan a la trampa para evitar nuevo ingreso de agua durante la limpieza.', tip:'💧 Espera 30 minutos sin usar agua en cocina antes de comenzar.' },
      { num:'02', icon:'🪣', title:'Retira la grasa acumulada', desc:'Con una espátula o cuchara de mango largo, extrae la capa de grasa solidificada en la superficie. Deposítala en bolsa plástica.', tip:'♻️ Esta grasa puede ser materia prima para BiofertilGrasa® — pregúntale a RISC.' },
      { num:'03', icon:'💧', title:'Limpia el compartimento', desc:'Usa agua caliente y un cepillo de cerdas duras para remover residuos de las paredes internas. No uses detergentes fuertes.', tip:'🌿 Prefiere jabón biodegradable para no afectar las bacterias benéficas.' },
      { num:'04', icon:'🔩', title:'Revisa el sifón y la malla', desc:'Verifica que el sifón esté libre de obstrucciones y que la malla de retención esté íntegra. Reemplaza si está deteriorada.', tip:'🔧 Las mallas de repuesto están disponibles en ferreterías o con RISC.' },
      { num:'05', icon:'✅', title:'Prueba de funcionamiento', desc:'Abre la llave de paso gradualmente y observa el flujo. El agua debe circular libremente sin acumulación ni olores.', tip:'📅 Programa la próxima limpieza según la frecuencia calculada por la Calculadora.' }
    ]
  },
  { id: 'g3', cat: 'campo', icon: '🌊', title: 'Mantenimiento del Campo de Irrigación',
    desc: 'Cómo verificar y mantener el campo de infiltración o pozo absorbente.',
    tiempo: '10 min', nivel: 'Intermedio',
    pasos: [
      { num:'01', icon:'🗺️', title:'Identifica el área del campo', desc:'Localiza el área del campo de infiltración (generalmente 6-20 m² de césped sobre suelo poroso) y verifica sus límites.', tip:'⚠️ No construyas ni plantes árboles sobre el campo de infiltración.' },
      { num:'02', icon:'🔍', title:'Busca signos de saturación', desc:'Camina sobre el área y observa: charcos permanentes, césped amarillo o zonas con vegetación excesivamente verde son señales de alerta.', tip:'🌿 Vegetación demasiado verde sobre el campo puede indicar saturación.' },
      { num:'03', icon:'💧', title:'Prueba de infiltración simple', desc:'Vierte 10 litros de agua en un punto del campo. Debe absorberse completamente en menos de 30 minutos.', tip:'⏱️ Si tarda más de 30 min, el suelo puede estar colmatado.' },
      { num:'04', icon:'🔩', title:'Revisa las tuberías de distribución', desc:'Si tienes acceso, inspecciona que los orificios de las tuberías distribuidoras no estén obstruidos con sedimento o raíces.', tip:'🌱 Las raíces son la principal causa de obstrucción — mantén árboles a más de 3m.' },
      { num:'05', icon:'📝', title:'Documenta el estado', desc:'Registra las observaciones con fecha. Un campo en buen estado debería funcionar sin problemas por 15-20 años con mantenimiento adecuado.', tip:'📱 Usa el módulo de Diagnóstico de esta app para hacer seguimiento digital.' }
    ]
  },
  { id: 'g4', cat: 'compost', icon: '🌱', title: 'Preparar Compostera Artesanal',
    desc: 'Construye y llena tu compostera para transformar lodos en HumusSéptico®.',
    tiempo: '15 min', nivel: 'Avanzado',
    pasos: [
      { num:'01', icon:'📦', title:'Construye o consigue el contenedor', desc:'Usa una caneca plástica de 200 L con tapa, o construye una caja de madera de 1m × 1m × 1m. Practica orificios de 1 cm cada 15 cm para aireación.', tip:'♻️ Una caneca de aceite reciclada funciona perfectamente.' },
      { num:'02', icon:'🌿', title:'Prepara la cama base', desc:'Coloca una capa de 15 cm de material seco (hojas secas, paja, aserrín o tierra de jardín) en el fondo.', tip:'🍂 La mezcla ideal es 1 parte de material húmedo por 2 de material seco.' },
      { num:'03', icon:'🪣', title:'Agrega los lodos de forma segura', desc:'Solo si el diagnóstico indicó que los lodos son APTOS (bajo riesgo). Agrega una capa de 10-15 cm de lodo sobre la cama base.', tip:'⚠️ NUNCA uses lodos de alto riesgo para compostaje doméstico.' },
      { num:'04', icon:'🔄', title:'Cubre y voltea', desc:'Cubre con otra capa de material seco. Voltea la mezcla con una horquilla o pala cada semana para airear.', tip:'🌡️ La temperatura interna debe llegar a 55-65°C — es señal de actividad bacteria.' },
      { num:'05', icon:'📅', title:'Inicia el seguimiento en la app', desc:'Ve al módulo Eco-Compost y activa el calendario de 12 semanas para recibir recordatorios y verificar el proceso.', tip:'🏆 En 12 semanas tendrás HumusSéptico® listo para usar o vender.' }
    ]
  }
];

let guiaCatActiva = 'all';
let guiaStepActual = 0;
let guiaPasosActuales = [];

function renderGuiaList(query) {
  const list = document.getElementById('guia-list');
  if (!list) return;
  const q = (query || '').toLowerCase();
  const filtered = GUIAS.filter(g =>
    (guiaCatActiva === 'all' || g.cat === guiaCatActiva) &&
    (g.title.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q))
  );
  if (!filtered.length) {
    list.innerHTML = '<div style="text-align:center;color:#9E9E9E;padding:32px;font-size:.85rem">No se encontraron guías</div>';
    return;
  }
  list.innerHTML = filtered.map(g => `
    <button class="guia-item" onclick="abrirGuia('${g.id}')">
      <div class="gi-icon">${g.icon}</div>
      <div class="gi-body">
        <strong>${g.title}</strong>
        <span>${g.desc}</span>
        <div class="gi-meta"><span>⏱ ${g.tiempo}</span><span class="gi-nivel">${g.nivel}</span></div>
      </div>
      <span class="gi-arrow">›</span>
    </button>
  `).join('');
}

function filterGuias(val) { renderGuiaList(val); }

function filterGuiaCat(btn) {
  document.querySelectorAll('.gcat').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  guiaCatActiva = btn.dataset.cat;
  renderGuiaList(document.getElementById('guia-search')?.value || '');
}

function abrirGuia(id) {
  const g = GUIAS.find(x => x.id === id);
  if (!g) return;
  guiaPasosActuales = g.pasos;
  guiaStepActual    = 0;
  document.getElementById('guia-detalle-titulo').textContent = g.title;
  renderPaso();
  document.getElementById('guia-completado').style.display = 'none';
  document.getElementById('guia-step-card').style.display = 'block';
  document.getElementById('guia-step-nav').style.display  = 'flex';
  goTo('screen-guia-detalle');
}

function renderPaso() {
  const total = guiaPasosActuales.length;
  const paso  = guiaPasosActuales[guiaStepActual];
  document.getElementById('gsp-label').textContent = `Paso ${guiaStepActual + 1} de ${total}`;
  document.getElementById('gsp-fill').style.width  = `${((guiaStepActual + 1) / total) * 100}%`;
  document.getElementById('gsc-num').textContent   = paso.num;
  document.getElementById('gsc-icon').textContent  = paso.icon;
  document.getElementById('gsc-title').textContent = paso.title;
  document.getElementById('gsc-desc').textContent  = paso.desc;
  const tipEl = document.getElementById('gsc-tip');
  if (paso.tip) { tipEl.textContent = paso.tip; tipEl.style.display = 'block'; }
  else          { tipEl.style.display = 'none'; }
  document.getElementById('btn-paso-prev').disabled = guiaStepActual === 0;
  document.getElementById('btn-paso-next').textContent = guiaStepActual === total - 1 ? '✅ Completar' : 'Siguiente →';
}

function nextPaso() {
  if (guiaStepActual < guiaPasosActuales.length - 1) {
    guiaStepActual++;
    renderPaso();
  } else {
    // Completado
    document.getElementById('guia-step-card').style.display = 'none';
    document.getElementById('guia-step-nav').style.display  = 'none';
    document.getElementById('guia-completado').style.display = 'block';
    showToast('🏆 ¡Guía completada!', 'green');
  }
}

function prevPaso() {
  if (guiaStepActual > 0) { guiaStepActual--; renderPaso(); }
}

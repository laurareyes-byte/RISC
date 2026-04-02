/* ══════════════════════════════════════
   RISC Ingeniería S.A.S — App JS
   ══════════════════════════════════════ */

// ── Estado global ──
let currentPage = 'home';
let servicesData = [];
let productsData = [];
let guidesData = [];

// ── Mapas de imágenes ──
const SERVICE_IMAGES = {
  'Mantenimiento de Tren Séptico': '/img/svc-tanque.svg',
  'Limpieza de Trampas de Grasa': '/img/svc-grasa.svg',
  'Tratamiento de Aguas Residuales': '/img/svc-agua.svg'
};

const CATEGORY_IMAGES = {
  'Lodos': '/img/cat-lodos.svg',
  'Grasas': '/img/cat-grasas.svg',
  'Gases': '/img/cat-gases.svg',
  'Agua': '/img/cat-agua.svg'
};

const GUIDE_IMAGES = {
  'Mantenimiento': '/img/svc-tanque.svg',
  'Lodos': '/img/cat-lodos.svg',
  'Agua': '/img/svc-agua.svg',
  'Gases': '/img/cat-gases.svg',
  'Seguridad': '/img/cat-gases.svg'
};

// ══════════════════════
// NAVEGACIÓN SPA
// ══════════════════════
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navBtn = document.querySelector(`.nav-btn[data-page="${page}"]`);
  if (navBtn) navBtn.classList.add('active');

  currentPage = page;

  // Cargar datos al navegar a la página
  if (page === 'services' && servicesData.length === 0) loadServices();
  if (page === 'products' && productsData.length === 0) loadProducts();
  if (page === 'guides' && guidesData.length === 0) loadGuides();
}

// ══════════════════════
// SERVICIOS
// ══════════════════════
async function loadServices() {
  const container = document.getElementById('services-list');
  container.innerHTML = '<div class="loading"><div class="spinner"></div>Cargando servicios...</div>';

  try {
    const res = await fetch('/api/services');
    servicesData = await res.json();
    renderServices(servicesData);
  } catch {
    container.innerHTML = '<p class="text-center" style="color:var(--text-muted);padding:40px;">Error al cargar. Verifica tu conexión.</p>';
  }
}

function renderServices(services) {
  const container = document.getElementById('services-list');
  container.innerHTML = services.map(s => `
    <div class="card card-with-image">
      <div class="card-image">
        <img src="${SERVICE_IMAGES[s.name] || '/img/svc-tanque.svg'}" alt="${s.name}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-icon">${s.icon}</div>
        <h3>${s.name}</h3>
        <p>${s.description}</p>
        <div class="card-benefits">
          ${s.benefits.split('|').map(b => `<span class="benefit-tag">✓ ${b.trim()}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════
// PRODUCTOS
// ══════════════════════
let activeCategory = 'Todos';

async function loadProducts(category) {
  const container = document.getElementById('products-list');
  container.innerHTML = '<div class="loading"><div class="spinner"></div>Cargando productos...</div>';

  try {
    let url = '/api/products';
    if (category && category !== 'Todos') url += `?category=${encodeURIComponent(category)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!category || category === 'Todos') productsData = data;
    renderProducts(data);
  } catch {
    container.innerHTML = '<p class="text-center" style="color:var(--text-muted);padding:40px;">Error al cargar productos.</p>';
  }
}

function filterProducts(category) {
  activeCategory = category;
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab-btn[data-cat="${category}"]`)?.classList.add('active');
  loadProducts(category);
}

function renderProducts(products) {
  const container = document.getElementById('products-list');
  container.innerHTML = '<div class="cards-grid">' + products.map(p => `
    <div class="card card-with-image">
      <div class="card-image card-image-sm">
        <img src="${CATEGORY_IMAGES[p.category] || '/img/cat-agua.svg'}" alt="${p.category}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-icon">${p.icon}</div>
        <span class="card-category-tag">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="card-usage">
          <strong>📋 Modo de uso</strong>
          ${p.usage}
        </div>
      </div>
    </div>
  `).join('') + '</div>';
}

// ══════════════════════
// GUÍAS INTERACTIVAS
// ══════════════════════
async function loadGuides() {
  const container = document.getElementById('guides-list');
  container.innerHTML = '<div class="loading"><div class="spinner"></div>Cargando guías...</div>';

  try {
    const res = await fetch('/api/guides');
    guidesData = await res.json();
    renderGuidesList(guidesData);
  } catch {
    container.innerHTML = '<p class="text-center" style="color:var(--text-muted);padding:40px;">Error al cargar guías.</p>';
  }
}

function renderGuidesList(guides) {
  const container = document.getElementById('guides-list');
  container.innerHTML = guides.map(g => `
    <div class="card card-with-image guide-card" onclick="showGuide(${g.id})">
      <div class="card-image card-image-sm">
        <img src="${GUIDE_IMAGES[g.category] || '/img/svc-tanque.svg'}" alt="${g.category}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-icon">${g.icon}</div>
        <h3>${g.title}</h3>
        <p style="color:var(--text-muted);font-size:13px;">📖 ${JSON.parse(g.steps).length} pasos · ${g.category}</p>
        <span class="guide-arrow">Ver guía →</span>
      </div>
    </div>
  `).join('');
}

function showGuide(id) {
  const guide = guidesData.find(g => g.id === id);
  if (!guide) return;

  const steps = JSON.parse(guide.steps);
  const container = document.getElementById('guides-list');

  container.innerHTML = `
    <button class="back-btn" onclick="renderGuidesList(guidesData)">← Volver a guías</button>
    <div class="card">
      <div class="card-icon">${guide.icon}</div>
      <h3>${guide.title}</h3>
      <p style="margin-bottom:16px;color:var(--text-light);">${guide.category}</p>
      ${steps.map(s => `
        <div class="step">
          <div class="step-number">${s.step}</div>
          <div class="step-content">
            <h4>${s.title}</h4>
            <p>${s.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ══════════════════════
// CALCULADORA
// ══════════════════════
async function calculate() {
  const largo = parseFloat(document.getElementById('calc-largo').value);
  const ancho = parseFloat(document.getElementById('calc-ancho').value);
  const profundidad = parseFloat(document.getElementById('calc-prof').value);

  if (!largo || !ancho || !profundidad || largo <= 0 || ancho <= 0 || profundidad <= 0) {
    alert('Por favor ingrese todas las dimensiones con valores mayores a 0.');
    return;
  }

  const resultsEl = document.getElementById('calc-results');

  try {
    const res = await fetch('/api/calculator', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ largo, ancho, profundidad })
    });

    if (!res.ok) {
      const err = await res.json();
      alert(err.error || 'Error en el cálculo.');
      return;
    }

    const data = await res.json();
    renderResults(data);
  } catch {
    // Cálculo offline de respaldo
    const volM3 = largo * ancho * profundidad;
    const volL = volM3 * 1000;
    let freq = 'Cada 24 meses';
    if (volL < 1000) freq = 'Cada 6 meses';
    else if (volL < 3000) freq = 'Cada 12 meses';
    else if (volL < 5000) freq = 'Cada 18 meses';

    renderResults({
      volumenM3: Math.round(volM3 * 100) / 100,
      volumenLitros: Math.round(volL * 100) / 100,
      frecuencia: freq,
      productosRecomendados: [
        `Bioactivador de Lodos: ${Math.ceil(volL / 500)} dosis mensuales`,
        `Desengrasante Biológico: ${Math.ceil(volL / 1000)} litros/mes`,
        `Pastillas Purificadoras: ${Math.ceil(volL / 500)} pastillas/mes`
      ]
    });
  }
}

function renderResults(data) {
  const resultsEl = document.getElementById('calc-results');
  resultsEl.classList.add('visible');
  resultsEl.innerHTML = `
    <div class="calc-results-grid">
      <div class="result-card">
        <div class="result-icon">📦</div>
        <div class="result-value">${data.volumenM3} m³</div>
        <div class="result-label">Volumen total</div>
      </div>
      <div class="result-card">
        <div class="result-icon">💧</div>
        <div class="result-value">${data.volumenLitros} L</div>
        <div class="result-label">En litros</div>
      </div>
      <div class="result-card">
        <div class="result-icon">📅</div>
        <div class="result-value" style="font-size:20px;">${data.frecuencia}</div>
        <div class="result-label">Frecuencia de limpieza</div>
      </div>
    </div>
    <div class="result-products mt-16">
      <h4>🛒 Productos recomendados</h4>
      <ul>
        ${data.productosRecomendados.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  `;
}

// ══════════════════════
// CHATBOT FAQ
// ══════════════════════
const FAQ_DATA = [
  {
    q: '¿Cómo limpiar un tanque séptico?',
    a: 'Para limpiar un tanque séptico: 1) Localice las tapas de inspección, 2) Ventile el área por al menos 30 minutos, 3) Contrate un servicio profesional con camión vacuum, 4) Aplique Bioactivador de Lodos después de la limpieza. ⚠️ ¡Nunca ingrese al tanque! Consulte nuestras guías para más detalle.'
  },
  {
    q: '¿Cada cuánto hacer mantenimiento?',
    a: 'La frecuencia depende del tamaño del tanque y su uso:\n• Tanques pequeños (<1,000 L): cada 6 meses\n• Tanques medianos (1,000-3,000 L): cada 12 meses\n• Tanques grandes (3,000-5,000 L): cada 18 meses\n• Tanques muy grandes (>5,000 L): cada 24 meses\n\n📐 Use nuestra Calculadora para una recomendación personalizada.'
  },
  {
    q: '¿Qué producto usar para lodos?',
    a: 'Recomendamos:\n• Bioactivador de Lodos: para mantenimiento mensual regular. Reduce el volumen de sólidos.\n• Reductor de Lodos Sólidos: usar 48 horas antes de una limpieza programada.\n\n🛒 Visite la sección de Productos para más información y dosificación.'
  },
  {
    q: '¿Qué producto usar para grasas?',
    a: 'Para el manejo de grasas recomendamos:\n• Desengrasante Biológico: uso semanal para mantenimiento preventivo.\n• Limpiador de Trampas de Grasa: para limpieza profunda quincenal.\n\nAmbos son biodegradables y seguros para el medio ambiente. 🌿'
  },
  {
    q: '¿Cómo manejar los gases del tanque?',
    a: '⚠️ Los gases sépticos (metano, H₂S) son peligrosos:\n• Siempre ventile el área antes de trabajar cerca del tanque.\n• Nunca use llamas abiertas.\n• Use nuestro Neutralizador de Gases en las ventilaciones.\n• Instale Filtros de Carbón Activado y reemplácelos cada 3 meses.\n• Si percibe olores fuertes, contacte a RISC Ingeniería.'
  },
  {
    q: '¿Cómo contactar a RISC Ingeniería?',
    a: 'Puede contactarnos de varias formas:\n📱 WhatsApp: Haga clic en el botón verde flotante.\n📧 Email: info@riscingenieria.com\n📞 Teléfono: disponible en WhatsApp.\n\nEstamos disponibles de lunes a sábado. Para emergencias, escríbanos por WhatsApp indicando "URGENTE".'
  },
  {
    q: '¿Qué servicios ofrecen?',
    a: 'RISC Ingeniería ofrece:\n\n🔧 Mantenimiento de Tren Séptico: inspección, limpieza y mantenimiento preventivo.\n🧹 Limpieza de Trampas de Grasa: retiro profesional con equipos especializados.\n💧 Tratamiento de Aguas Residuales: soluciones integrales de purificación.\n\nTodos incluyen diagnóstico, servicio y recomendaciones personalizadas.'
  },
  {
    q: '¿Tienen servicio de emergencia?',
    a: '🚨 Sí, contamos con servicio de emergencia para:\n• Desbordamientos de tanques sépticos\n• Obstrucciones críticas\n• Fugas de aguas residuales\n\nContáctenos por WhatsApp con la palabra "URGENTE" para atención prioritaria. Respondemos en menos de 30 minutos.'
  }
];

function toggleChatbot() {
  const panel = document.getElementById('chatbot-panel');
  const overlay = document.getElementById('chatbot-overlay');
  const isOpen = panel.classList.contains('open');

  if (isOpen) {
    panel.classList.remove('open');
    overlay.classList.remove('open');
  } else {
    panel.classList.add('open');
    overlay.classList.add('open');
    // Mensaje de bienvenida
    const msgs = document.getElementById('chatbot-messages');
    if (msgs.children.length === 0) {
      addBotMessage('¡Hola! 👋 Soy el asistente virtual de RISC Ingeniería. Seleccione una pregunta o escriba la suya.');
    }
  }
}

function addBotMessage(text) {
  const msgs = document.getElementById('chatbot-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMessage(text) {
  const msgs = document.getElementById('chatbot-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function askQuestion(index) {
  const faq = FAQ_DATA[index];
  if (!faq) return;

  addUserMessage(faq.q);
  setTimeout(() => addBotMessage(faq.a), 400);
}

// ══════════════════════
// OFFLINE DETECTION
// ══════════════════════
function updateOnlineStatus() {
  const banner = document.getElementById('offline-banner');
  if (!navigator.onLine) {
    banner.classList.add('visible');
  } else {
    banner.classList.remove('visible');
  }
}

// ══════════════════════
// NOTIFICACIONES SIMPLES
// ══════════════════════
function showNotification(icon, title, message, duration = 5000) {
  const toast = document.getElementById('notification-toast');
  if (!toast) return;
  toast.querySelector('.notif-icon').textContent = icon;
  toast.querySelector('.notif-content h4').textContent = title;
  toast.querySelector('.notif-content p').textContent = message;
  toast.classList.add('show');

  if (toast._timeout) clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), duration);
}

function dismissNotification() {
  document.getElementById('notification-toast')?.classList.remove('show');
}

function scheduleMaintenanceReminder() {
  // Mostrar recordatorio a los 15 segundos de usar la app
  setTimeout(() => {
    showNotification(
      '🔔',
      'Recordatorio de mantenimiento',
      '¿Ya revisaste tu tanque séptico? Usa la calculadora para saber cuándo hacer limpieza.',
      8000
    );
  }, 15000);

  // Si el navegador soporta Notification API, solicitar permiso
  if ('Notification' in window && Notification.permission === 'default') {
    setTimeout(() => {
      Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
          new Notification('RISC Ingeniería', {
            body: 'Recuerda revisar el mantenimiento de tu sistema séptico periódicamente.',
            icon: '/img/logoempresa.png',
            badge: '/img/logoempresa.png'
          });
        }
      });
    }, 30000);
  }
}

// ══════════════════════
// SERVICE WORKER
// ══════════════════════
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
      console.log('Service Worker registrado');
    }).catch(err => {
      console.log('SW error:', err);
    });
  }
}

// ══════════════════════
// INICIALIZACIÓN
// ══════════════════════
document.addEventListener('DOMContentLoaded', () => {
  registerSW();
  updateOnlineStatus();
  window.addEventListener('online', () => {
    updateOnlineStatus();
    showNotification('✅', 'Conexión restaurada', 'Estás de nuevo en línea.', 3000);
  });
  window.addEventListener('offline', () => {
    updateOnlineStatus();
    showNotification('📡', 'Sin conexión', 'Las guías y datos guardados están disponibles offline.', 5000);
  });

  // Navegación inferior
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });

  // Pre-cargar datos de todas las secciones para offline
  prefetchData();

  // Recordatorio de mantenimiento
  scheduleMaintenanceReminder();
});

// Pre-carga datos en segundo plano para disponibilidad offline
async function prefetchData() {
  try {
    const [svcs, prods, gds] = await Promise.allSettled([
      fetch('/api/services').then(r => r.json()),
      fetch('/api/products').then(r => r.json()),
      fetch('/api/guides').then(r => r.json())
    ]);
    if (svcs.status === 'fulfilled') servicesData = svcs.value;
    if (prods.status === 'fulfilled') productsData = prods.value;
    if (gds.status === 'fulfilled') guidesData = gds.value;
  } catch { /* silencioso */ }
}

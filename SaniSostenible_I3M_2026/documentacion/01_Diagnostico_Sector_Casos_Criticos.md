# 🔬 Diagnóstico del Sector y Casos de Uso Críticos
## Concurso I3M 2026-1 · SaniSostenible 2.0

---

## PARTE 1: DIAGNÓSTICO DEL SECTOR

### 1.1 El Colapso Silencioso del Saneamiento Descentralizado

#### Falla Crítica
El **70% de los sistemas rurales** fallan prematuramente por:
- Falta de mantenimiento técnico calificado
- Desconocimiento operativo de los usuarios finales
- Ausencia de manuales accesibles y en lenguaje simple
- Falta de herramientas digitales adaptadas a contextos rurales

#### Consecuencias Sanitarias
- Aumento de **Enfermedades Transmitidas por el Agua (ETAs)**
- Contaminación de **acuíferos locales** que abastecen comunidades
- Proliferación de vectores (moscas, roedores) en sistemas desbordados
- Exposición a **sulfuro de hidrógeno (H₂S)** y metano sin protocolos

#### Impacto Económico
- Pérdida total de la inversión estatal y familiar
- Costo promedio de reposición de un sistema séptico: **$8-15 millones COP**
- Costo de mantenimiento preventivo anual: **$300.000-600.000 COP**
- **Ratio 20:1** — Cada peso invertido en mantenimiento evita 20 en reparación

#### Brecha de Información
| Aspecto | Situación Actual | Con SaniSostenible 2.0 |
|---|---|---|
| Conocimiento técnico | Solo disponible para expertos | Democratizado en lenguaje simple |
| Diagnóstico del sistema | Requiere visita profesional | Autodiagnóstico visual guiado |
| Frecuencia de mantenimiento | Desconocida por usuarios | Calculada automáticamente |
| Manejo de subproductos | Disposición inadecuada | Protocolo de compostaje seguro |

---

### 1.2 Contexto del Sistema Séptico Rural

Un **tren séptico** típico en zona rural incluye:

```
ENTRADA → [Trampa de Grasas] → [Tanque Séptico] → [Campo de Infiltración]
              ↓                       ↓
         Lodos grasos            Lodos digeridos
              ↓                       ↓
       [Compost Graso]          [Compost de Lodos]
```

**Componentes monitoreados por RISC Ingeniería S.A.S:**
- **Lodos**: Bioactivador, Reductor de Lodos Sólidos
- **Grasas**: Desengrasante Biológico, Limpiador de Trampas
- **Gases**: Neutralizador H₂S, Filtro Carbón Activado
- **Agua**: Clarificador, Pastillas Purificadoras

---

## PARTE 2: CASOS DE USO CRÍTICOS

### 2.1 Caso Crítico 1 — Empresa de Mantenimiento
**"Los equipos definen qué van a medir, cómo y cada cuándo (caudales, lodos, etc.)"**

#### Contexto
Una empresa de mantenimiento como RISC llega a un predio rural y necesita:
1. Registrar el sistema existente
2. Definir los parámetros de medición
3. Establecer protocolos de seguimiento
4. Generar reportes de estado

#### Flujo de Caso de Uso

```
ACTOR: Técnico de RISC Ingeniería
PRECONDICIÓN: Visita programada en campo
POSTCONDICIÓN: Plan de mantenimiento personalizado guardado

PASOS:
1. Técnico abre SaniSostenible 2.0 en smartphone
2. Selecciona "Nueva Inspección"
3. Usa cámara para capturar fotos del sistema
4. Identifica tipo de sistema (séptico básico / trampa + séptico / PTARD)
5. Ingresa mediciones:
   a. Nivel de lodos en tanque (cm)
   b. Caudal estimado (L/día)
   c. N° de usuarios del sistema
   d. Última fecha de mantenimiento
6. App calcula:
   - Frecuencia recomendada de mantenimiento
   - Productos necesarios y dosis
   - Próxima fecha de intervención
7. Técnico guarda el registro y genera PDF del informe
8. Cliente recibe notificación en WhatsApp con plan de acción
```

#### Métricas del Sistema a Medir

| Parámetro | Método de Medición | Frecuencia | Umbral de Alerta |
|---|---|---|---|
| Nivel de lodos | Regla o sonda | Mensual | > 60% capacidad |
| Nivel de natas | Visual | Mensual | > 5 cm de grosor |
| Caudal entrada | Aforo volumétrico | Trimestral | Δ ±30% del histórico |
| Olor perceptible | Sensorial | En cada visita | Olor sulfúrico intenso |
| Turbidez efluente | Visual | En cada visita | Alta turbidez |
| Humedad suelo | Tactil/visual | Mensual | Suelo siempre saturado |

#### Calculadora Existente (mejorada)

La API actual calcula por volumen:
```csharp
// Actual en Program.cs:
var volumenLitros = input.Largo * input.Ancho * input.Profundidad * 1000;

// MEJORA PROPUESTA: incluir caudal y número de usuarios
var cargaHidraulica = input.NumUsuarios * 120; // L/día/persona
var tiempoRetencion = volumenLitros / cargaHidraulica;
var frecuenciaVaciado = CalcularFrecuenciaSegunNorma(volumenLitros, cargaHidraulica);
```

---

### 2.2 Caso Crítico 2 — Manual de Operación y Mantenimiento Interactivo (MOM)
**"Identificación del sistema mediante reconocimiento visual"**

#### Contexto
Un usuario rural sin conocimiento técnico necesita saber si su sistema séptico requiere atención urgente.

#### Flujo de Caso de Uso

```
ACTOR: Usuario rural (propietario de finca)
PRECONDICIÓN: Tiene smartphone con conexión o modo offline
POSTCONDICIÓN: Sabe qué hacer con su sistema y cuándo llamar a un experto

PASOS:
1. Usuario abre la app (PWA instalada en su celular)
2. Selecciona "Diagnóstico Rápido" del menú principal
3. App presenta checklist visual de síntomas:
   ✅ ¿Hay olores en la casa?
   ✅ ¿Los retretes se demoran en desocupar?
   ✅ ¿Hay agua estancada cerca del campo de infiltración?
   ✅ ¿La trampa de grasas rebosa?
4. Según respuestas, app clasifica:
   🟢 VERDE: Sistema OK — seguir protocolo de mantenimiento preventivo
   🟡 AMARILLO: Atención pronto — aplicar productos y monitorear
   🔴 ROJO: Emergencia — llamar a técnico inmediatamente
5. Para cada nivel, app muestra:
   - Guía visual paso a paso del protocolo correspondiente
   - Productos recomendados con dosis exactas
   - Video tutorial (o ilustración si no hay conexión)
   - Botón directo a WhatsApp de RISC si es nivel ROJO
```

#### Pantallas de Diagnóstico

**Pantalla 1: Selección de componente**
```
┌─────────────────────────────┐
│  🔍 ¿Qué quieres revisar?  │
├─────────────────────────────┤
│  🪣 Tanque Séptico          │
│  🫧 Trampa de Grasas        │
│  💧 Campo de Infiltración   │
│  💨 Gases / Olores          │
└─────────────────────────────┘
```

**Pantalla 2: Diagnóstico visual (ejemplo: Tanque Séptico)**
```
┌─────────────────────────────┐
│  🪣 Diagnóstico del Tanque  │
├─────────────────────────────┤
│  ¿Cuánto tiempo desde el   │
│  último vaciado?            │
│                             │
│  ○ Menos de 1 año          │
│  ○ 1-2 años                 │
│  ● Más de 2 años           │
│  ○ No lo sé                 │
│                    [Siguiente→]│
└─────────────────────────────┘
```

**Pantalla 3: Resultado del diagnóstico**
```
┌─────────────────────────────┐
│  🔴 ATENCIÓN REQUERIDA     │
├─────────────────────────────┤
│  Tu tanque posiblemente    │
│  necesita mantenimiento    │
│  urgente                   │
│                             │
│  📋 Pasos a seguir:        │
│  1. Aplicar Bioactivador   │
│  2. Evitar uso excesivo    │
│  3. Contactar técnico      │
│                             │
│  [📞 Llamar a RISC]        │
│  [📋 Ver guía completa]    │
└─────────────────────────────┘
```

---

### 2.3 Caso Crítico 3 — Generación de Subproductos Sostenibles
**"Creación de compost seguro a partir de lodos tratados"**

#### Flujo de Caso de Uso

```
ACTOR: Usuario rural o técnico de RISC
PRECONDICIÓN: Se han extraído lodos del tanque séptico
POSTCONDICIÓN: Lodos convertidos en compost inocuo para uso agrícola

PASOS:
1. Diagnóstico de seguridad del lodo extraído
   - App pregunta: ¿Hubo enfermedades activas en el hogar?
   - Tiempo de almacenamiento en tanque
   - Olor y color del lodo
2. Clasificación del riesgo:
   BAJO → Proceder con compostaje directo
   MEDIO → Tratamiento térmico previo recomendado
   ALTO → Manejo especial + notificar autoridad sanitaria
3. Protocolo de tratamiento térmico (si aplica)
   - Temperatura mínima: 55°C por 3 días
   - Volteo cada 24 horas
   - Verificación de temperatura
4. Guía de construcción de compostera
5. Calendario de volteo y monitoreo (12 semanas)
6. Identificación de producto terminado
   - Color oscuro uniforme
   - Olor a tierra húmeda
   - Temperatura ambiente
```

---

### 2.4 Matriz de Riesgos del Saneamiento Rural

| Riesgo | Probabilidad | Impacto | Mitigación en SaniSostenible |
|---|---|---|---|
| Colapso del tanque | Alta | Muy alto | Alertas preventivas + calculadora |
| Contaminación de pozo | Media | Muy alto | Diagnóstico de campo de infiltración |
| Exposición a H₂S | Baja | Crítico | Protocolo de seguridad + Neutralizador |
| Proliferación de vectores | Alta | Alto | Guía de bioactivación mensual |
| Desbordamiento trampa grasa | Alta | Medio | Recordatorios periódicos + guía limpieza |
| Manejo incorrecto de lodos | Alta | Alto | Módulo Eco-Compost con clasificación |

---

*Documento generado el 21 de Abril de 2026 · RISC Ingeniería S.A.S*  
*Concurso I3M 2026-1 · Universidad Santo Tomás Tunja*

# ═══════════════════════════════════════════════════════════
#  SaniSostenible 2.0 — Script de Empaque para Entrega I3M
#  Ejecutar desde C:\RISC con: .\empacar-entrega.ps1
# ═══════════════════════════════════════════════════════════

param(
    [string]$OutputDir = "C:\RISC\SaniSostenible_I3M_2026"
)

$ErrorActionPreference = "Stop"
$Base = "C:\RISC"

Write-Host ""
Write-Host "══════════════════════════════════════════" -ForegroundColor Green
Write-Host "  SaniSostenible 2.0 — Empacando entrega  " -ForegroundColor Green
Write-Host "══════════════════════════════════════════" -ForegroundColor Green
Write-Host ""

# ── Crear estructura de carpetas ──────────────────────────
$folders = @(
    "$OutputDir\assets\screenshots",
    "$OutputDir\figma",
    "$OutputDir\documentacion"
)
foreach ($f in $folders) {
    if (-not (Test-Path $f)) {
        New-Item -ItemType Directory -Path $f | Out-Null
        Write-Host "  ✅ Carpeta creada: $f" -ForegroundColor Cyan
    }
}

# ── Copiar documentación ──────────────────────────────────
Write-Host ""
Write-Host "📄 Copiando documentación..." -ForegroundColor Yellow
$docs = Get-ChildItem "$Base\Documentacion\*.md" -ErrorAction SilentlyContinue
foreach ($doc in $docs) {
    Copy-Item $doc.FullName "$OutputDir\documentacion\" -Force
    Write-Host "  → $($doc.Name)"
}

# ── Copiar archivos Figma ─────────────────────────────────
Write-Host ""
Write-Host "🎨 Copiando archivos Figma..." -ForegroundColor Yellow
$figmaFiles = Get-ChildItem "$Base\Documentacion\figma\*" -ErrorAction SilentlyContinue
foreach ($f in $figmaFiles) {
    Copy-Item $f.FullName "$OutputDir\figma\" -Force
    Write-Host "  → $($f.Name)"
}

# ── Copiar assets ─────────────────────────────────────────
Write-Host ""
Write-Host "🖼️  Copiando assets..." -ForegroundColor Yellow
$assets = @(
    "$Base\wwwroot\img\logo-sanisostenible.svg",
    "$Base\wwwroot\img\logoempresa.png"
)
foreach ($a in $assets) {
    if (Test-Path $a) {
        Copy-Item $a "$OutputDir\assets\" -Force
        Write-Host "  → $(Split-Path $a -Leaf)"
    } else {
        Write-Host "  ⚠️  No encontrado: $a" -ForegroundColor DarkYellow
    }
}

# ── Verificar PDFs ────────────────────────────────────────
Write-Host ""
Write-Host "📊 Verificando PDFs..." -ForegroundColor Yellow
$pdfs = @(
    "$OutputDir\Presentacion_Pitch.pdf",
    "$OutputDir\Documentacion_Complementaria.pdf"
)
foreach ($pdf in $pdfs) {
    if (Test-Path $pdf) {
        $size = (Get-Item $pdf).Length / 1KB
        Write-Host "  ✅ $(Split-Path $pdf -Leaf) ($([math]::Round($size,1)) KB)" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  PENDIENTE: $(Split-Path $pdf -Leaf)" -ForegroundColor DarkYellow
        Write-Host "     → Abrir /pitch-slides o /doc-complementaria y guardar como PDF" -ForegroundColor Gray
    }
}

# ── Checklist final ───────────────────────────────────────
Write-Host ""
Write-Host "══════════════════════════════════════════" -ForegroundColor Green
Write-Host "  CHECKLIST DE ENTREGA" -ForegroundColor Green
Write-Host "══════════════════════════════════════════" -ForegroundColor Green
Write-Host ""

$checks = @(
    @{ File = "$OutputDir\README.md";                     Label = "README.md" },
    @{ File = "$OutputDir\PROTOTIPO_URL.txt";             Label = "PROTOTIPO_URL.txt" },
    @{ File = "$OutputDir\Presentacion_Pitch.pdf";        Label = "Presentacion_Pitch.pdf (PDF)" },
    @{ File = "$OutputDir\Documentacion_Complementaria.pdf"; Label = "Documentacion_Complementaria.pdf (PDF)" },
    @{ File = "$OutputDir\figma\tokens.json";             Label = "figma/tokens.json" },
    @{ File = "$OutputDir\figma\figma-plugin.js";         Label = "figma/figma-plugin.js" },
    @{ File = "$OutputDir\assets\logo-sanisostenible.svg";Label = "assets/logo-sanisostenible.svg" },
    @{ File = "$OutputDir\documentacion\07_Pitch_Presentacion_Script.md"; Label = "documentacion/07_Pitch_Presentacion_Script.md" }
)

$ok = 0; $pending = 0
foreach ($c in $checks) {
    if (Test-Path $c.File) {
        Write-Host "  ✅ $($c.Label)" -ForegroundColor Green
        $ok++
    } else {
        Write-Host "  ❌ $($c.Label)" -ForegroundColor Red
        $pending++
    }
}

Write-Host ""
Write-Host "  Completos: $ok / $($checks.Count)" -ForegroundColor White
if ($pending -gt 0) {
    Write-Host "  Pendientes: $pending — revisar arriba ⬆️" -ForegroundColor Yellow
} else {
    Write-Host "  ¡Paquete listo para entregar! 🚀" -ForegroundColor Green
}

# ── Crear ZIP ─────────────────────────────────────────────
Write-Host ""
$zipPath = "C:\RISC\SaniSostenible_I3M_2026_$(Get-Date -Format 'yyyyMMdd').zip"
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
try {
    Compress-Archive -Path "$OutputDir\*" -DestinationPath $zipPath
    $zipSize = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
    Write-Host "  📦 ZIP creado: $(Split-Path $zipPath -Leaf) ($zipSize MB)" -ForegroundColor Green
} catch {
    Write-Host "  ⚠️  No se pudo crear el ZIP: $_" -ForegroundColor DarkYellow
}

Write-Host ""
Write-Host "══════════════════════════════════════════" -ForegroundColor Green
Write-Host "  Empaque completado." -ForegroundColor Green
Write-Host "══════════════════════════════════════════" -ForegroundColor Green
Write-Host ""

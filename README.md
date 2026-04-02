# 🏗️ RISC Ingeniería S.A.S — PWA

Aplicación web progresiva (PWA) para RISC Ingeniería S.A.S.  
Mantenimiento de sistemas sépticos, tratamiento de aguas residuales y manejo de subproductos.

---

## 📋 Requisitos previos

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) (gratuito)
- Editor: [Visual Studio Code](https://code.visualstudio.com/) o Visual Studio

---

## 🚀 Cómo ejecutar en local

```bash
# 1. Clonar o descargar el proyecto
cd RISC

# 2. Restaurar dependencias
dotnet restore

# 3. Ejecutar la aplicación
dotnet run
```

La app estará disponible en: **http://localhost:5000** (o el puerto que indique la consola).

> Para HTTPS (requerido para PWA en producción): `dotnet run --urls "https://localhost:5001"`

---

## 📱 Instalar como PWA

1. Abrir la app en **Chrome** o **Edge** en tu celular
2. Navegar a la URL de la app
3. El navegador mostrará un banner **"Instalar aplicación"** o ir al menú ⋮ → "Instalar"
4. ¡Listo! La app aparece como un ícono en tu pantalla de inicio

---

## 🗂️ Estructura del proyecto

```
RISC/
├── Program.cs              ← Punto de entrada + API endpoints
├── RISC.csproj             ← Archivo del proyecto .NET
├── appsettings.json        ← Configuración
├── Models/
│   ├── Service.cs          ← Modelo de servicios
│   ├── Product.cs          ← Modelo de productos
│   └── Guide.cs            ← Modelo de guías
├── Data/
│   ├── AppDbContext.cs      ← Contexto de Entity Framework
│   └── SeedData.cs          ← Datos iniciales (semilla)
└── wwwroot/                 ← Archivos estáticos (frontend)
    ├── index.html           ← Página principal (SPA)
    ├── manifest.json        ← Configuración PWA
    ├── sw.js                ← Service Worker (offline)
    ├── css/
    │   └── styles.css       ← Estilos
    ├── js/
    │   └── app.js           ← Lógica JavaScript
    └── img/
        ├── icon-192.svg     ← Ícono PWA 192px
        └── icon-512.svg     ← Ícono PWA 512px
```

---

## 🔌 API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/services` | Lista todos los servicios |
| GET | `/api/products` | Lista todos los productos |
| GET | `/api/products?category=Lodos` | Filtra productos por categoría |
| GET | `/api/guides` | Lista todas las guías |
| GET | `/api/guides/{id}` | Detalle de una guía |
| POST | `/api/calculator` | Calcula volumen y recomendaciones |

### Ejemplo de calculadora:
```json
POST /api/calculator
{
  "largo": 2.5,
  "ancho": 1.5,
  "profundidad": 1.8
}
```

---

## 🗄️ Base de datos

- **SQLite** — archivo local `risc.db`
- Se crea automáticamente al ejecutar la app
- Los datos semilla se cargan en el primer inicio
- Para reiniciar datos: eliminar `risc.db` y reiniciar la app

---

## ☁️ Opciones de Despliegue GRATIS

### Opción 1: Azure App Service (Free Tier)

```bash
# Instalar Azure CLI: https://aka.ms/installazurecliwindows

# Iniciar sesión
az login

# Crear grupo de recursos
az group create --name risc-rg --location eastus

# Crear plan gratuito
az appservice plan create --name risc-plan --resource-group risc-rg --sku F1 --is-linux

# Crear webapp
az webapp create --name risc-app --resource-group risc-rg --plan risc-plan --runtime "DOTNETCORE:8.0"

# Publicar
dotnet publish -c Release -o ./publish
cd publish
zip -r ../deploy.zip .
az webapp deploy --resource-group risc-rg --name risc-app --src-path ../deploy.zip
```

### Opción 2: Render (gratis)

1. Subir proyecto a GitHub
2. Ir a [render.com](https://render.com) y crear cuenta gratis
3. Nuevo → Web Service → Conectar repositorio
4. Configurar:
   - **Runtime**: Docker o .NET
   - **Build Command**: `dotnet publish -c Release -o out`
   - **Start Command**: `dotnet out/RISC.dll`
5. Deploy — ¡Listo!

### Opción 3: Railway (gratis con créditos)

1. Ir a [railway.app](https://railway.app) y crear cuenta
2. Nuevo proyecto → Deploy from GitHub
3. Railway detecta .NET automáticamente
4. Variables de entorno: `ASPNETCORE_URLS=http://+:$PORT`

### Opción 4: GitHub Pages (solo frontend estático)

Si solo necesitas el frontend sin API:
1. Copiar contenido de `wwwroot/` a un repo de GitHub
2. Settings → Pages → Source: main branch
3. La calculadora funcionará en modo offline (cálculo local)

---

## ⚙️ Configuración del WhatsApp

Buscar `57XXXXXXXXXX` en los archivos y reemplazar por el número real de la empresa:

- [wwwroot/index.html](wwwroot/index.html) — botones de WhatsApp (2 lugares)

Formato: código de país + número sin espacios. Ejemplo Colombia: `573001234567`

---

## 🛠️ Personalización

### Cambiar colores
Editar las variables CSS en [wwwroot/css/styles.css](wwwroot/css/styles.css):
```css
:root {
  --primary: #1B5E20;        /* Verde oscuro */
  --primary-light: #4CAF50;  /* Verde claro */
  --secondary: #0288D1;      /* Azul */
}
```

### Agregar más productos/servicios/guías
Editar [Data/SeedData.cs](Data/SeedData.cs), eliminar `risc.db` y reiniciar la app.

### Cambiar íconos PWA
Reemplazar los archivos SVG en `wwwroot/img/` con el logo real de la empresa.
Para mejor compatibilidad, convertir a PNG de 192x192 y 512x512 píxeles.

---

## 📄 Licencia

Proyecto académico — Uso educativo.

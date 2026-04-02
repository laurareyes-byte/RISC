using Microsoft.EntityFrameworkCore;
using RISC.Data;
using RISC.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=risc.db"));

var app = builder.Build();

// Inicializar base de datos con datos semilla
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
    SeedData.Initialize(db);
}

app.UseStaticFiles();

// ── API: Servicios ──
app.MapGet("/api/services", async (AppDbContext db) =>
    await db.Services.ToListAsync());

// ── API: Productos (con filtro opcional por categoría) ──
app.MapGet("/api/products", async (string? category, AppDbContext db) =>
{
    var query = db.Products.AsQueryable();
    if (!string.IsNullOrEmpty(category))
        query = query.Where(p => p.Category == category);
    return await query.ToListAsync();
});

// ── API: Guías ──
app.MapGet("/api/guides", async (AppDbContext db) =>
    await db.Guides.ToListAsync());

app.MapGet("/api/guides/{id}", async (int id, AppDbContext db) =>
    await db.Guides.FindAsync(id) is Guide g ? Results.Ok(g) : Results.NotFound());

// ── API: Calculadora de tanque séptico ──
app.MapPost("/api/calculator", (CalculatorInput input) =>
{
    if (input.Largo <= 0 || input.Ancho <= 0 || input.Profundidad <= 0)
        return Results.BadRequest(new { error = "Todas las dimensiones deben ser mayores a 0." });

    if (input.Largo > 50 || input.Ancho > 50 || input.Profundidad > 50)
        return Results.BadRequest(new { error = "Las dimensiones parecen demasiado grandes. Use metros." });

    var volumenM3 = input.Largo * input.Ancho * input.Profundidad;
    var volumenLitros = volumenM3 * 1000;

    string frecuencia;
    if (volumenLitros < 1000)
        frecuencia = "Cada 6 meses";
    else if (volumenLitros < 3000)
        frecuencia = "Cada 12 meses";
    else if (volumenLitros < 5000)
        frecuencia = "Cada 18 meses";
    else
        frecuencia = "Cada 24 meses";

    var productos = new List<string>
    {
        $"Bioactivador de Lodos: {Math.Ceiling(volumenLitros / 500.0)} dosis mensuales",
        $"Desengrasante Biológico: {Math.Ceiling(volumenLitros / 1000.0)} litros/mes",
        $"Pastillas Purificadoras: {Math.Ceiling(volumenLitros / 500.0)} pastillas/mes"
    };

    return Results.Ok(new
    {
        VolumenM3 = Math.Round(volumenM3, 2),
        VolumenLitros = Math.Round(volumenLitros, 2),
        Frecuencia = frecuencia,
        ProductosRecomendados = productos
    });
});

// SPA fallback: sirve index.html para rutas no-API
app.MapFallback(async context =>
{
    context.Response.ContentType = "text/html";
    await context.Response.SendFileAsync(
        Path.Combine(app.Environment.WebRootPath, "index.html"));
});

app.Run();

record CalculatorInput(double Largo, double Ancho, double Profundidad);

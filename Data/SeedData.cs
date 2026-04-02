using RISC.Models;

namespace RISC.Data;

public static class SeedData
{
    public static void Initialize(AppDbContext db)
    {
        if (db.Services.Any()) return;

        // ── Servicios ──
        db.Services.AddRange(
            new Service
            {
                Name = "Mantenimiento de Tren Séptico",
                Description = "Servicio completo de inspección, limpieza y mantenimiento preventivo de todo el sistema séptico. Incluye evaluación del estado del tanque, tuberías y campo de infiltración para garantizar su correcto funcionamiento.",
                Benefits = "Previene desbordamientos|Extiende la vida útil del sistema|Protege el medio ambiente|Evita reparaciones costosas",
                Icon = "🔧"
            },
            new Service
            {
                Name = "Limpieza de Trampas de Grasa",
                Description = "Retiro profesional de grasas, aceites y sólidos acumulados en trampas de grasa. Servicio con equipos especializados y disposición adecuada de residuos según normativa vigente.",
                Benefits = "Evita obstrucciones en tuberías|Cumple con normativa ambiental|Mejora el flujo del agua|Elimina malos olores",
                Icon = "🧹"
            },
            new Service
            {
                Name = "Tratamiento de Aguas Residuales",
                Description = "Soluciones integrales para el tratamiento y purificación de aguas residuales domésticas e industriales. Implementación de sistemas biológicos y químicos adaptados a cada necesidad.",
                Benefits = "Agua reutilizable para riego|Reduce contaminación ambiental|Ahorro a largo plazo|Cumplimiento normativo",
                Icon = "💧"
            }
        );

        // ── Productos ──
        db.Products.AddRange(
            // Lodos
            new Product
            {
                Name = "Bioactivador de Lodos",
                Description = "Fórmula biológica concentrada que acelera la descomposición de lodos en tanques sépticos. Contiene bacterias beneficiosas que reducen el volumen de sólidos acumulados.",
                Category = "Lodos",
                Usage = "Aplicar 250 ml por cada 1000 litros de capacidad del tanque. Verter directamente al inodoro o registro más cercano al tanque. Usar mensualmente para mejores resultados.",
                Icon = "🧪"
            },
            new Product
            {
                Name = "Reductor de Lodos Sólidos",
                Description = "Tratamiento enzimático que descompone los lodos compactos y facilita su extracción. Ideal para tanques con alta acumulación de sólidos.",
                Category = "Lodos",
                Usage = "Aplicar 500 ml directamente al tanque 48 horas antes del mantenimiento programado. No mezclar con cloro o desinfectantes.",
                Icon = "⚗️"
            },
            // Grasas
            new Product
            {
                Name = "Desengrasante Biológico",
                Description = "Producto biodegradable que descompone grasas y aceites acumulados en trampas y tuberías. Seguro para el medio ambiente y las tuberías.",
                Category = "Grasas",
                Usage = "Disolver 100 ml en 1 litro de agua tibia. Verter en la trampa de grasa semanalmente. Para obstrucciones, aplicar directamente sin diluir.",
                Icon = "🫧"
            },
            new Product
            {
                Name = "Limpiador de Trampas de Grasa",
                Description = "Solución concentrada para limpieza profunda de trampas de grasa comerciales y residenciales. Acción rápida en 30 minutos.",
                Category = "Grasas",
                Usage = "Aplicar 200 ml directamente en la trampa de grasa. Dejar actuar 30 minutos. Enjuagar con agua a presión. Usar quincenalmente.",
                Icon = "🧴"
            },
            // Gases
            new Product
            {
                Name = "Neutralizador de Gases",
                Description = "Solución que neutraliza gases tóxicos como sulfuro de hidrógeno (H₂S) y metano generados en sistemas sépticos. Reduce olores y riesgos para la salud.",
                Category = "Gases",
                Usage = "Colocar una tableta en la ventilación del tanque séptico cada 30 días. No inhalar directamente. Mantener ventilación adecuada en el área.",
                Icon = "💨"
            },
            new Product
            {
                Name = "Filtro de Carbón Activado",
                Description = "Filtro reemplazable de carbón activado para ventilaciones de tanques sépticos. Absorbe gases y olores antes de su liberación al ambiente.",
                Category = "Gases",
                Usage = "Instalar en la tubería de ventilación del tanque. Reemplazar cada 3 meses o cuando se perciban olores. Compatible con tuberías de 2\" a 4\".",
                Icon = "🌬️"
            },
            // Agua
            new Product
            {
                Name = "Clarificador de Agua",
                Description = "Tratamiento que mejora la claridad del agua residual tratada. Reduce turbidez y partículas en suspensión para obtener agua más limpia.",
                Category = "Agua",
                Usage = "Agregar 50 ml por cada 100 litros de agua a tratar. Agitar y dejar reposar 2 horas. El agua clarificada puede usarse para riego.",
                Icon = "🌊"
            },
            new Product
            {
                Name = "Pastillas Purificadoras",
                Description = "Pastillas de liberación lenta para mantenimiento continuo de la calidad del agua tratada. Eliminan bacterias patógenas residuales.",
                Category = "Agua",
                Usage = "Colocar 1 pastilla por cada 500 litros en la última cámara del tanque séptico. Cada pastilla dura aproximadamente 30 días.",
                Icon = "💊"
            }
        );

        // ── Guías ──
        db.Guides.AddRange(
            new Guide
            {
                Title = "Limpieza del Tanque Séptico",
                Category = "Mantenimiento",
                Icon = "🪣",
                Steps = """
                [
                    {"step":1,"title":"Localización del tanque","description":"Identifique la ubicación exacta del tanque séptico en su propiedad. Busque las tapas de inspección en el jardín o patio, generalmente a 1-3 metros de la edificación. Si no las encuentra, consulte los planos de construcción."},
                    {"step":2,"title":"Inspección visual","description":"Abra las tapas de inspección con cuidado usando herramientas adecuadas. Observe el nivel de lodos y la capa de nata superficial. Si los lodos superan 1/3 del volumen total, es momento de realizar limpieza."},
                    {"step":3,"title":"Ventilación del área","description":"Antes de cualquier trabajo, permita que el tanque se ventile por al menos 30 minutos. Los gases acumulados como metano y sulfuro de hidrógeno son peligrosos. NUNCA ingrese al tanque bajo ninguna circunstancia."},
                    {"step":4,"title":"Extracción profesional","description":"Contrate un servicio profesional con camión vacuum para la extracción de lodos. La extracción manual no es recomendada por los riesgos sanitarios involucrados. RISC Ingeniería ofrece este servicio con equipos certificados."},
                    {"step":5,"title":"Reactivación y sellado","description":"Después de la limpieza, aplique Bioactivador de Lodos para reactivar la colonia de bacterias beneficiosas del tanque. Verifique que todas las tapas queden correctamente selladas para evitar filtraciones y olores."}
                ]
                """
            },
            new Guide
            {
                Title = "Manejo Seguro de Lodos",
                Category = "Lodos",
                Icon = "🏗️",
                Steps = """
                [
                    {"step":1,"title":"Identificación del tipo de lodo","description":"Determine el tipo y volumen de lodos presentes. Los lodos pueden ser primarios (recientes) o digeridos (descompuestos). El color y consistencia ayudan a identificarlos: los frescos son oscuros y los digeridos son más claros."},
                    {"step":2,"title":"Equipos de protección","description":"Use siempre equipo de protección personal: guantes de nitrilo, botas de caucho, mascarilla con filtro para gases y gafas de protección. Nunca manipule lodos sin protección adecuada."},
                    {"step":3,"title":"Extracción controlada","description":"Utilice equipos de succión profesionales para la extracción. Los lodos deben ser retirados sin derramar en el suelo ni contaminar fuentes de agua cercanas. Mantenga el área de trabajo limpia."},
                    {"step":4,"title":"Transporte y disposición","description":"Los lodos extraídos deben transportarse en contenedores certificados y herméticos. La disposición final debe realizarse en sitios autorizados por la autoridad ambiental. Nunca vierta lodos en ríos, quebradas o terrenos baldíos."}
                ]
                """
            },
            new Guide
            {
                Title = "Tratamiento de Agua Residual",
                Category = "Agua",
                Icon = "💧",
                Steps = """
                [
                    {"step":1,"title":"Evaluación inicial","description":"Realice un análisis básico del agua residual: observe color, olor y turbidez. Si es posible, mida el pH con tiras reactivas. Esto ayuda a determinar el nivel de tratamiento necesario."},
                    {"step":2,"title":"Pre-tratamiento","description":"Retire sólidos grandes usando rejillas o filtros gruesos. Permita que el agua repose en un tanque de sedimentación para que los sólidos pesados se depositen en el fondo. Este paso es fundamental para proteger las etapas siguientes."},
                    {"step":3,"title":"Tratamiento biológico","description":"Aplique el Clarificador de Agua según las indicaciones del producto. Las bacterias beneficiosas descomponen la materia orgánica disuelta. Mantenga aireación adecuada para que las bacterias trabajen eficientemente."},
                    {"step":4,"title":"Clarificación final","description":"Use las Pastillas Purificadoras en la última etapa para eliminar bacterias patógenas. Deje reposar el agua tratada y verifique su claridad. El agua resultante puede usarse para riego de jardines (no para consumo humano)."}
                ]
                """
            },
            new Guide
            {
                Title = "Manejo de Gases Sépticos",
                Category = "Gases",
                Icon = "⚠️",
                Steps = """
                [
                    {"step":1,"title":"Conocer los riesgos","description":"Los tanques sépticos generan gases peligrosos: metano (explosivo), sulfuro de hidrógeno (tóxico, olor a huevo podrido) y dióxido de carbono (asfixiante). Estos gases pueden ser mortales en espacios confinados."},
                    {"step":2,"title":"Ventilación permanente","description":"Asegúrese de que el tanque séptico tenga una tubería de ventilación funcionando correctamente. Instale un Filtro de Carbón Activado en la ventilación para neutralizar olores. La ventilación nunca debe estar obstruida."},
                    {"step":3,"title":"Precauciones al abrir","description":"Al abrir tapas de inspección, hágalo desde el lado contrario al viento. Espere mínimo 30 minutos antes de acercarse. Use Neutralizador de Gases si percibe olores fuertes. Nunca use llamas abiertas cerca del tanque."},
                    {"step":4,"title":"Monitoreo continuo","description":"Revise mensualmente que las ventilaciones estén despejadas. Si percibe olores inusuales en su propiedad, puede indicar problemas en el sistema. Reemplace los filtros de carbón cada 3 meses. Ante cualquier duda, contacte a RISC Ingeniería."}
                ]
                """
            },
            new Guide
            {
                Title = "Precauciones de Seguridad",
                Category = "Seguridad",
                Icon = "🛡️",
                Steps = """
                [
                    {"step":1,"title":"Equipo de protección personal","description":"Siempre use: guantes de nitrilo o caucho, botas impermeables, mascarilla con filtro para gases orgánicos, gafas de seguridad y ropa de trabajo que cubra brazos y piernas. Lave todo después de cada uso."},
                    {"step":2,"title":"Nunca trabaje solo","description":"Toda actividad relacionada con tanques sépticos debe realizarse con al menos otra persona presente. En caso de desvanecimiento por gases, la persona acompañante puede solicitar ayuda inmediata."},
                    {"step":3,"title":"Señalización del área","description":"Marque el área de trabajo con conos o cinta de seguridad. Mantenga a niños y mascotas alejados. Si las tapas del tanque están abiertas, nunca las deje sin vigilancia para evitar caídas accidentales."},
                    {"step":4,"title":"Herramientas adecuadas","description":"Use herramientas de materiales antichispa cerca de tanques sépticos. No use equipos eléctricos que puedan generar arcos. Mantenga un extintor tipo ABC cerca del área de trabajo."},
                    {"step":5,"title":"Plan de emergencia","description":"Tenga a mano los números de emergencia: bomberos, ambulancia y RISC Ingeniería. Si alguien cae dentro de un tanque, NO intente rescatarlo directamente; llame a bomberos inmediatamente. Los gases pueden incapacitar en segundos."}
                ]
                """
            }
        );

        db.SaveChanges();
    }
}

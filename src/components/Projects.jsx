// Datos de proyectos separados para fácil edición o futura carga desde una API
const projectsData = [
  {
    id: 1,
    title: "Landing Page Restaurante",
    year: "2026",
    description:
      "Sitio web dinámico para restaurante con menú administrable, secciones informativas, integración con Firebase y diseño responsive optimizado para conversión.",
    tech: ["React", "Firebase", "Firestore", "Responsive Design"]
  },
  {
    id: 2,
    title: "Aplicación de Gestión de Inventario",
    year: "2026",
    description:
      "Sistema web para control de inventario con registro de productos, alertas de stock mínimo, historial de movimientos y reportes exportables.",
    tech: ["Flutter", "SQLite"]
  },
  {
    id: 3,
    title: "Sistema POS para Restaurante",
    year: "2026",
    description:
      "Punto de venta completo para restaurante con gestión de mesas, impresión de tickets para cocina y cliente, control de ventas en tiempo real y estadísticas.",
    tech: ["React", "NestJS", "PostgreSQL", "Docker"]
  },
  {
    id: 4,
    title: "Sistema de Comercialización Agrícola",
    year: "2025",
    description:
      "Plataforma para la compra y venta de productos agrícolas en Bolivia.",
    tech: ["Angular", "NestJS", "PostgreSQL"]
  }
];

function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2>Proyectos Destacados</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="year">{project.year}</span>
              </div>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
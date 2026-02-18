const educationData = [
  {
    id: 1,
    title: "Ingeniería en Sistemas",
    institution: "Universidad San Francisco Xavier de Chuquisaca",
    year: "2019 - 2025",
    description:
      "Formación completa en desarrollo de software, arquitectura de sistemas y tecnologías de la información.",
  },
  // {
  //   id: 2,
  //   title: "Especialización en Full Stack Development",
  //   institution: "Plataforma de Educación Online",
  //   year: "2024 - 2025",
  //   description:
  //     "Certificación especializada en desarrollo web moderno con React, Node.js y tecnologías actuales.",
  // },
];

function Education() {
  return (
    <section id="educacion" className="section">
      <div className="container">
        <h2>Educación</h2>
        <div className="education-timeline">
          {educationData.map((item) => (
            <div key={item.id} className="education-item">
              <div className="timeline-marker" />
              <div className="education-content">
                <h3>{item.title}</h3>
                <p className="institution">{item.institution}</p>
                <p className="year">{item.year}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
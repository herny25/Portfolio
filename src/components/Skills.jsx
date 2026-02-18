// Datos de habilidades separados del JSX para fácil edición
const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "Nest.js", "API REST"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
  },
];

function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          {skillsData.map((group) => (
            <div key={group.category} className="skill-category">
              <h3>{group.category}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
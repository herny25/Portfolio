import fotoPerfil from "../assets/foto_perfil.png";

function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Hernan_Lopez_CV.pdf"; // Cambia esto por la ruta real de tu CV
    link.download = "Hernan_Lopez_CV.pdf";
    link.click();
  };

  return (
    <section id="inicio" className="section hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="highlight">Hernán</span> López
          </h1>
          <p className="title">Ingeniero de sistemas | Desarrollador Full Stack</p>
          <p className="description">
            Apasionado por el desarrollo de software y la innovación tecnológica,
            con experiencia en crear soluciones eficientes y escalables.
          </p>
          <button className="cta-btn" onClick={handleDownloadCV}>
            Descargar CV
          </button>
        </div>

        <div className="hero-image">
          <div className="avatar-placeholder">
            <img src={fotoPerfil} alt="Foto de perfil de Hernán López" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
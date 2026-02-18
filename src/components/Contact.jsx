import { useState } from "react";

function Contact() {
  // Estado del formulario con un solo objeto
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Maneja cambios en cualquier campo del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <h2>Contacto</h2>
        <div className="contact-content">

          {/* Información de contacto */}
          <div className="contact-info">
            <div className="contact-item">
              <h3>Correo Electrónico</h3>
              <a href="mailto:hlopezmolina7@gmail.com">hlopezmolina7@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>Teléfono</h3>
              <a href="tel:+59173406396">+59173406396</a>
            </div>
            <div className="contact-item">
              <h3>Ubicación</h3>
              <p>Chuquisaca, Bolivia</p>
            </div>
          </div>

          {/* Formulario */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
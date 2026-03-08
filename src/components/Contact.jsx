import { useState } from "react";

// 👇 Reemplaza esto con tu endpoint real de formspree.io
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // "idle" | "loading" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
              <a href="tel:+56987580525">+56987580525</a>
            </div>
            <div className="contact-item">
              <h3>Ubicación</h3>
              <p>Santiago, Chile</p>
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
              disabled={status === "loading"}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === "loading"}
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status === "loading"}
            />

            <button
              type="submit"
              className="submit-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {/* Mensajes de resultado */}
            {status === "success" && (
              <p className="form-feedback form-feedback--success">
                ✅ ¡Mensaje enviado! Te responderé pronto.
              </p>
            )}
            {status === "error" && (
              <p className="form-feedback form-feedback--error">
                ❌ Algo salió mal. Intenta de nuevo o escríbeme directamente.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;

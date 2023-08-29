import React, { useState } from "react";
import "./Contacto.css"; // Importa tu archivo CSS de estilos
import contactImage from "../assets/images/contacto.jpeg"; 

const Contacto = () => {
  // Estado para rastrear si un mensaje ha sido enviado
  const [messageSent, setMessageSent] = useState(false);

  // Función para manejar el envío del mensaje
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el mensaje
    // Una vez que el mensaje se haya enviado, actualiza el estado
    setMessageSent(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <p className="a">
          <strong>¿Tienes alguna pregunta o comentario sobre tu salud financiera?
          ¡Estamos aquí para ayudarte!
          No dudes en ponerte en contacto con nosotros a través del formulario
          o los métodos de contacto a continuación.</strong>
        </p>
      </div>
      <div className="contact-box">
        <h1>Contacto</h1>
        <img src={contactImage} alt="Contact" className="contact-image" />

        {messageSent ? (
          <div className="message-sent">
            <p>¡Tu mensaje ha sido enviado!</p>
          </div>
        ) : (
          <div className="contact-form">
            <h2>Envíanos un Mensaje</h2>
            <form onSubmit={handleMessageSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" className="form-control" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacto;

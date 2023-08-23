

// import React from "react";
// import "./Home.css";
// import welcomeImage from "../assets/images/welcome-image.jpeg"; // Cambia la ruta de la imagen
// import bannerImage from "../assets/images/home1.webp";
// function Home() {
//     return (
        
//         <div className="container">
//           <div className="content">
           
//                 <div className="text">
//                     <h1>Salud Financiera Personal</h1>
//                     <p>
//                         ¡Bienvenidos a mi sitio web dedicado a la salud financiera personal! Como experto en finanzas, estoy aquí para brindarte consejos y conocimientos que te ayudarán a tomar decisiones financieras inteligentes y alcanzar tus metas económicas.
//                     </p>
//                     <p>
//                         La salud financiera es fundamental para vivir una vida plena y tranquila. Al igual que cuidamos nuestra salud física y emocional, es esencial cuidar nuestras finanzas para garantizar un futuro económico estable. Aquí encontrarás información sobre cómo manejar tus ingresos, gastos y ahorros de manera efectiva.
//                     </p>
//                     <p>
//                         Exploraremos temas como la planificación del presupuesto, la inversión inteligente, la gestión de deudas y la preparación para la jubilación. Mi objetivo es empoderarte con el conocimiento necesario para tomar decisiones financieras informadas y alcanzar la libertad económica que mereces.
//                     </p>
//                     <p>
//                         ¡Comienza tu viaje hacia una salud financiera sólida hoy mismo! Explora los artículos, consejos y recursos disponibles en este sitio. Siempre estoy aquí para ayudarte en tu camino hacia un futuro financiero exitoso.
//                     </p>
//                     <p>
//                         ¡Gracias por visitar y espero que encuentres información valiosa para mejorar tu salud financiera!
//                     </p>
//                     <div className="banner">
//         <img src={bannerImage} alt="Banner" />
//                 </div>
                
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;



// ____________________
// import React from "react";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="banner">
//       <img src="principal.jpeg" alt="Banner" />
//       <h1  className="title">Tu camino hacia la salud financiera</h1>
//     </div>


//   );
// }

// export default Home;

//_____________________
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap

import "./Home.css";

function Home() {
  
  return (
    <div className="home-container">
      <div className="banner">
        <img src="principal.jpeg" alt="Banner" />
        <span className="title">Tu camino hacia <br></br> la salud financiera</span>
      </div>

      <div className="recuadros-container">
        <div className="recuadro">
          <a href="/Presupuesto.js">
            <img src="home4.jpeg" alt="Presupuesto" />
            <p><strong>Herramienta de Presupuesto:</strong> Permite escribir un plan financiero detallado para controlar gastos.</p>
          </a>
        </div>
        <div className="recuadro">
          <a href="/Saludfinanciera">
            <img src="home5.jpeg" alt="Salud Financiera" />
            <p><strong>Análisis de Gastos:</strong> Categoriza y evalúa los gastos diarios para garantizar salud financiera.</p>
          </a>
        </div>
        <div className="recuadro">
          <a href="/Blog">
            <img src="home6.jpeg" alt="Blog" />
            <p>Explora <strong>artículos </strong>financieros destacados para fortalecer tu salud económica.</p>
          </a>
         
        </div>
      </div>

      
    </div>
  );
}

export default Home;



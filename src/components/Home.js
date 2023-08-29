
import React, { useEffect  } from "react";

import { Link } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Home.css";

function Home() {
  useEffect(() => {
    // Scroll hasta la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      <div className="banner">
        <img src="principal.jpeg" alt="Banner" />
        <span className="title">Tu camino hacia <br></br> la salud financiera</span>
      </div>

       <div className="recuadros-container">
          <div className="recuadro">
          <Link to="/Presupuesto">
              <img src="home4.jpeg" alt="Presupuesto" />
              <p><strong>Herramienta de Presupuesto:</strong> Permite escribir un plan financiero detallado para controlar gastos.</p>
          </Link>
              </div>
              <div className="recuadro">
          <Link to="/Saludfinanciera">
            <img src="home5.jpeg" alt="Salud Financiera" />
            <p><strong>Análisis de Gastos:</strong> Categoriza y evalúa los gastos diarios para garantizar salud financiera.</p>
          </Link>
              </div>
              <div className="recuadro">
            <Link to="/Blog">
              <img src="home6.jpeg" alt="Blog" />
              <p>Explora <strong>artículos </strong>financieros destacados para fortalecer tu salud económica.</p>
          </Link>    
        </div>
      </div>

      
    </div>



    
  );
}

export default Home;



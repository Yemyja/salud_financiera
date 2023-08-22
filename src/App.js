import React, { useState } from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Presupuesto from "./components/Presupuesto";
import Contacto from "./components/Contacto";
import SaludFinanciera from "./components/SaludFinanciera";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
import "./App.css";
import Articulo1 from "./components/Articulo1"; 


function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "blog":
        return <Blog />;
      case "presupuesto":
        return <Presupuesto />;
      case "saludfinanciera":
        return <SaludFinanciera />;
        case "contacto":
          return <Contacto />;

          case "articulo1":
            return<Articulo1 />
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Aplica la clase de Bootstrap para la barra de navegación */}
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button
                    className={`nav-link ${currentPage === "home" && "active"}`}
                    onClick={() => handlePageChange("home")}
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${currentPage === "presupuesto" && "active"}`}
                    onClick={() => handlePageChange("presupuesto")}
                  >
                    Presupuesto
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${currentPage === "saludfinanciera" && "active"}`}
                    onClick={() => handlePageChange("saludfinanciera")}
                  >
                    Revisa tu Salud Financiera
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${currentPage === "contacto" && "active"}`}
                    onClick={() => handlePageChange("contacto")}
                  >
                   Contacto
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${currentPage === "blog" && "active"}`}
                    onClick={() => handlePageChange("blog")}
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
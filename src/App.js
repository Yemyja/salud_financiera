// import React, { useState } from "react";
// import Home from "./components/Home";
// import Blog from "./components/Blog";
// import Presupuesto from "./components/Presupuesto";
// import Contacto from "./components/Contacto";
// import SaludFinanciera from "./components/SaludFinanciera";
// import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
// import "./App.css";


// function App() {
//   const [currentPage, setCurrentPage] = useState("home");

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };
//   const renderPage = () => {
//     switch (currentPage) {
//       case "home":
//         return <Home />;
//       case "blog":
//         return <Blog />;
//       case "presupuesto":
//         return <Presupuesto />;
//       case "saludfinanciera":
//         return <SaludFinanciera />;
//         case "contacto":
//           return <Contacto />;
//       default:
//         return <Home />;
//     }
//   };
  

//   return (
//     <div>
//       <header>
//       <nav className="navbar navbar-expand navbar-light bg-light">
//         {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> Aplica la clase de Bootstrap para la barra de navegación */}
//           <div className="container-fluid">
//           <a className="navbar-brand" href="/Home">
//                 .MoneyMastery.
//             </a>
//             <a className="navbar-brand" href="/Home"></a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <button
//                     className={`nav-link ${currentPage === "home" && "active"}`}
//                     onClick={() => handlePageChange("home")}
//                   >
//                     Home
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className={`nav-link ${currentPage === "presupuesto" && "active"}`}
//                     onClick={() => handlePageChange("presupuesto")}
//                   >
//                     Presupuesto
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className={`nav-link ${currentPage === "saludfinanciera" && "active"}`}
//                     onClick={() => handlePageChange("saludfinanciera")}
//                   >
//                     Revisa tu Salud Financiera
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className={`nav-link ${currentPage === "blog" && "active"}`}
//                     onClick={() => handlePageChange("blog")}
//                   >
//                     Blog
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className={`nav-link ${currentPage === "contacto" && "active"}`}
//                     onClick={() => handlePageChange("contacto")}
//                   >
//                    Contacto
//                   </button>
//                 </li>
                
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <main>{renderPage()}</main>

//       <footer class="footer mt-auto py-3 bg-light">
//       <div class="container">
//         <span class="text-muted">© 2023 MoneyMastery. Todos los derechos reservados.
// <script>document.write(new Date().getFullYear())</script> </span>
//       </div>
//     </footer>
//     </div>

    
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Presupuesto from "./components/Presupuesto";
import SaludFinanciera from "./components/SaludFinanciera";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import "bootstrap/dist/css/bootstrap.min.css"; 
// Importa el CSS de Bootstrap
import "./App.css";


function App() {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              .MoneyMastery.
            </a>
            <a className="navbar-brand" href="/"></a>
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
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Presupuesto">
                    Presupuesto
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/SaludFinanciera">
                    Revisa tu Salud Financiera
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contacto">
                    Contacto
                  </a>
                </li>
                {/* Agrega aquí los otros enlaces del navbar */}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Presupuesto" element={<Presupuesto />} />
          <Route path="/SaludFinanciera" element={<SaludFinanciera />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </main>

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">
            © 2023 MoneyMastery. Todos los derechos reservados.
            <script>document.write(new Date().getFullYear())</script>{" "}
          </span>
        </div>
      </footer>
    </Router>
  );
}

export default App;

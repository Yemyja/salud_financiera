import React, {useState} from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Presupuesto from "./components/Presupuesto";
import SaludFinanciera from "./components/SaludFinanciera";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./App.css";

function App() {
  const [currentPage, setCurrentPage]= useState ("home")

  const handlePageChange = (page)=> {
    setCurrentPage(page);
  };
  const renderPage =() => {
switch (currentPage){
  case "home":
  return <Home />;
  case "blog":
  return <Blog />;
  case "presupuesto":
  return <Presupuesto />;
  case "saludfinanciera":
    return <SaludFinanciera />;
  default :
  return <Home />;
  }
};

return (

  <div>
    <header>
      <nav>
        <ul>
          <li>
            <button onClick ={() => handlePageChange("home")}>Home</button>
          </li>
          <li>
            <button onClick ={() => handlePageChange("saludfinanciera")}>Revisa tu Salud Financiera</button>
          </li>
          <li>
            <button onClick ={() => handlePageChange("presupuesto")}>Haz un Presupuesto</button>
          </li>
          <li>
            <button onClick ={() => handlePageChange("blog")}>Blog</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>{renderPage()}</main>
  </div>

);
}

export default App;


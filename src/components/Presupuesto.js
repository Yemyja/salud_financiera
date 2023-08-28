

  import React, { useState } from "react";
  import "./Presupuesto.css"; // Importa tu archivo CSS de estilos (si es necesario)
  import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
  
  function Presupuesto() {
    const categories = [
      "Alimentacion",
    "Vivienda",
    "Transporte",
    "Entretenimiento",
    "Viajes_vacaciones",
    "Cuidado_personal",
    "Donaciones_caridad",
    "Regalos_celebraciones",
    "Suscripciones_membresias",
    "Educacion",
    "Salud",
    "Seguros",
    "Ahorro",
    "Inversiones",
    "Deudas",
    "Emergencias",
    "Gastos_miscelaneos",
  ];
    
  
    const [budget, setBudget] = useState({});
    const [total, setTotal] = useState(0);
  
    const handleInputChange = (category, value) => {
      const newBudget = { ...budget, [category]: parseFloat(value) || 0 };
      setBudget(newBudget);
  
      const newTotal = categories.reduce((acc, cat) => acc + (newBudget[cat] || 0), 0);
      setTotal(newTotal);
    };
  
    return (
      <div className="presupuesto-container container">
        <h1 className="mt-4">Presupuesto Personal</h1>
        <p>Un presupuesto es una herramienta esencial para tomar el control de tus finanzas. Al crear un presupuesto, planificas cómo distribuir tus ingresos en gastos, ahorros e inversiones. Esto te permite visualizar tus metas financieras y tomar decisiones informadas. Un presupuesto bien elaborado te empodera para manejar tus gastos de manera eficiente, ahorrar para el futuro y mantener un equilibrio saludable en tus finanzas personales.</p>
        <table className="table table-bordered mt-4">
          <thead style={{ backgroundColor: '#eff7c4', color: '#eff7c4' }}>
            <tr>
              <th>Categoría</th>
              <th>Gasto Planificado</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category}>
                <td>{category.replace(/_/g, " ")}</td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    value={budget[category] || ""}
                    onChange={(e) => handleInputChange(category, e.target.value)}
                  />
                </td>
              </tr>
            ))}
            <tr className="total-row">
              <td><strong>Total</strong></td>
              <td><strong>${total.toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Presupuesto;
  

import React, { useState, useEffect } from "react";
import "./SaludFinanciera.css"; 
import "bootstrap/dist/css/bootstrap.min.css"; 


// Definición de porcentajes máximos para cada categoría de gasto
const useMaxExpensePercentage = () => {
  const [maxExpensePercentage, setMaxExpensePercentage] = useState({
    alimentacion: 15,
    vivienda: 35,
    transporte: 15,
    entretenimiento: 10,
    viajes_vacaciones: 10,
    cuidado_personal: 10,
    donaciones_caridad: 5,
    regalos_celebraciones: 5,
    suscripciones_membresias: 5,
    educacion: 10,
    salud: 10,
    seguros: 10,
    ahorro: 20,
    inversiones: 10,
    deudas: 20,
    emergencias: 10,
    gastos_miscelaneos: 10,
  });


  // Función para obtener el porcentaje máximo de gasto por categoría
  const getMaxExpensePercentageByCategory = (category) => {
    return maxExpensePercentage[category] || 0;
  };

  
  // Función para actualizar el porcentaje máximo de gasto por categoría
  const updateMaxExpensePercentage = (category, value) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setMaxExpensePercentage({
        ...maxExpensePercentage,
        [category]: parsedValue,
      });
    }
  };
  return { maxExpensePercentage, getMaxExpensePercentageByCategory, updateMaxExpensePercentage };
};


const App = () => {
   // Estados para rastrear ingresos y gastos
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeDate, setIncomeDate] = useState('');
  const [incomeSource, setIncomeSource] = useState('');
  const [showExpenseTable, setShowExpenseTable] = useState(false);
  const [expenseDate, setExpenseDate] = useState(''); 



  //Carga de ingresos y gastos desde el almacenamiento local al cargar la aplicación
  useEffect(() => {
    const storedIncomes = localStorage.getItem("incomes");
    const storedExpenses = localStorage.getItem("expenses");

    if (storedIncomes) {
      setIncomes(JSON.parse(storedIncomes));
    }

    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substr(0, 10);
    setExpenseDate(formattedDate);
  }, []);




// Uso del hook useMaxExpensePercentage para obtener funciones relacionadas con los porcentajes máximos de gasto
    const { getMaxExpensePercentageByCategory, } = useMaxExpensePercentage();

    useEffect(() => {

      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().substr(0, 10);
      setExpenseDate(formattedDate);
    }, []);
  

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };


  const handleExpenseSubmit = (amount, category, date) => {
    const newExpenses = [...expenses, { amount: parseFloat(amount), category, date }];
    setExpenses(newExpenses);
    localStorage.setItem("expenses", JSON.stringify(newExpenses));
  };


const handleIncomeSubmit = () => {
  const newIncomes = [...incomes, { amount: incomeAmount, date: incomeDate, source: incomeSource }];
  setIncomes(newIncomes);
  localStorage.setItem("incomes", JSON.stringify(newIncomes));
};



  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };
  const calculateTotalExpenseByCategory = (category) => {
  return expenses.reduce((total, exp) => {
    return exp.category === category ? total + exp.amount : total;
  }, 0);
};


const calculateTotalExpensePercentageByCategory = (category) => {
  const totalExpense = calculateTotalExpenseByCategory(category);
  const totalIncome = calculateTotalIncome();

  if (totalIncome === 0) {
    return ''; // Return empty string if total income is 0
  }

  const percentage = (totalExpense / totalIncome) * 100;
  return percentage.toFixed(0);
};



  const calculateTotalIncome = () => {
    return incomes.reduce((total, income) => total + income.amount, 0);
  };

  const [showIncomeSummary, setShowIncomeSummary] = useState(false);

  

  const calculateFinancialHealth = () => {
    const maxPercentageByCategory = {
      alimentacion: 15,
      vivienda: 35,
      transporte: 15,
      entretenimiento: 10,
      viajes_vacaciones: 10,
      cuidado_personal: 10,
      donaciones_caridad: 5,
      regalos_celebraciones: 5,
      suscripciones_membresias: 5,
      educacion: 10,
      salud: 10,
      seguros: 10,
      ahorro: 20,
      inversiones: 10,
      deudas: 20,
      emergencias: 10,
      gastos_miscelaneos: 10,
    };
  
    const exceededCategories = [];
  
    Object.keys(maxPercentageByCategory).forEach((category) => {
      const totalExpensePercentage = calculateTotalExpensePercentageByCategory(category);
      const maxPercentage = maxPercentageByCategory[category];
      if (totalExpensePercentage > maxPercentage) {
        exceededCategories.push(category);
      }
    });
  
    return exceededCategories.length === 0
      ? 'Tu salud financiera es buena.'
      : 'Tu salud financiera necesita mejorar. Revisa en que categoría necesitas gastar menos.';
  };
  
  
  const isExceededCategory = (category) => {
    const totalExpensePercentage = calculateTotalExpensePercentageByCategory(category);
    const maxPercentageByCategory = {
      alimentacion: 15,
      vivienda: 35,
      transporte: 15,
      entretenimiento: 10,
      viajes_vacaciones: 10,
      cuidado_personal: 10,
      donaciones_caridad: 5,
      regalos_celebraciones: 5,
      suscripciones_membresias: 5,
      educacion: 10,
      salud: 10,
      seguros: 10,
      ahorro: 20,
      inversiones: 10,
      deudas: 20,
      emergencias: 10,
      gastos_miscelaneos: 10,
    };
   

    const maxPercentage = maxPercentageByCategory[category];
  
    return totalExpensePercentage > maxPercentage;
  };


const deleteIncome = (index) => {
  const updatedIncomes = [...incomes];
  updatedIncomes.splice(index, 1);
  setIncomes(updatedIncomes);
};

  
  
return (
    <div>

    <div className="container mt-4">
    <h1 className="text-center">Verificar Salud Financiera</h1>
    <p>Esta herramienta te ayuda a evaluar tus ingresos y gastos, mostrándote dónde puedes hacer ajustes para mejorar tu situación financiera. Registra tus ingresos, gastos y explora resúmenes por categoría. Descubre tu salud financiera y toma decisiones informadas para un futuro más sólido. Comienza a tomar control de tus finanzas hoy mismo.</p>
       <div className="container mt-4">
         
         <div className="mb-3">
          <h2>Estado de cuenta</h2>
          <table className="table">
            <thead>
              <tr>
                <th><p>Total de ingresos: $<strong>{calculateTotalIncome()}</strong></p></th>
                <th> <p>Total de gastos: ${calculateTotalExpenses()}</p></th>
                <th><p>Saldo: ${calculateTotalIncome() - calculateTotalExpenses()}</p></th>
              </tr>
            </thead>
            </table> </div>
</div>
            <div className="container mt-4">
         <div className="mb-3">
           <h2>Ingresos</h2>
           <form
            onSubmit={(e) => {
              e.preventDefault();
              handleIncomeSubmit();
            }}
          >
            <div className="row">
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  value={isNaN(incomeAmount) ? '' : incomeAmount}
                  onChange={(e) => setIncomeAmount(parseFloat(e.target.value))}
                  placeholder="Monto del ingreso"
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="date"
                  className="form-control"
                  value={incomeDate}
                  onChange={(e) => setIncomeDate(e.target.value)}
                  placeholder="Fecha del ingreso"
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  value={incomeSource}
                  onChange={(e) => setIncomeSource(e.target.value)}
                  placeholder="Origen del ingreso"
                />
              </div>
              <div className="col-sm-3">
                <button type="submit" className="btn btn-primary">
                  Agregar ingreso
                </button>
              </div>
            </div>
          </form>
       
        <div className="mb-3">
      <div className="mb-3">
        <h2>Resumen de ingresos</h2>
        {showIncomeSummary && (
          <table className="table">
            <thead>
              <tr>
                <th>Monto</th>
                <th>Fecha</th>  
                <th>Origen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {incomes.map((income, index) => (
                <tr key={index}>
                  <td>${income.amount}</td>
                  <td>{income.date}</td>
                  <td>{income.source}</td>
                  <td>
                   
                   <button
                      className="btn btn-danger"
                      onClick={() => deleteIncome(index)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              
              )) 

              } 
              <tr>
              <p colSpan="3" className="text-end">Total de ingresos: $<strong>{calculateTotalIncome()}</strong></p>
            </tr>
          
              
            </tbody>
          </table>
            )}
            </div></div>
             <div className="mb-3">
        <button className="btn btn-primary" onClick={() => setShowIncomeSummary(!showIncomeSummary)}>
          {showIncomeSummary ? 'Ocultar Resumen de ingresos' : 'Mostrar Resumen de ingresos'}
        </button>
      </div>
        </div>
        <div className="mb-3">
          <h2>Gastos</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const expense = parseFloat(e.target.expense.value);
              const category = e.target.category.value;
              handleExpenseSubmit(expense, category, expenseDate); // Usar el nuevo estado para la fecha de gastos
              e.target.reset();
            }}
          >
            <div className="row">
              <div className="col-sm-4">
                <input
                  type="number"
                  name="expense"
                  className="form-control"
                  placeholder="Monto del gasto"
                />
              </div>
              <div className="col-sm-4">
                  <select name="category" className="form-control">
                    <option value="alimentacion">Alimentación</option>
                    <option value="vivienda">Vivienda</option>
                    <option value="transporte">Transporte</option>
                    <option value="entretenimiento">Entretenimiento</option>
                    <option value="viajes_vacaciones">Viajes y Vacaciones</option>
                    <option value="cuidado_personal">Cuidado Personal</option>
                    <option value="donaciones_caridad">Donaciones y Caridad</option>
                    <option value="regalos_celebraciones">Regalos y Celebraciones</option>
                    <option value="suscripciones_membresias">Suscripciones y Membresías</option>
                    <option value="educacion">Educación</option>
                    <option value="salud">Salud</option>
                    <option value="seguros">Seguros</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="inversiones">Inversiones</option>
                    <option value="deudas">Deudas</option>
                    <option value="emergencias">Emergencias</option>
                    <option value="gastos_miscelaneos">Gastos Misceláneos</option>
                  </select>
                </div>

              <div className="col-sm-3">
                <input
                  type="date"
                  className="form-control"
                  value={expenseDate}
                  onChange={(e) => setExpenseDate(e.target.value)} // Actualizar el estado para la fecha de gastos
                  placeholder="Fecha del gasto"
                />
              </div>
              <div className="col-sm-3">
                <button type="submit" className="btn btn-primary">
                  Agregar gasto
                </button>
              </div>
            </div>
          </form>
        </div>
        
  <div className="mb-3">
          <h2>Resumen de gastos</h2>
          <div className="mb-3">
            <p>Total de gastos: ${calculateTotalExpenses()}</p>
          </div>
          {showExpenseTable && (
            <table className="table">
              <thead>
                <tr>
                  <th>Gasto</th>
                  <th>Categoría</th>
                  <th>Fecha</th>  
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td>${expense.amount}</td>
                    <td>{expense.category}</td>
                    <td>{expense.date}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteExpense(index)}
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <button
            className="btn btn-primary"
            onClick={() => setShowExpenseTable(!showExpenseTable)}
          >
            {showExpenseTable ? 'Ocultar Resumen de gastos' : 'Mostrar Resumen de gastos'}
          </button>
        </div>
        </div>

        
        <div className="mb-3">
          <h2>Gastos totales por categoría</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Gasto total</th>
                <th>Porcentaje gastado</th>
                <th>Porcentaje recomendado</th>
              </tr>
            </thead>
            <tbody>
              <tr className={isExceededCategory('alimentacion') ? 'table-danger' : ''}>
                <td>Alimentación</td>
                <td>${calculateTotalExpenseByCategory('alimentacion')}</td>
                <td>{calculateTotalExpensePercentageByCategory('alimentacion')}%</td> 
                <td>{getMaxExpensePercentageByCategory('alimentacion')}%</td>
              </tr>
              <tr className={isExceededCategory('vivienda') ? 'table-danger' : ''}>
                <td>Vivienda</td>
                <td>${calculateTotalExpenseByCategory('vivienda')}</td>
                <td>{calculateTotalExpensePercentageByCategory('vivienda')}%</td>
                <td>{getMaxExpensePercentageByCategory('vivienda')}%</td>

              </tr>
              <tr className={isExceededCategory('transporte') ? 'table-danger' : ''}>
                <td>Transporte</td>
                <td>${calculateTotalExpenseByCategory('transporte')}</td>
                <td>{calculateTotalExpensePercentageByCategory('transporte')}%</td>
                <td>{getMaxExpensePercentageByCategory('transporte')}%</td>

              </tr>
              <tr className={isExceededCategory('entretenimiento') ? 'table-danger' : ''}>
                <td>Entretenimiento</td>
                <td>${calculateTotalExpenseByCategory('entretenimiento')}</td>
                <td>{calculateTotalExpensePercentageByCategory('entretenimiento')}%</td>
                <td>{getMaxExpensePercentageByCategory('entretenimiento')}%</td>

              </tr>
              <tr className={isExceededCategory('viajes_vacaciones') ? 'table-danger' : ''}>
                <td>Viajes y Vacaciones</td>
                <td>${calculateTotalExpenseByCategory('viajes_vacaciones')}</td>
                <td>{calculateTotalExpensePercentageByCategory('viajes_vacaciones')}%</td>
                <td>{getMaxExpensePercentageByCategory('viajes_vacaciones')}%</td>

              </tr>
              <tr className={isExceededCategory('cuidado_personal') ? 'table-danger' : ''}>
                <td>Cuidado Personal</td>
                <td>${calculateTotalExpenseByCategory('cuidado_personal')}</td>
                <td>{calculateTotalExpensePercentageByCategory('cuidado_personal')}%</td>
                <td>{getMaxExpensePercentageByCategory('cuidado_personal')}%</td>

              </tr>
              <tr className={isExceededCategory('donaciones_caridad') ? 'table-danger' : ''}>
                <td>Donaciones y Caridad</td>
                <td>${calculateTotalExpenseByCategory('donaciones_caridad')}</td>
                <td>{calculateTotalExpensePercentageByCategory('donaciones_caridad')}%</td>
                <td>{getMaxExpensePercentageByCategory('donaciones_caridad')}%</td>

              </tr>
              <tr className={isExceededCategory('regalos_celebraciones') ? 'table-danger' : ''}>
                <td>Regalos y Celebraciones</td>
                <td>${calculateTotalExpenseByCategory('regalos_celebraciones')}</td>
                <td>{calculateTotalExpensePercentageByCategory('regalos_celebraciones')}%</td>
                <td>{getMaxExpensePercentageByCategory('regalos_celebraciones')}%</td>

              </tr>
              <tr className={isExceededCategory('suscripciones_membresias') ? 'table-danger' : ''}>
                <td>Suscripciones y Membresías</td>
                <td>${calculateTotalExpenseByCategory('suscripciones_membresias')}</td>
                <td>{calculateTotalExpensePercentageByCategory('suscripciones_membresias')}%</td>
                <td>{getMaxExpensePercentageByCategory('suscripciones_membresias')}%</td>

              </tr>
              <tr className={isExceededCategory('educacion') ? 'table-danger' : ''}>
                <td>Educación</td>
                <td>${calculateTotalExpenseByCategory('educacion')}</td>
                <td>{calculateTotalExpensePercentageByCategory('educacion')}%</td>
                <td>{getMaxExpensePercentageByCategory('educacion')}%</td>

              </tr>
              <tr className={isExceededCategory('salud') ? 'table-danger' : ''}>
                <td>Salud</td>
                <td>${calculateTotalExpenseByCategory('salud')}</td>
                <td>{calculateTotalExpensePercentageByCategory('salud')}%</td>
                <td>{getMaxExpensePercentageByCategory('salud')}%</td>

              </tr>
              <tr className={isExceededCategory('seguros') ? 'table-danger' : ''}>
                <td>Seguros</td>
                <td>${calculateTotalExpenseByCategory('seguros')}</td>
                <td>{calculateTotalExpensePercentageByCategory('seguros')}%</td>
                <td>{getMaxExpensePercentageByCategory('seguros')}%</td>

              </tr>
              <tr className={isExceededCategory('ahorro') ? 'table-danger' : ''}>
                <td>Ahorro</td>
                <td>${calculateTotalExpenseByCategory('ahorro')}</td>
                <td>{calculateTotalExpensePercentageByCategory('ahorro')}%</td>
                <td>{getMaxExpensePercentageByCategory('ahorro')}%</td>

              </tr>
              <tr className={isExceededCategory('inversiones') ? 'table-danger' : ''}>
                <td>Inversiones</td>
                <td>${calculateTotalExpenseByCategory('inversiones')}</td>
                <td>{calculateTotalExpensePercentageByCategory('inversiones')}%</td>
                <td>{getMaxExpensePercentageByCategory('inversiones')}%</td>

              </tr>
              <tr className={isExceededCategory('deudas') ? 'table-danger' : ''}>
                <td>Deudas</td>
                <td>${calculateTotalExpenseByCategory('deudas')}</td>
                <td>{calculateTotalExpensePercentageByCategory('deudas')}%</td>
                <td>{getMaxExpensePercentageByCategory('deudas')}%</td>

              </tr>
              <tr className={isExceededCategory('emergencias') ? 'table-danger' : ''}>
                <td>Emergencias</td>
                <td>${calculateTotalExpenseByCategory('emergencias')}</td>
                <td>{calculateTotalExpensePercentageByCategory('emergencias')}%</td>
                <td>{getMaxExpensePercentageByCategory('emergencias')}%</td>

              </tr>
              <tr className={isExceededCategory('gastos_miscelaneos') ? 'table-danger' : ''}>
                <td>Gastos Misceláneos</td>
                <td>${calculateTotalExpenseByCategory('gastos_miscelaneos')}</td>
                <td>{calculateTotalExpensePercentageByCategory('gastos_miscelaneos')}%</td>
                <td>{getMaxExpensePercentageByCategory('gastos_miscelaneos')}%</td>

              </tr>

            </tbody>
          </table>
        </div>
      
        <div className="container mt-4">
      <div className="mb-3">
        <h2>Calificación de salud financiera</h2>
        <p>{calculateFinancialHealth()}</p>
      </div>
    </div>
    </div>
    </div>
);


  }

export default App;





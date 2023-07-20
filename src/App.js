// App.js
import React, { useState } from 'react';
import './App.css';


// const handleExpenseSubmit = (amount, category) => {
//   setExpenses([...expenses, { amount: parseFloat(amount), category }]);
// };



// const App = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [incomes, setIncomes] = useState([]);
//   const [incomeAmount, setIncomeAmount] = useState(0);
//   const [incomeDate, setIncomeDate] = useState('');
//   const [incomeSource, setIncomeSource] = useState('');
//   const [showExpenseSummary, setShowExpenseSummary] = useState(false);
  
  // const deleteExpense = (index) => {
  //   const updatedExpenses = [...expenses];
  //   updatedExpenses.splice(index, 1);
  //   setExpenses(updatedExpenses);
  // };


  // const handleIncomeSubmit = () => {
  //   setIncomes([...incomes, { amount: incomeAmount, date: incomeDate, source: incomeSource }]);
  //   setIncomeAmount(0);
  //   setIncomeDate('');
  //   setIncomeSource('');
  // };


const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeDate, setIncomeDate] = useState('');
  const [incomeSource, setIncomeSource] = useState('');
  const [showExpenseSummary, setShowExpenseSummary] = useState(false);
  const [showExpenseTable, setShowExpenseTable] = useState(false);
  const [showExpensePercentage, setShowExpensePercentage] = useState(false);
  const [expenseDate, setExpenseDate] = useState(''); // Nuevo estado para fecha de gastos


  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleExpenseSubmit = (amount, category, date) => {
    setExpenses([...expenses, { amount: parseFloat(amount), category, date }]);
  };

const handleIncomeSubmit = () => {
    setIncomes([...incomes, { amount: incomeAmount, date: incomeDate, source: incomeSource }]);
    setIncomeAmount(0);
    setIncomeDate('');
    setIncomeSource('');
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
  return (totalExpense / calculateTotalIncome()) * 100;
};
  const calculateTotalIncome = () => {
    return incomes.reduce((total, income) => total + income.amount, 0);
  };

  const [showIncomeSummary, setShowIncomeSummary] = useState(false);

  

  const calculateFinancialHealth = () => {
    // Implement your logic here to calculate financial health based on expenses and incomes
    // For example, you can check if the savings are sufficient and if expense percentages are within recommended limits.
    // Return a string indicating the financial health status.
  };


const deleteIncome = (index) => {
  const updatedIncomes = [...incomes];
  updatedIncomes.splice(index, 1);
  setIncomes(updatedIncomes);
};

return (
  <div className="container mt-4">
  
     <div className="container mt-4">
       <h1 className="text-center">Verificar Salud Financiera</h1>
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
                value={incomeAmount}
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
      </div>
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
                <td>{income.amount}</td>
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
                {/* Add more categories as needed */}
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
            <div className="col-sm-4">
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

      
      <div className="mb-3">
        <h2>Gastos totales por categoría</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Gasto total</th>
              <th>Porcentaje del ingreso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alimentación</td>
              <td>{calculateTotalExpenseByCategory('alimentacion')}</td>
              <td>{calculateTotalExpensePercentageByCategory('alimentacion')}%</td>
            </tr>
            <tr>
              <td>Vivienda</td>
              <td>{calculateTotalExpenseByCategory('vivienda')}</td>
              <td>{calculateTotalExpensePercentageByCategory('vivienda')}%</td>
            </tr>
            <tr>
              <td>Transporte</td>
              <td>{calculateTotalExpenseByCategory('transporte')}</td>
              <td>{calculateTotalExpensePercentageByCategory('transporte')}%</td>
            </tr>
            <tr>
              <td>Entretenimiento</td>
              <td>{calculateTotalExpenseByCategory('entretenimiento')}</td>
              <td>{calculateTotalExpensePercentageByCategory('entretenimiento')}%</td>
            </tr>
            {/* Add more rows for other categories */}
          </tbody>
        </table>
      </div>
    

    <div className="mb-3">
      <h2>Calificación de salud financiera</h2>
      <p>{calculateFinancialHealth()}</p>
    </div>
  </div>
);



{/*       
      <div className="mb-3">
        <h2>Gastos totales por categoría</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Gasto total</th>
              <th>Porcentaje del ingreso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alimentación</td>
              <td>{calculateTotalExpenseByCategory('alimentacion')}</td>
              <td>{calculateTotalExpensePercentageByCategory('alimentacion')}%</td>
            </tr>
            <tr>
              <td>Vivienda</td>
              <td>{calculateTotalExpenseByCategory('vivienda')}</td>
              <td>{calculateTotalExpensePercentageByCategory('vivienda')}%</td>
            </tr>
            {/* Add more rows for other categories */}
      //     </tbody>
      //   </table>
      // </div>
      // <div className="mb-3">
      //   <h2>Calificación de salud financiera</h2>
      //   <p>{calculateFinancialHealth()}</p>
      // </div>
    // </div> 
  }
  // );}




export default App;

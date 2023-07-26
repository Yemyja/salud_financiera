// import { useState } from 'react';

//     const useMaxExpensePercentage = () => {
//         const [maxExpensePercentage, setMaxExpensePercentage] = useState({
//           alimentacion: 30,
//           vivienda: 35,
//           transporte: 15,
//           entretenimiento: 10,
//           viajes_vacaciones: 10,
//           cuidado_personal: 10,
//           donaciones_caridad: 5,
//           regalos_celebraciones: 5,
//           suscripciones_membresias: 5,
//           educacion: 10,
//           salud: 10,
//           seguros: 10,
//           ahorro: 20,
//           inversiones: 10,
//           deudas: 20,
//           emergencias: 10,
//           gastos_miscelaneos: 10,
//         });
        
      
//         const getMaxExpensePercentageByCategory = (category) => {
//           return maxExpensePercentage[category] || 0;
//         };
      
//         const updateMaxExpensePercentage = (category, value) => {
//           // Asegúrate de que el valor sea un número positivo
//           const parsedValue = parseFloat(value);
//           if (!isNaN(parsedValue) && parsedValue >= 0) {
//             setMaxExpensePercentage({
//               ...maxExpensePercentage,
//               [category]: parsedValue,
//             });
//           }
//         };
//         return { maxExpensePercentage, getMaxExpensePercentageByCategory, updateMaxExpensePercentage, setMaxExpensePercentage };
//       };

// export default useMaxExpensePercentage;

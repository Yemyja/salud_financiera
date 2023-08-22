

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

import React from "react";
import "./Home.css";
import welcomeImage from "../assets/images/welcome-image.jpeg"; // Cambia la imagen de bienvenida
import bannerImage from "../assets/images/home1.webp"; // Cambia la imagen del banner

function Home() {
    return (
        <div className="container-fluid bg-black text-white py-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img src={bannerImage} alt="Banner" className="img-fluid rounded" />
                    <h1 className="display-4 mt-3 text-primary">Salud Financiera</h1>
                </div>
                <div className="col-md-6">
                    <div className="text">
                        <p>
                            ¡Bienvenidos a mi sitio web dedicado a la salud financiera personal! Como experto en finanzas, estoy aquí para brindarte consejos y conocimientos que te ayudarán a tomar decisiones financieras inteligentes y alcanzar tus metas económicas.
                        </p>
                        <p>
                            La salud financiera es fundamental para vivir una vida plena y tranquila. Al igual que cuidamos nuestra salud física y emocional, es esencial cuidar nuestras finanzas para garantizar un futuro económico estable. Aquí encontrarás información sobre cómo manejar tus ingresos, gastos y ahorros de manera efectiva.
                        </p>
                        <p>
                            Exploraremos temas como la planificación del presupuesto, la inversión inteligente, la gestión de deudas y la preparación para la jubilación. Mi objetivo es empoderarte con el conocimiento necesario para tomar decisiones financieras informadas y alcanzar la libertad económica que mereces.
                        </p>
                        <p>
                            ¡Comienza tu viaje hacia una salud financiera sólida hoy mismo! Explora los artículos, consejos y recursos disponibles en este sitio. Siempre estoy aquí para ayudarte en tu camino hacia un futuro financiero exitoso.
                        </p>
                        <p>
                            ¡Gracias por visitar y espero que encuentres información valiosa para mejorar tu salud financiera!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 order-md-2 text-center">
                    <img src={welcomeImage} alt="Welcome" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    );
}

export default Home;

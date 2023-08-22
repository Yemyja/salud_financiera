// import React from "react";
// import "./Blog.css";
// import { Link } from "react-router-dom";

// function Blog() {
//     return (
//         <div className="blog-container">
//             <article className="blog-post">
//                 <h2>5 Pasos para Establecer un Presupuesto Efectivo</h2>
//                 <p>
//                     Establecer un presupuesto sólido es la base de una buena salud financiera. En este artículo, exploraremos cinco pasos prácticos para crear y mantener un presupuesto que te permita controlar tus gastos, ahorrar e invertir de manera inteligente.
//                 </p>
//                 {/* <Link to="/Articulo1" className="read-more">Leer más</Link>  */}
//                 <a href="/Articulo1" className="read-more">Leer más</a>
//             </article>

//             <article className="blog-post">
//                 <h2>Inversiones para Principiantes: Diversificación y Riesgo</h2>
//                 <p>
//                     Si estás interesado en invertir pero eres nuevo en el mundo de las finanzas, es fundamental entender los conceptos de diversificación y riesgo. Descubre cómo construir una cartera de inversiones equilibrada y minimizar los riesgos asociados con el mercado financiero.
//                 </p>
//                 {/* <Link to="/Articulo1" className="read-more">Leer más</Link>  */}
//                 <a href="/Articulo1" className="read-more">Leer más</a>
//             </article>

//             <article className="blog-post">
//                 <h2>Planificación Financiera para el Retiro: ¿Estás Preparado?</h2>
//                 <p>
//                     El retiro es una etapa importante de la vida que requiere una planificación financiera cuidadosa. En este artículo, analizaremos la importancia de comenzar a planificar tu jubilación desde temprano y exploraremos estrategias para asegurarte de tener un futuro económico seguro y cómodo.
//                 </p>
//                 {/* <Link to="/Articulo1" className="read-more">Leer más</Link>  */}
//                 <a href="/articulo-3" className="read-more">Leer más</a>
//             </article>
//         </div>
//     );
// }

// export default Blog;
import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog() {
    return (
        <div className="blog-container">
            <article className="blog-post">
                <h2>5 Pasos para Establecer un Presupuesto Efectivo</h2>
                <p>
                    Establecer un presupuesto sólido es la base de una buena salud financiera. En este artículo, exploraremos cinco pasos prácticos para crear y mantener un presupuesto que te permita controlar tus gastos, ahorrar e invertir de manera inteligente.
                </p>
                <Link to="/Articulo1" className="read-more">Leer más</Link>
            </article>

            <article className="blog-post">
                <h2>Inversiones para Principiantes: Diversificación y Riesgo</h2>
                <p>
                    Si estás interesado en invertir pero eres nuevo en el mundo de las finanzas, es fundamental entender los conceptos de diversificación y riesgo. Descubre cómo construir una cartera de inversiones equilibrada y minimizar los riesgos asociados con el mercado financiero.
                </p>
                <Link to="/Articulo2" className="read-more">Leer más</Link>
            </article>

            <article className="blog-post">
                <h2>Planificación Financiera para el Retiro: ¿Estás Preparado?</h2>
                <p>
                    El retiro es una etapa importante de la vida que requiere una planificación financiera cuidadosa. En este artículo, analizaremos la importancia de comenzar a planificar tu jubilación desde temprano y exploraremos estrategias para asegurarte de tener un futuro económico seguro y cómodo.
                </p>
                <Link to="/Articulo3" className="read-more">Leer más</Link>
            </article>
        </div>
    );
}

export default Blog;

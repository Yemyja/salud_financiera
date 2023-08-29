


import React, { useState } from "react";
import "./Blog.css";

function Blog() {
    // Array de objetos que contiene los artículos del blog
    const articles = [
        {
            title:<strong> "5 Pasos para Establecer un Presupuesto Efectivo"</strong>,
            content:`
            Establecer un presupuesto sólido es la base de una buena salud financiera. En este artículo, exploraremos cinco pasos prácticos para crear y mantener un presupuesto que te permita controlar tus gastos, ahorrar e invertir de manera inteligente.
    
            El primer paso es analizar tus ingresos y gastos actuales. Examina detenidamente tus fuentes de ingresos, como tu salario, ingresos secundarios o cualquier otra fuente de dinero. Luego, registra todos tus gastos mensuales, desde facturas y alimentación hasta entretenimiento. Esta evaluación te dará una imagen clara de cómo estás gastando tu dinero.
    
            Una vez que tengas una idea clara de tus ingresos y gastos, establece metas financieras realistas. Decide qué objetivos financieros deseas alcanzar, ya sea ahorrar para un viaje, pagar deudas o invertir para el futuro. Estas metas te darán un propósito claro para tu presupuesto y te motivarán a tomar decisiones financieras más inteligentes.
    
            Con tus metas en mente, crea categorías de gastos específicas en tu presupuesto. Divide tus gastos en categorías como vivienda, transporte, alimentos, entretenimiento y ahorros. Asigna un límite para cada categoría en función de tus ingresos y metas financieras. Esto te ayudará a controlar tus gastos y evitar gastos excesivos.
    
            Luego, realiza un seguimiento regular de tus gastos y ajusta tu presupuesto según sea necesario. Utiliza herramientas como aplicaciones de presupuesto o hojas de cálculo para registrar tus gastos diarios y compararlos con tus categorías presupuestadas. Si notas que te estás excediendo en una categoría, busca formas de recortar gastos en otras áreas para mantener el equilibrio.
    
            Finalmente, mantén la disciplina y la consistencia en tu enfoque presupuestario. Revisa tu presupuesto regularmente, realiza ajustes según tus necesidades cambiantes y celebra tus logros financieros a medida que alcances tus metas. La clave para un presupuesto efectivo es la perseverancia y la adaptabilidad a medida que avanzas en tu viaje hacia la estabilidad financiera.
        `, image:"/images/home2.jpeg",
        },
        {
            title: <strong>"Inversiones para Principiantes: Diversificación y Riesgo"</strong> ,
            content: `
            Si estás interesado en invertir pero eres nuevo en el mundo de las finanzas, es fundamental entender los conceptos de diversificación y riesgo. En este artículo, exploraremos los fundamentos de la inversión y cómo puedes construir una cartera de inversiones equilibrada que te ayude a alcanzar tus objetivos financieros.
    
            La diversificación es una estrategia clave para mitigar el riesgo en tus inversiones. En lugar de poner todos tus huevos en una sola canasta, la diversificación implica invertir en diferentes tipos de activos, como acciones, bonos y bienes raíces. Esto ayuda a reducir la exposición al riesgo de cualquier activo individual y mejora tus posibilidades de obtener rendimientos consistentes en el tiempo.
    
            Al diversificar tu cartera, también puedes aprovechar diferentes oportunidades de crecimiento en diversos sectores y mercados. Por ejemplo, si un sector de la economía está atravesando dificultades, es posible que otro sector esté prosperando. Una cartera diversificada te permite equilibrar estas fluctuaciones y proteger tu inversión total.
    
            El riesgo es una parte inherente de la inversión, pero entenderlo es esencial para tomar decisiones informadas. Al evaluar el riesgo de una inversión, considera factores como la volatilidad histórica, la estabilidad del mercado y los factores económicos que podrían afectar el rendimiento. Comprender tus propios objetivos y tolerancia al riesgo te ayudará a tomar decisiones de inversión adecuadas.
    
            Una forma común de diversificar es invertir en fondos mutuos o fondos cotizados (ETF), que agrupan activos de diferentes tipos y sectores en una sola inversión. Esto te permite obtener diversificación instantánea sin tener que comprar individualmente cada activo. Además, investiga antes de invertir y considera consultar con un asesor financiero para construir una cartera que se adapte a tus objetivos y situación financiera.
    
            En resumen, la diversificación es una estrategia esencial para mitigar el riesgo y construir una cartera de inversiones sólida. Comprende los principios básicos de inversión, evalúa el riesgo de manera informada y busca oportunidades de crecimiento a largo plazo. Con una planificación cuidadosa y conocimiento financiero, puedes tomar pasos hacia un futuro financiero más seguro y exitoso.
        `
        ,
        image:"/images/blog3.jpeg",
    },
        {
            title:<strong> "Planificación Financiera para el Retiro: ¿Estás Preparado?"</strong> ,
            content: `
            El retiro es una etapa importante de la vida que requiere una planificación financiera cuidadosa. En este artículo, analizaremos la importancia de comenzar a planificar tu jubilación desde temprano y exploraremos estrategias para asegurarte de tener un futuro económico seguro y cómodo.

            Comenzar temprano es la clave para una planificación exitosa. Cuanto antes empieces a construir tu fondo de jubilación, más tiempo tendrás para que tus inversiones crezcan y se acumulen. Incluso si estás en tus años más jóvenes, hacer pequeñas contribuciones periódicas a tu cuenta de jubilación puede marcar una gran diferencia en el futuro.

            Una estrategia es diversificar tus inversiones. Dependiendo de tu tolerancia al riesgo y tus objetivos, puedes optar por invertir en una combinación de acciones, bonos y otros activos. La diversificación ayuda a reducir el riesgo y aumentar las posibilidades de obtener rendimientos consistentes a lo largo del tiempo.

            Además, considera aprovechar las opciones de ahorro con ventajas fiscales, como las cuentas de jubilación individual (IRA) y los planes 401(k) si están disponibles a través de tu empleador. Estas cuentas te permiten ahorrar dinero antes de impuestos, lo que puede tener un impacto positivo en tus ahorros a largo plazo.

            Es fundamental evaluar tus gastos y crear un presupuesto realista para la jubilación. Esto te ayudará a estimar cuánto necesitarás para vivir cómodamente y cuánto debes ahorrar para alcanzar ese objetivo. Considera factores como los gastos de vivienda, la atención médica y el entretenimiento en tu planificación.

            En resumen, la planificación financiera para el retiro es esencial para disfrutar de una vida cómoda y sin preocupaciones en tus años dorados. Comienza a planificar temprano, diversifica tus inversiones y aprovecha las opciones de ahorro con ventajas fiscales. Con una planificación cuidadosa, puedes asegurarte de tener un futuro económico seguro y cómodo durante tu jubilación.
        `, image:"/images/blog2.jpeg",
            }
    ];

    // Estado para realizar un seguimiento del índice del artículo expandido
    const [expandedArticleIndex, setExpandedArticleIndex] = useState(null);

    // Función para manejar el clic en "Leer más" o "Leer menos"
    const handleReadMore = (index) => {
        if (expandedArticleIndex === index) {
            setExpandedArticleIndex(null); // Cerrar el artículo expandido
        } else {
            setExpandedArticleIndex(index); // Abrir el artículo
        }
    };

    return (
        <div className="blog-container">
            {articles.map((article, index) => (
                <article key={index} className={`blog-post ${expandedArticleIndex === index ? 'expanded' : ''}`}>
                    <h2>{article.title}</h2>
                  

                    {expandedArticleIndex === index ? (
                        <div>
                            <p>{article.content}</p>
                            <button className="close-btn" onClick={() => handleReadMore(index)}></button>
                        </div>
                    ) : (
                        <p>{article.content.substring(0, 150)}...</p>
                    )}
                    <div className="center-content">
                    <button className="read-more" onClick={() => handleReadMore(index)}>
                        {expandedArticleIndex === index ? "Leer menos" : "Leer más"}
                    </button>
                    </div>
                    <br></br>

                    <div class="image-container">
    <img class="resizable-image"src={article.image} alt={article.title} /></div>
                </article>
            ))}
        </div>
    );
}



export default Blog;

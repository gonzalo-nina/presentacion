import { useState } from 'react'
import { Slide } from './components/Slide'
import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState(0)
  
  const slides = [
    {
      title: "Express.js & Node.js",
      content: "Una introducción al desarrollo backend"
    },
    {
      title: "¿Qué es Node.js?",
      content: "Node.js es un entorno de ejecución para JavaScript, construido sobre el motor V8 de Chrome. Permite ejecutar código JavaScript en el servidor."
    },
    {
      title: "Características de Node.js",
      content: "• Asincrónico y orientado a eventos\n• Escalabilidad\n• Ideal para aplicaciones en tiempo real\n• Extensa comunidad y ecosistema de módulos"
    },
    {
      title: "¿Qué es Express.js?",
      content: "Express.js es un framework minimalista para Node.js, diseñado para crear aplicaciones web y APIs de manera rápida y sencilla."
    },
    {
      title: "Características de Express.js",
      content: "• Enfoque minimalista\n• Middleware para manejo de peticiones/respuestas\n• Configuración flexible\n• Compatible con plantillas y APIs RESTful"
    },
    {
      title: "Relación entre Node.js y Express.js",
      content: "Node.js es la base, mientras que Express.js simplifica y optimiza el desarrollo de aplicaciones web con Node.js."
    },
    {
      title: "Ventajas de Node.js",
      content: "• Velocidad gracias a V8\n• Escalabilidad\n• Ecosistema de paquetes con npm\n• Multiplataforma"
    },
    {
      title: "Ventajas de Express.js",
      content: "• Código más limpio y organizado\n• Modularidad con middlewares\n• Amplio soporte de la comunidad\n• Ideal para APIs RESTful"
    },
    {
      title: "Casos de uso comunes",
      content: "• Node.js: Aplicaciones en tiempo real, servidores escalables\n• Express.js: APIs RESTful, aplicaciones web ligeras"
    },
    {
      title: "Conclusión",
      content: "Node.js proporciona la base, Express.js la potencia y facilita el desarrollo. Juntos, son esenciales para crear soluciones backend modernas."
    }
  ];
  

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setSlideDirection(1)
      setCurrentSlide(current => current + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setSlideDirection(-1)
      setCurrentSlide(current => current - 1)
    }
  }

  return (
    <div className="presentation">
      <div className="navigation-zones">
        <div 
          className="nav-zone nav-zone-left" 
          onClick={prevSlide}
          style={{ cursor: currentSlide === 0 ? 'default' : 'pointer' }}
        />
        <div 
          className="nav-zone nav-zone-right" 
          onClick={nextSlide}
          style={{ cursor: currentSlide === slides.length - 1 ? 'default' : 'pointer' }}
        />
      </div>
      
      {slides.map((slide, index) => (
        <Slide 
          key={index} 
          isActive={currentSlide === index}
          direction={slideDirection}
        >
          <h1>{slide.title}</h1>
          <p>{slide.content}</p>
        </Slide>
      ))}
      
      <div className="controls">
        <button onClick={prevSlide} disabled={currentSlide === 0}>
          Anterior
        </button>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default App

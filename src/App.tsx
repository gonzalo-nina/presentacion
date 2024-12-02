import { useState } from 'react'
import { motion } from 'framer-motion'
import { Slide } from './components/Slide'
import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Express.js & Node.js",
      content: "Una introducción al desarrollo backend"
    },
    {
      title: "¿Qué es Node.js?",
      content: "Runtime de JavaScript basado en V8"
    },
    // Add more slides as needed
  ]

  const nextSlide = () => {
    setCurrentSlide(current => 
      current < slides.length - 1 ? current + 1 : current
    )
  }

  const prevSlide = () => {
    setCurrentSlide(current => 
      current > 0 ? current - 1 : current
    )
  }

  return (
    <div className="presentation">
      {slides.map((slide, index) => (
        <Slide key={index} isActive={currentSlide === index}>
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

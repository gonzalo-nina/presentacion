// src/components/Slide.tsx
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideProps {
  children: ReactNode
  isActive: boolean
  direction: number
}

export const Slide = ({ children, isActive, direction }: SlideProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        x: direction * 100 
      }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : direction * -100,
        display: isActive ? 'flex' : 'none'
      }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
      className="slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
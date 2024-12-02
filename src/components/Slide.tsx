// src/components/Slide.tsx
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideProps {
  children: ReactNode
  isActive: boolean
}

export const Slide = ({ children, isActive }: SlideProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : 100,
        display: isActive ? 'flex' : 'none'
      }}
      transition={{ duration: 0.5 }}
      className="slide"
    >
      {children}
    </motion.div>
  )
}
import { motion } from 'framer-motion'
import { BotIcon } from 'lucide-react'
import React from 'react'

export default function ThinkingBot() {
  return (
    <motion.div
      className="w-full mx-auto max-w-3xl"
      animate={{
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut'
      }}
    >
      <BotIcon size={20} />
    </motion.div>
  )
}

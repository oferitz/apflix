import { motion } from 'framer-motion'
import { BotMessageSquareIcon, PopcornIcon } from 'lucide-react'

export default function NoMessage() {
  return (
    <motion.div
      key="NoMessage"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-4 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <PopcornIcon size={32} />
          <span>+</span>
          <BotMessageSquareIcon size={32} />
        </p>
        <p>
          Hi there! Welcome to <b>APflix</b>, a movie recommendation chatbot.{' '}
        </p>
        <p>
          Start by typing a message in the chat box to get movie
          recommendations.
        </p>
      </div>
    </motion.div>
  )
}

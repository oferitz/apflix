import BotMessage from '@/app/components/BotMessage'
import UserMessage from '@/app/components/UserMessage'
import type { Message } from 'ai'
import { motion } from 'framer-motion'
interface MessageProps {
  message: Message
}

export default function ChatMessage({ message }: MessageProps) {
  return (
    <motion.div
      className="w-full mx-auto max-w-3xl px-4 group/message"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      data-role={message.role}
    >
      {message.role === 'user' && <UserMessage content={message.content} />}
      {message.role === 'assistant' && <BotMessage content={message.content} />}
    </motion.div>
  )
}

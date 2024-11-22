import { BotMessageSquareIcon } from 'lucide-react'
import Markdown from 'react-markdown'

interface BotMessageProps {
  content: string
}

export default function BotMessage({ content }: BotMessageProps) {
  return (
    <div className="flex gap-4 max-w-2xl w-fit font-medium">
      <div className="w-[24px]">
        <BotMessageSquareIcon size={24} strokeWidth={1.5} />
      </div>
      <div>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}

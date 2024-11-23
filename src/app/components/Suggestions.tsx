import { Button } from '@nextui-org/react'
import type { ChatRequestOptions, CreateMessage, Message } from 'ai'
import { motion } from 'framer-motion'

const suggestedActions = [
  {
    title: 'Romantic and Thoughtful',
    label: 'For a cozy movie night',
    action:
      'I’m planning a cozy movie night with my girlfriend. Something romantic but not too cheesy—what should we watch?'
  },
  {
    title: 'Adventurous Mood',
    label: 'We’re up for an adventure tonight!',
    action:
      'We’re up for an adventure tonight! Any epic movies or action-packed stories you recommend?'
  }
]

interface SuggestionsProps {
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>
}
export default function Suggestions({ append }: SuggestionsProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-2 w-full">
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              await append({
                role: 'user',
                content: suggestedAction.action
              })
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-gray-400">{suggestedAction.label}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

import { type Message, StreamData, convertToCoreMessages, streamText } from 'ai'

import { systemPrompt } from '@/app/lib/prompts'
import { openai } from '@ai-sdk/openai'

export const maxDuration = 60

export async function POST(request: Request) {
  const { messages }: { messages: Array<Message> } = await request.json()

  const coreMessages = convertToCoreMessages(messages)

  const streamingData = new StreamData()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: systemPrompt,
    messages: coreMessages,
    maxSteps: 5,
    onFinish: async () => streamingData.close()
  })

  return result.toDataStreamResponse({
    data: streamingData
  })
}

import { type Message, StreamData, convertToCoreMessages, streamText } from 'ai'

import { getPrompt } from '@/app/lib/prompts'
import { openai } from '@ai-sdk/openai'

export const maxDuration = 60

type RequestBody = {
  messages: Array<Message>
  userUrls: string[]
}

export async function POST(request: Request) {
  const { messages, userUrls = [] }: RequestBody = await request.json()

  const coreMessages = convertToCoreMessages(messages)

  const streamingData = new StreamData()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: getPrompt(userUrls.join(' ')),
    messages: coreMessages,
    maxSteps: 5,
    onFinish: async () => streamingData.close()
  })

  return result.toDataStreamResponse({
    data: streamingData
  })
}

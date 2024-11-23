import { type Message, StreamData, convertToCoreMessages, streamText } from 'ai'

import { getPrompt } from '@/app/lib/prompts'
import { getUserMoviesPrompt } from '@/app/lib/services'
import { openai } from '@ai-sdk/openai'

export const maxDuration = 60

type RequestBody = {
  messages: Array<Message>
  userMovieIds: string[]
}

export async function POST(request: Request) {
  const { messages, userMovieIds = [] }: RequestBody = await request.json()

  const coreMessages = convertToCoreMessages(messages)
  const userMoviesPrompt = await getUserMoviesPrompt(userMovieIds)

  const streamingData = new StreamData()

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: getPrompt(userMoviesPrompt),
    messages: coreMessages,
    maxSteps: 5,
    onFinish: async () => streamingData.close()
  })

  return result.toDataStreamResponse({
    data: streamingData
  })
}

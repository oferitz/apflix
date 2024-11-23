'use client'

import ChatActions from '@/app/components/ChatActions'
import ChatMessage from '@/app/components/ChatMessage'
import NoMessage from '@/app/components/NoMessage'
import ThinkingBot from '@/app/components/ThinkingBot'
import UserUrls from '@/app/components/UserUrls'
import { getValidImdbIds } from '@/app/lib/helpers'
import { useScrollToBottom } from '@/app/lib/hooks/useScrollToBottom'
import { Textarea } from '@nextui-org/input'
import { useChat } from 'ai/react'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

export default function Chat() {
  const [urls, setUrls] = React.useState<string[]>([])
  const { messages, handleInputChange, handleSubmit, input, isLoading } =
    useChat({
      body: {
        userMovieIds: getValidImdbIds(urls)
      }
    })

  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>()

  const handleUrlsChange = (newUrls: string[]) => {
    // remove duplicates by converting the array to a set and back to an array
    setUrls(Array.from(new Set(newUrls)))
  }

  const handleRemove = (id: string) => {
    setUrls(urls.filter((u) => !u.includes(id)))
  }

  return (
    <>
      <div
        ref={messagesContainerRef}
        className="flex flex-col min-w-0 gap-6 flex-1 overflow-y-scroll pt-4"
      >
        {messages.length === 0 && <NoMessage />}

        {messages.map((message) => (
          <AnimatePresence key={message.id}>
            <ChatMessage message={message} />
          </AnimatePresence>
        ))}

        {isLoading &&
          messages.length > 0 &&
          messages[messages.length - 1].role === 'user' && <ThinkingBot />}

        <div
          ref={messagesEndRef}
          className="shrink-0 min-w-[24px] min-h-[24px]"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl"
      >
        <Textarea
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          labelPlacement="outside"
          placeholder="Tell me about the type of movie you feel like watching today!"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          classNames={{
            input: 'text-lg'
          }}
          endContent={
            <ChatActions
              isLoading={isLoading}
              urls={urls}
              onUrlsChange={handleUrlsChange}
            />
          }
        />
      </form>
      <UserUrls urls={urls} onRemove={handleRemove} />
    </>
  )
}

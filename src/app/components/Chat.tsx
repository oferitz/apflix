'use client'

import ChatMessage from '@/app/components/ChatMessage'
import NoMessage from '@/app/components/NoMessage'
import { useScrollToBottom } from '@/app/lib/hooks/useScrollToBottom'
import { Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/react'
import { useChat } from 'ai/react'
import { ArrowUp, Square } from 'lucide-react'
import React from 'react'

export default function Chat() {
  const {
    messages,
    setMessages,
    handleInputChange,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
    data: streamingData
  } = useChat()

  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>()

  return (
    <div className="w-full mx-auto max-w-3xl px-4">
      <div
        ref={messagesContainerRef}
        className="flex flex-col min-w-0 gap-6 flex-1 overflow-y-scroll pt-4"
      >
        {messages.length === 0 && <NoMessage />}

        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isLoading &&
          messages.length > 0 &&
          messages[messages.length - 1].role === 'user' && <div>...</div>}

        <div
          ref={messagesEndRef}
          className="shrink-0 min-w-[24px] min-h-[24px]"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <Textarea
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          labelPlacement="outside"
          placeholder="Tell me about the type of movie you feel like watching today!"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          classNames={{
            input: 'text-xl'
          }}
          endContent={
            <Button
              size="sm"
              isIconOnly
              radius="full"
              className="bg-gradient-to-tr from-green-500 to-emerald-500 self-end"
              isDisabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <Square size={12} stroke="black" fill="black" />
              ) : (
                <ArrowUp size={20} stroke="black" />
              )}
            </Button>
          }
        />
      </form>
    </div>
  )
}

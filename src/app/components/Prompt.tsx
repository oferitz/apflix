'use client'

import { Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/react'
import { ArrowRight } from 'lucide-react'

export default function Prompt() {
  return (
    <Textarea
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
        >
          <ArrowRight size={20} stroke="black" />
        </Button>
      }
    />
  )
}

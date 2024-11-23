import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea
} from '@nextui-org/react'
import { ArrowUp, PlusIcon, Square } from 'lucide-react'
import React from 'react'

interface ChatActions {
  isLoading: boolean
  urls: string[]
  onUrlsChange: (newUrls: string[]) => void
}

export default function ChatActions({
  isLoading,
  urls,
  onUrlsChange
}: ChatActions) {
  return (
    <div className="flex gap-2 self-end">
      <Popover placement="bottom" showArrow offset={10}>
        <PopoverTrigger>
          <Button size="sm" isIconOnly radius="full" isDisabled={isLoading}>
            <PlusIcon size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[440px]">
          {(titleProps) => (
            <div className="px-1 py-2 w-full">
              <p
                className="text-small font-bold text-foreground"
                {...titleProps}
              >
                Add your own movies
              </p>
              <div className="mt-2 flex flex-col gap-2 w-full">
                <p>
                  You can enhance the recommendations by adding your own movies.
                  Simply insert a list of
                  <a
                    href="https://www.imdb.com/chart/top/?ref_=nv_mv_250&sort=release_date%2Cdesc"
                    target="_blank"
                    className="mx-1 underline"
                  >
                    IMDb
                  </a>
                  URLs below.
                </p>
                <Textarea
                  value={urls.join(' ')}
                  onValueChange={(value) => onUrlsChange(value.split(' '))}
                  label="Enter space-separated valid IMDb URLs"
                  placeholder="for example: https://www.imdb.com/title/tt0111161/ https://www.imdb.com/title/tt0068646/"
                />
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
      <Button
        size="sm"
        isIconOnly
        radius="full"
        className="bg-gradient-to-tr from-green-500 to-emerald-500"
        isDisabled={isLoading}
        type="submit"
      >
        {isLoading ? (
          <Square size={12} stroke="black" fill="black" />
        ) : (
          <ArrowUp size={20} stroke="black" />
        )}
      </Button>
    </div>
  )
}

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getValidImdbIds(urls: string[]) {
  const imdbRegex =
    /^https?:\/\/(www\.)?imdb\.com\/title\/(tt\d{7,8})\/?(\?.*)?$/
  return urls
    .map((url) => {
      const match = url.match(imdbRegex)
      return match ? match[2] : null
    })
    .filter((id) => id !== null) // Remove null values
}

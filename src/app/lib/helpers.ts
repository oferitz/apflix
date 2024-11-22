import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getValidUrls(urls: string[]) {
  return urls.filter((u) => {
    try {
      new URL(u)
      return true
    } catch {
      return false
    }
  })
}

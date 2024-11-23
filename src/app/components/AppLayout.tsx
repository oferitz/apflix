import { cn } from '@/app/lib/helpers'
import type React from 'react'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-w-0 h-dvh bg-background">
      <header className="px-4 py-2 sticky top-0">
        <h1
          className={cn(
            'text-3xl font-bold',
            'bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-400',
            'inline-block text-transparent bg-clip-text'
          )}
        >
          APflix
        </h1>
      </header>
      {children}
    </div>
  )
}

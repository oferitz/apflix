import { cn } from '@/app/lib/helpers'
import type React from 'react'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <header className="p-4 sticky top-0">
        <h1
          className={cn(
            'text-4xl font-bold',
            'bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-400',
            'inline-block text-transparent bg-clip-text'
          )}
        >
          APflix
        </h1>
      </header>
      <main className="container mx-auto p-8">{children}</main>
    </div>
  )
}

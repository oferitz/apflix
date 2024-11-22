import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import type React from 'react'
import { Providers } from './providers'

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'APflix',
  description: 'Movies recommendation app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${figtree.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

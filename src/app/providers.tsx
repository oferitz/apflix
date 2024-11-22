'use client'

import AppLayout from '@/app/components/AppLayout'
import { NextUIProvider } from '@nextui-org/react'
import type React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AppLayout>{children}</AppLayout>
    </NextUIProvider>
  )
}

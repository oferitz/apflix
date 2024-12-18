import React, { type RefObject } from 'react'

export function useScrollToBottom<T extends HTMLElement>(): [
  RefObject<T>,
  RefObject<T>
] {
  const containerRef = React.useRef<T>(null)
  const endRef = React.useRef<T>(null)

  React.useEffect(() => {
    const container = containerRef.current
    const end = endRef.current

    if (container && end) {
      const observer = new MutationObserver(() => {
        end.scrollIntoView({ behavior: 'smooth', block: 'end' })
      })

      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
      })

      return () => observer.disconnect()
    }
  }, [])

  return [containerRef, endRef]
}

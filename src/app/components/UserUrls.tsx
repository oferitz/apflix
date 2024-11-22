import { getValidUrls } from '@/app/lib/helpers'
import { Chip } from '@nextui-org/react'
interface UserUrlsProps {
  urls: string[]
  onRemove: (url: string) => void
}
export default function UserUrls({ urls, onRemove }: UserUrlsProps) {
  return (
    <div className="mt-4 flex gap-2 flex-wrap">
      {getValidUrls(urls).map((url) => (
        <Chip
          key={url}
          onClose={() => onRemove(url)}
          className="cursor-pointer"
        >
          {url}
        </Chip>
      ))}
    </div>
  )
}

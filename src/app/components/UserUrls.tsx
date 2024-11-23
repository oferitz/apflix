import { getValidImdbIds } from '@/app/lib/helpers'
import { Chip } from '@nextui-org/react'
interface UserUrlsProps {
  urls: string[]
  onRemove: (url: string) => void
}
export default function UserUrls({ urls, onRemove }: UserUrlsProps) {
  return urls.length > 0 ? (
    <div className="mt-2 w-full mx-auto max-w-3xl flex gap-2 flex-wrap">
      {getValidImdbIds(urls).map((id) => (
        <Chip key={id} onClose={() => onRemove(id)} className="cursor-pointer">
          {id}
        </Chip>
      ))}
    </div>
  ) : null
}

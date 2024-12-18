interface UserMessageProps {
  content: string
}
export default function UserMessage({ content }: UserMessageProps) {
  return (
    <div className="bg-gradient-to-b from-emerald-600 to-emerald-500 rounded-xl max-w-2xl text-black ml-auto w-fit px-3 py-2 font-medium">
      {content}
    </div>
  )
}

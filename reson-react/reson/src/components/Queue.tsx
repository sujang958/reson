import { FC } from "react"
import QueueItem from "./QueueItem"

const Queue: FC = () => {
  return (
    <main className="mt-3 min-w-sm flex-1 bg-black rounded-lg py-3 px-4 overflow-auto h-2/5">
      <p className="text-2xl font-medium">Queue</p>
      <div className="py-2 flex flex-col mt-1 gap-y-3.5">
        <QueueItem />
        <QueueItem />
        <QueueItem />
        <QueueItem />
      </div>
    </main>
  )
}

export default Queue

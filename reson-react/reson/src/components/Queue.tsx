import { FC } from "react"
import QueueItem from "./QueueItem"

const Queue: FC<{ items: any[] }> = ({ items }) => {
  return (
    <main className="mt-3 min-w-sm flex-1 bg-black rounded-lg py-3 px-4 overflow-auto h-2/5">
      <p className="text-2xl font-medium">Queue</p>
      <div className="py-2 flex flex-col mt-1 gap-y-3.5">
        {items.map((item) => (
          <div id={item.id} className="flex flex-row items-center">
            {item.json}
            <div className="flex flex-col">
              <p className="text-base text-white">五月は花緑青の窓辺から</p>
              <p className="text-sm text-neutral-400 mt-0.5">
                Yorushika | 4:53 | Added by a
              </p>
            </div>
          </div>
        ))}
        {/* <QueueItem />
        <QueueItem />
        <QueueItem />
        <QueueItem /> */}
      </div>
    </main>
  )
}

export default Queue

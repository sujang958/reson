import { FC } from "react"
import QueueItem from "./QueueItem"

const Queue: FC<{ items: any[] }> = ({ items }) => {
  const tryJSONParse = (json: any): any => {
    try {
      return JSON.parse(json)
    } catch {
      return {}
    }
  }

  return (
    <main className="mt-3 min-w-sm flex-1 bg-black rounded-lg py-3 px-4 overflow-auto h-2/5">
      <p className="text-2xl font-medium">Queue</p>
      <div className="py-2 flex flex-col mt-1 gap-y-3.5">
        {items
          .filter((item) => item && item?.id && item?.json)
          .map((item) => ({ id: item.id, json: tryJSONParse(item.json) }))
          .map((item) => (
            <div id={item.id} className="flex flex-row items-center">
              <div className="flex flex-col">
                <p className="text-base text-white">
                  {item.json.snippet.title}
                </p>
                <p className="text-sm text-neutral-400 mt-0.5">
                  {item.json.snippet.channelTitle}
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

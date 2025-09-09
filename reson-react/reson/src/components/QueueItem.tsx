import { FC } from "react"

const QueueItem: FC = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col">
        <p className="text-base text-white">五月は花緑青の窓辺から</p>
        <p className="text-sm text-neutral-400 mt-0.5">
          Yorushika | 4:53 | Added by a
        </p>
      </div>
    </div>
  )
}

export default QueueItem  

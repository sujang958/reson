import ky from "ky"
import { debounce } from "lodash"
import { Search as SearchIcon } from "lucide-react"
import { FC, useEffect, useState } from "react"

// yt api key https://stackoverflow.com/questions/25657111/protecting-youtube-v3-api-key-in-a-client-side-application

type Thumbnail = { url: string; width: number; height: number }

type VideoItem = {
  id: { kind: string; videoId: string }
  kind: string
  snippet: {
    channelTitle: string
    description: string
    publishedAt: string
    thumbnails: { default: Thumbnail; high: Thumbnail }
    title: string
  }
}

const Search: FC<{ onSelect: (video: VideoItem) => any }> = ({ onSelect }) => {
  const [results, setResults] = useState<VideoItem[] | "LOADING">([])
  const loadVideos = debounce(async (q: string) => {
    console.log(q, encodeURIComponent(q))
    try {
      setResults("LOADING")

      const res = await ky
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(q)}&maxResults=10&key=${import.meta.env.VITE_YT_API_KEY}`
        )
        .json<any>()

      const items = res?.items
      if (!items) return setResults([])

      console.log(items)

      setResults([...items.filter((v: any) => v.id.kind == "youtube#video")])
    } catch {
      setResults([])
    }
  }, 3000)

  useEffect(() => {}, [])

  return (
    <main className="flex-1 bg-black rounded-lg p-4 h-full">
      <label className="relative">
        <input
          type="text"
          id="ytsearch"
          placeholder="Search youtube videos"
          className="border border-stone-700 rounded-lg w-full shadow-xs py-1 px-2 flex-1"
          onChange={(event) => loadVideos(event.target.value)}
        />
        <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 stroke-stone-700" />
      </label>
      <div className="py-2"></div>
      <div className="flex flex-col gap-y-1">
        {typeof results !== "string" &&
          results.map((video) => (
            <div
              id={video.id.videoId}
              className="flex flex-row items-center py-1 cursor-pointer rounded-lg hover:opacity-75 gap-x-3"
              onClick={() => {
                onSelect(video)
              }}
            >
              <aside className="w-32 h-24 overflow-hidden flex flex-col items-center justify-center">
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt="thumbnail"
                  className=" object-cover"
                  width={video.snippet.thumbnails.high.width}
                  height={video.snippet.thumbnails.high.height}
                />
              </aside>{" "}
              <main className="flex-1 flex flex-col h-24 justify-center">
                <p className="text-lg font-medium text-ellipsis">
                  {video.snippet.title}
                </p>
                <p className="text-sm text-neutral-400 mt-1">
                  {video.snippet.channelTitle}
                </p>
              </main>
            </div>
          ))}
      </div>
    </main>
  )
}

export default Search

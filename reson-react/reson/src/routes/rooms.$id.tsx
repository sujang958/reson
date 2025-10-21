import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef } from "react"
import LiteYoutubeEmbed from "react-lite-youtube-embed"
import YouTubeIFrameCtrl from "youtube-iframe-ctrl"
import Queue from "../components/Queue"
import Search from "../components/Search"

export const Route = createFileRoute("/rooms/$id")({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const ytRef = useRef<HTMLIFrameElement>(null)
  const ytCtrl = useRef<YouTubeIFrameCtrl>(null)

  useEffect(() => {
    ytCtrl.current = ytRef.current ? new YouTubeIFrameCtrl(ytRef.current) : null

    let a = setTimeout(() => {
      console.log("hello", ytRef.current?.contentWindow)
      ytRef.current?.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "loadVideoById",
          args: ["jNQXAC9IVRw", 0], // it fucking worked
        }),
        "*"
      )
    }, 8000)

    return () => clearTimeout(a)
  }, [ytRef])

  return (
    <>
      <section>
        <p className="text-sm text-neutral-400 mt-2 text-wrap max-w-sm">{id}</p>
        <p className="mt-1 text-3xl font-semibold">Watching something</p>
        {/* <p className="text-lg text-neutral-600 mt-3 text-wrap max-w-sm">
          lets watch together
        </p> */}
      </section>

      <section className="flex flex-wrap flex-row items-start justify-between gap-12 mt-6">
        <aside className="shrink rounded-lg h-full">
          <div className="bg-black rounded-lg px-2 pt-0 pb-3">
            <LiteYoutubeEmbed
              id="xvFZjo5PgG0"
              title="d"
              ref={ytRef}
              enableJsApi
              alwaysLoadIframe
              autoplay
              muted
            />
            {/* <div className="flex flex-row items-center mt-3 gap-x-2">
              <Button
                className="bg-stone-900"
                onClick={() => ytCtrl.current?.unMute()}
              >
                <Volume2 size={16} />
                Unmute
              </Button>
              <Button
                className="bg-stone-900"
                onClick={() => ytCtrl.current?.unMute()}
              >
                <SkipForward size={16} />
                Skip
              </Button>
            </div> */}
          </div>
          <Queue />
        </aside>
        <Search />
      </section>
    </>
  )
}

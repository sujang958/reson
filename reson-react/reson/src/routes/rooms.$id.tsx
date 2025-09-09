import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef } from "react"
import LiteYoutubeEmbed from "react-lite-youtube-embed"
import YouTubeIFrameCtrl from "youtube-iframe-ctrl"
import Button from "../components/Button"
import { SkipForward, Volume2 } from "lucide-react"
import QueueItem from "../components/QueueItem"

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
        <p className="text-sm text-neutral-600 mt-2 text-wrap max-w-sm">{id}</p>
        <p className="mt-1 text-3xl font-semibold">Title</p>
        {/* <p className="text-lg text-neutral-600 mt-3 text-wrap max-w-sm">
          lets watch together
        </p> */}
      </section>

      <section className="flex flex-wrap flex-row items-start justify-between gap-12 mt-8">
        <aside className="shrink">
          <LiteYoutubeEmbed
            id="xvFZjo5PgG0"
            title="d"
            ref={ytRef}
            enableJsApi
            alwaysLoadIframe
            autoplay
            muted
          />
          <div className="flex flex-row items-center mt-3 gap-x-2">
            <Button onClick={() => ytCtrl.current?.unMute()}>
              <Volume2 size={16} />
              Unmute
            </Button>
            <Button onClick={() => ytCtrl.current?.unMute()}>
              <SkipForward size={16} />
              Skip
            </Button>
          </div>
        </aside>
        <main className="min-w-sm flex-1 bg-black rounded-lg py-3 px-4 h-[60lvh]">
          <p className="text-2xl font-medium">Queue</p>
          <div className="py-2 flex flex-col mt-3 gap-y-3.5">
            <QueueItem />
            <QueueItem />
            <QueueItem />
            <QueueItem />
          </div>
        </main>
      </section>
      <div className="py-6"></div>
    </>
  )
}

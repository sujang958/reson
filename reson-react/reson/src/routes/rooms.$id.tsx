import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef } from "react"
import LiteYoutubeEmbed from "react-lite-youtube-embed"
import YouTubeIFrameCtrl from "youtube-iframe-ctrl"
import Button from "../components/Button"
import { Volume2 } from "lucide-react"

export const Route = createFileRoute("/rooms/$id")({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const ytRef = useRef(null)
  const ytCtrl = useRef<YouTubeIFrameCtrl>(null)

  useEffect(() => {
    ytCtrl.current = ytRef.current ? new YouTubeIFrameCtrl(ytRef.current) : null
  }, [ytRef])

  return (
    <>
      <section>
        <p className="text-sm text-neutral-600 mt-2 text-wrap max-w-sm">{id}</p>
        <p className="mt-1 text-3xl font-semibold">Title</p>
        <p className="text-lg text-neutral-600 mt-3 text-wrap max-w-sm">
          lets watch together
        </p>
      </section>
      <section className="flex flex-col flex-1">
        <aside>
          <LiteYoutubeEmbed
            id="xvFZjo5PgG0"
            title="d"
            ref={ytRef}
            enableJsApi
            alwaysLoadIframe
            autoplay
            muted
          />
          <div className="flex flex-row items-center mt-2">
            <Button>
              <Volume2 size={16} />
              Unmute
            </Button>
          </div>
        </aside>
        <main></main>
      </section>
      <div className="py-6"></div>
    </>
  )
}

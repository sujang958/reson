import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef } from "react"
import LiteYoutubeEmbed from "react-lite-youtube-embed"
import YouTubeIFrameCtrl from "youtube-iframe-ctrl"
import Queue from "../components/Queue"
import Search from "../components/Search"
import { useAccount, useCoState } from "jazz-tools/react-core"
import { WatchParty } from "../libs/schema"

export const Route = createFileRoute("/rooms/$id")({
  component: RouteComponent,
})

function RouteComponent() {
  const { me } = useAccount()
  const { id } = Route.useParams()
  const ytRef = useRef<HTMLIFrameElement>(null)
  const ytCtrl = useRef<YouTubeIFrameCtrl>(null)
  const party = useCoState(WatchParty, id)

  // if (!party) return <div>loading</div>

  const playVideo = (id: string) => {
    ytRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "loadVideoById",
        args: [id, 0], // it fucking worked
      }),
      "*"
    )
  }

  useEffect(() => {
    const videoId = party?.items?.at(0)
    if (!videoId?.id) return
    playVideo(videoId.id!.toString())
  }, [party])

  useEffect(() => {
    setTimeout(() => console.log(ytCtrl.current?.playerState), 9000)
    console.log(ytCtrl.current?.playerState)
  }, [ytCtrl.current?.playerState])

  useEffect(() => {
    console.log(me?.profile?.name, party?.title, id)
    ytCtrl.current = ytRef.current ? new YouTubeIFrameCtrl(ytRef.current) : null
    ytCtrl.current?.playerState // HOW TO GETTHIS SHIT BRUH

    ytCtrl.current.
  }, [ytRef])

  return (
    <>
      <section>
        <p className="text-sm text-neutral-400 mt-2 text-wrap max-w-sm">{id}</p>
        <p className="mt-1 text-3xl font-semibold">{party?.title}</p>
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
        <Search
          onSelect={(video) => {
            party?.items?.$jazz.push({
              id: video.id.videoId,
              json: JSON.stringify(video),
            })
          }}
        />
      </section>
    </>
  )
}

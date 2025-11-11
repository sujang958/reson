import { createFileRoute } from "@tanstack/react-router"
import { useCallback, useEffect, useRef, useState } from "react"
import LiteYoutubeEmbed from "react-lite-youtube-embed"
import YouTubeIFrameCtrl from "youtube-iframe-ctrl"
import Queue from "../components/Queue"
import Search from "../components/Search"
import { useAccount, useCoState } from "jazz-tools/react-core"
import { WatchParty } from "../libs/schema"
import { isControlledAccount } from "jazz-tools"

function debounce(func: any, timeout = 300) {
  let timer: any
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}

export const Route = createFileRoute("/rooms/$id")({
  component: RouteComponent,
})

function RouteComponent() {
  const me = useAccount()
  const { id } = Route.useParams()
  const ytRef = useRef<HTMLIFrameElement>(null)
  const ytCtrl = useRef<YouTubeIFrameCtrl>(null)
  const party = useCoState(WatchParty, id, {
    resolve: { items: { $each: true } },
  })

  const [playingState, setPlayingState] = useState<
    "idk" | "UNSTARTED" | "CUED" | "PLAYING" | "BUFFERING" | "ENDED"
  >("idk")
  useEffect(() => {
    console.log(playingState)
  }, [playingState])

  useEffect(() => {
    // ytCtrl.current?.command()
    if (
      playingState !== "ENDED" &&
      playingState !== "idk" &&
      playingState !== "CUED"
    )
      return
    if (!party.$isLoaded) return
    const videoId = party?.items[0]
    if (!videoId?.id) return
    playVideo(videoId.id!.toString())
  }, [party])

  const shiftQueue = () => {
    if (!me.$isLoaded || !party.$isLoaded) return

    console.log(party, me?.profile)
    if (!party || !me) return
    // isControlledAccount()
    if (!me.canAdmin(party)) return

    console.log("Removed", party.items?.$jazz.remove(0))
  }

  useEffect(() => {
    if (!party.$isLoaded) return
    console.log(me, party?.title, id)
    ytCtrl.current = ytRef.current ? new YouTubeIFrameCtrl(ytRef.current) : null

    if (ytRef.current?.contentWindow) {
      const listener = debounce(async (event: any) => {
        setPlayingState(event.detail)
        //  console.log("HELLO?", event, event.detail)
        if (event.detail !== "ENDED") return

        shiftQueue()
      })
      ytRef.current.addEventListener("ytstatechange", listener)

      return () => {
        ytRef.current?.removeEventListener("ytstatechange", listener)
      }

      // ytRef.current.contentWindow.onmessage = (event) => {
      //   console.log(event, "Why tf")
      // }
    }
  }, [ytRef, party])

  // useEffect(() => {
  //   console.log("HEL", normalizedItems)
  // }, [normalizedItems])

  if (!me.$isLoaded) {
    return "Loading..."
  }

  if (!party.$isLoaded) {
    switch (party.$jazz.loadingState) {
      case "unauthorized":
        return "Project not accessible"
      case "unavailable":
        return "Project not found"
      case "loading":
        return "Loading project..."
    }
  }

  const normalizedItems = party?.items?.map((v) => ({
    id: v?.id?.toString(),
    json: v?.json?.toString(),
  }))

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

  // TODO: seperate adder and remover (Only one)

  return (
    <>
      <section>
        <p className="text-sm text-neutral-400 mt-2 text-wrap max-w-sm">{id}</p>
        <p className="mt-1 text-3xl font-semibold">{party?.title.toString()}</p>
        {/* <p className="text-lg text-neutral-600 mt-3 text-wrap max-w-sm">
          lets watch together
        </p> */}
      </section>

      <section className="flex flex-wrap flex-row items-start justify-between gap-12 mt-6">
        <aside className="shrink rounded-lg h-full">
          <div className="bg-black rounded-lg px-2 pt-0 pb-3">
            <LiteYoutubeEmbed
              id=""
              title="d"
              ref={ytRef}
              enableJsApi
              alwaysLoadIframe
              // noCookie

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

          <Queue
            items={
              party?.items?.map((v) => ({ id: v?.id, json: v?.json })) ?? []
            }
          />
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

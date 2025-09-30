import { useAccount } from "jazz-tools/react"
import { JazzAccount } from "../libs/schema"
import { Link } from "@tanstack/react-router"

export function Form() {
  const { me } = useAccount(JazzAccount, {
    resolve: { profile: true, root: true },
  })

  if (!me) return null

  return (
    <div className="flex flex-col gap-4 border p-8 border-stone-700 rounded-lg">
      <div className="flex flex-col items-center gap-3">
        <label className="flex flex-col gap-y-2 w-full">
          Nickname
          <div className="flex flex-row items-center justify-between w-full gap-x-3">
            <input
              type="text"
              id="nickname"
              placeholder="Enter your nickname here..."
              className="border border-stone-700 rounded-lg shadow-xs py-1 px-2 flex-1"
              value={me.profile.nickname || ""}
              onChange={(e) => me.profile.$jazz.set("nickname", e.target.value)}
            />
            <Link to="/" className="bg-black rounded-lg py-1.5 px-4 text-white">
              Create a room
            </Link>
          </div>
        </label>
      </div>
    </div>
  )
}

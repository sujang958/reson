import { createFileRoute } from "@tanstack/react-router"
import { Form } from "../components/Form"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="max-w-xl w-full self-center">
      <section>
        <p className="text-3xl font-semibold">Reson</p>
        <p className="text-lg text-neutral-600 mt-2 text-wrap max-w-sm">
          Watch together. It's like Spotify's Jam or Discord's watch together
          but it is on web.
        </p>
      </section>

      <div className="py-6"></div>

      <Form />
    </div>
  )
}

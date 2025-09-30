import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const RootLayout = () => (
  <>
    <header className="fixed top-0 p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Reson
      </Link>
    </header>

    <main className="max-w-7xl h-full w-full self-center p-16 flex flex-col">
      <Outlet />
    </main>

    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })

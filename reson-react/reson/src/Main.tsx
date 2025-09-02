import { JazzReactProvider } from "jazz-tools/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { JazzInspector } from "jazz-tools/inspector"
import { apiKey } from "./apiKey.ts"
import { JazzAccount } from "./libs/schema.ts"
import { RouterProvider, createRouter } from "@tanstack/react-router"

import { routeTree } from "./routeTree.gen"

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// This identifies the app in the passkey auth
export const APPLICATION_NAME = "reson"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JazzReactProvider
      sync={{
        peer: `wss://cloud.jazz.tools/?key=${apiKey}`,
      }}
      AccountSchema={JazzAccount}
    >
      <RouterProvider router={router} />

      <JazzInspector />
    </JazzReactProvider>
  </StrictMode>
)

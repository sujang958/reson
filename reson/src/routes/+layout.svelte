<script lang="ts">
  import { JazzSvelteProvider } from "jazz-tools/svelte";
  import { apiKey } from "../apiKey";
  import "../app.css";
  import "jazz-tools/inspector/register-custom-element";
  import { JazzAccount } from "$lib/schema";

  let { children } = $props();
</script>

<svelte:head>
  <title>Reson</title>
</svelte:head>

<JazzSvelteProvider
  sync={{
    peer: `wss://cloud.jazz.tools/?key=${apiKey}`,
    when: "always",
  }}
  AccountSchema={JazzAccount}
>
  <jazz-inspector></jazz-inspector>
  <main class="max-w-2xl mx-auto px-3 mt-16 flex flex-col gap-8">
    {@render children?.()}
  </main>
</JazzSvelteProvider>

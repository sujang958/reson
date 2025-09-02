<script lang="ts">
  import { JazzAccount, ListeningParty } from "$lib/schema";
  import { AccountCoState, CoState } from "jazz-tools/svelte";
  import type { PageProps } from "../../$types";
  import { page } from "$app/state";
  import { onMount } from "svelte";

  onMount(() => {
    console.log();
  });

  const account = new AccountCoState(JazzAccount, {
    resolve: {
      profile: true,
      root: true,
    },
  });
  const me = $derived(account.current);
  const party = new CoState(ListeningParty, page.params.id);
</script>

<h1>hi</h1>

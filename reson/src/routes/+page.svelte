<script lang="ts">
  import { browser } from "$app/environment";
  import { JazzAccount } from "$lib/schema";
  import { getAuthState } from "$lib/utils";
  import { AccountCoState } from "jazz-tools/svelte";
  import { onMount } from "svelte";

  console.log("server", browser);
  const account = new AccountCoState(JazzAccount, {
    resolve: {
      profile: true,
      root: true,
    },
  });
  const me = $derived(account.current);

  onMount(async () => {
    console.log(account);
    if (!me) {
    }
  });

  $effect(() => {
    console.log(me, me?.profile.nickname);
  });
</script>

<button>create a room</button>

<p>{JSON.stringify(getAuthState())}</p>

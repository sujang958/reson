<script lang="ts">
  import { goto } from "$app/navigation";
  import { JazzAccount, ListeningParty } from "$lib/schema";
  import { redirect } from "@sveltejs/kit";
  import { Group } from "jazz-tools";
  import { AccountCoState } from "jazz-tools/svelte";
  import { onMount } from "svelte";

  const account = new AccountCoState(JazzAccount, {
    resolve: {
      profile: true,
      root: true,
    },
  });
  const me = $derived(account.current);

  const createRoom = () => {
    console.log(me)
    if (!me) return redirect(303, "/");

    const group = Group.create({ owner: me });
    const party = ListeningParty.create({ title: "asdf", playlist: [] }, group);

    goto(`/room/${party.id}`);
  };

  onMount(() => {
    createRoom();
  });
</script>

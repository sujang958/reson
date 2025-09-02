/**
 * Learn about schemas here:
 * https://jazz.tools/docs/svelte/schemas/covalues
 */

import { co, z } from "jazz-tools";

/** The account profile is an app-specific per-user public `CoMap`
 *  where you can store top-level objects for that user */
export const JazzProfile = co.profile({
  nickname: z.string(),
});

/** The account root is an app-specific per-user private `CoMap`
 *  where you can store top-level objects for that user */
export const AccountRoot = co.map({ hi: z.string() });

export const JazzAccount = co
  .account({
    profile: JazzProfile,
    root: AccountRoot,
  })
  .withMigration(async (account) => {
    /** The account migration is run on account creation and on every log-in.
     */
    if (account.root === undefined) account.root = AccountRoot.create({ hi: ":3" });
  });

export const ListeningParty = co.map({
  title: z.string(),
  playlist: co.list(z.string()),
});

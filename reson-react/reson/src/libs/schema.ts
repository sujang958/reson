/**
 * Learn about schemas here:
 * https://jazz.tools/docs/react/schemas/covalues
 */

import { Group, co, z } from "jazz-tools"

/** The account profile is an app-specific per-user public `CoMap`
 *  where you can store top-level objects for that user */
export const JazzProfile = co.profile({
  nickname: z.string().max(64),
})

/** The account root is an app-specific per-user private `CoMap`
 *  where you can store top-level objects for that user */
export const AccountRoot = co.map({
  hi: z.string(),
})

export const JazzAccount = co
  .account({
    profile: JazzProfile,
    root: AccountRoot,
  })
  .withMigration(async (account) => {
    /** The account migration is run on account creation and on every log-in.
     *  You can use it to set up the account root and any other initial CoValues you need.
     */
    if (!account.$jazz.has("root")) {
      account.$jazz.set("root", {
        hi: "hello :3",
      })
    }

    if (!account.$jazz.has("profile")) {
      const group = Group.create()
      group.addMember("everyone", "reader") // The profile info is visible to everyone

      account.$jazz.set(
        "profile",
        JazzProfile.create(
          {
            name: "Anonymous user",
            nickname: "MellowOrange443",
          },
          group
        )
      )
    }
  })

import { AccountCoState } from "jazz-tools/svelte";
import { JazzAccount } from "./schema";

export const getAuthState = () => {
  const account = new AccountCoState(JazzAccount, {
    resolve: {
      profile: true,
      root: true,
    },
  });

  const isGuest = account.agent._type !== "Account";
  const isAnonymous = account.agent._type === "Account" && !account.isAuthenticated;

  return {
    isGuest,
    isAnonymous,
    isAuthenticated: account.isAuthenticated,
  };
};

import { TolgeeProvider, TolgeeInstance } from "@tolgee/react";

import { Todos } from "./Todos";
import { TranslationMethods } from "./TranslationMethods";

export const App = ({ tolgee }: { tolgee: TolgeeInstance }) => {
  const currentRoute = window.location.pathname;

  return (
    <TolgeeProvider tolgee={tolgee}>
      {currentRoute === "/translation-methods" ? (
        <TranslationMethods />
      ) : (
        <Todos />
      )}
    </TolgeeProvider>
  );
};

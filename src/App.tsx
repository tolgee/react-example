import { Todos } from "./Todos";

import { Tolgee, DevTools, FormatSimple, TolgeeProvider } from "@tolgee/react";

const tolgee = Tolgee().use(DevTools()).use(FormatSimple()).init({
  language: "en",

  // for development
  apiUrl: process.env.REACT_APP_TOLGEE_API_URL,
  apiKey: process.env.REACT_APP_TOLGEE_API_KEY,
});

export const App = () => {
  return (
    <TolgeeProvider tolgee={tolgee}>
      <Todos />
    </TolgeeProvider>
  );
};

import React from "react";
import { useTolgee } from "@tolgee/react";

export const LangSelector: React.FC = () => {
  const tolgee = useTolgee(["language"]);

  return (
    <select
      className="lang-selector"
      value={tolgee.getLanguage()}
      onChange={(e) => tolgee.changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="cs">Česky</option>
      <option value="de">Deutsch</option>
    </select>
  );
};

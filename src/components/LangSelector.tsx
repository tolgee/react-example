import React from "react";
import { useTolgee } from "@tolgee/react";

export const LangSelector: React.FC = () => {
  return (
    <select className="lang-selector" value="en">
      <option value="en">English</option>
      <option value="cs">Česky</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
    </select>
  );
};

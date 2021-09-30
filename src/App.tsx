import React from "react";
import "./App.css";
import { TolgeeProvider } from "@tolgee/react";
import { UI } from "@tolgee/ui";
import { Page } from "./Page";

const App = () => {
  return (
    <TolgeeProvider
      filesUrlPrefix="i18n/"
      apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
      apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
      ui={process.env.REACT_APP_TOLGEE_API_KEY ? UI : undefined}
      availableLanguages={["en", "cs"]}
      preloadFallback={true}
      loadingFallback={
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
        </div>
      }
    >
      <div
        style={{
          width: "800px",
          margin: "0 auto 0 auto",
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <img
            src="favicon.svg"
            alt="Logo"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </div>

        <h1 style={{ marginBottom: "50px" }}>React with Tolgee Example App</h1>
        <Page />
      </div>
    </TolgeeProvider>
  );
};

export default App;

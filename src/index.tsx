import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';
/* eslint-disable @typescript-eslint/no-var-requires */
import { Tolgee, BackendFetch, DevTools } from '@tolgee/react';
import { FormatIcu } from '@tolgee/format-icu';

const createShadowRoot = (root: Element): HTMLDivElement => {
  const shadowRoot = root.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = `
    #app-shadow {
      all: initial;
    }
  `;
  shadowRoot.appendChild(style);
  const appContainer = document.createElement('div');
  appContainer.id = `app-shadow`;
  shadowRoot.appendChild(appContainer);
  return appContainer;
}

const container = createShadowRoot(document.getElementById('root')!);
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatIcu())
  .use(BackendFetch())
  .init({
    availableLanguages: ['en', 'cs', 'fr', 'de'],
    apiUrl: process.env.REACT_APP_TOLGEE_API_URL,
    apiKey: process.env.REACT_APP_TOLGEE_API_KEY,
    projectId: process.env.REACT_APP_TOLGEE_PROJECT_ID,
    fallbackLanguage: 'en',
    defaultLanguage: 'en',
    observerOptions: {
      targetElement: container
    }
  });

root.render(
  <React.StrictMode>
    <App tolgee={tolgee} />
  </React.StrictMode>
);

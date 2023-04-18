import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);

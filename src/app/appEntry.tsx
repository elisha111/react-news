import { ThemeProvider } from "@/app/providers/ThemeProvider.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import BaseLayout from "@/app/layouts/BaseLayout";
import "@/shared/styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);

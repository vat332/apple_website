import * as Sentry from "@sentry/react";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

Sentry.init({
  dsn: "https://78dcd5f8c003e7dfe6aed8f49c147015@o4508967582367744.ingest.de.sentry.io/4509309897932880",

  sendDefaultPii: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#006fe3",
            borderRadius: 8,

            colorBgBase: "#0C0950",
            colorBorder: "transparent",
            colorText: "white",
          },
          components: {
            Menu: {
              groupTitleColor: "white",
            },
            Layout: {
              bodyBg: "black",
              borderRadius: 16,
            },
            Card: {
              colorBgContainer: "#1d1d1d",
              colorBorderSecondary: "#3C3D37",
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);

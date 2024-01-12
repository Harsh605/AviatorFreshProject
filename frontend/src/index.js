import { createRoot } from "react-dom/client";
import React from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BetProvider } from "./ContextAndHooks/BetContext";
import { AuthProvider } from "./ContextAndHooks/AuthContext";
import { SettingProvider } from "./ContextAndHooks/SettingContext";
import { SocketProvider } from "./ContextAndHooks/SocketContext";
import Modal from "react-modal";
import App from "./App";
import "./other.css";
import "./styles.css";
// Set the app element for react-modal
Modal.setAppElement("#root");
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SettingProvider>
        <BetProvider>
          <AuthProvider>
            <SocketProvider>
              <App />
            </SocketProvider>
          </AuthProvider>
        </BetProvider>
      </SettingProvider>
    </QueryClientProvider>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop={true}
      closeOnClick
      draggable
      pauseOnHover
      theme="colored"
      transition={Flip}
    />
  </>
);

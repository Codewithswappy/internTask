"use client";
import { ToastProvider, ToastViewport } from "flux-toast";
import "flux-toast/styles";

export function Providers({ children }) {
  return (
    <ToastProvider pattern="dotted">
      {children}
      <ToastViewport position="bottom-right" />
    </ToastProvider>
  );
}
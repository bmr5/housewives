import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DialogProvider } from "../providers/DialogProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DialogProvider>
      <Component {...pageProps} />
    </DialogProvider>
  );
}

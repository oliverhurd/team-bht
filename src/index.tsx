import './index.css';
import React from "react";
import { render } from "react-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { App } from "./App";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>,
  document.getElementById("root")
);

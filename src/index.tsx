/// <reference types="vite/client" />
import "./index.css";
import { render } from "react-dom";
import { App } from "./App";
import { ClerkProvider } from '@clerk/clerk-react';

// Vite only exposes environment variables prefixed with VITE_, but we also
// support the NEXT_PUBLIC_* name in case someone copied configuration from
// a Next.js example or the dashboard snippet.
const clerkPublishableKey =
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ||
  import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

render(
	<ClerkProvider publishableKey={clerkPublishableKey}>
		<App />
	</ClerkProvider>,
	document.getElementById("root")
);
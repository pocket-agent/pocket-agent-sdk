/** Workspace connection profiles — config/user-setup.yaml */

import type { AuthMode } from "./auth.js";

export const CONNECTION_PROFILES = [
  "all-local",
  "hosted-ui-home-agent",
  "cloud-only",
] as const;

export type ConnectionProfile = (typeof CONNECTION_PROFILES)[number];

/** Web UI may show "custom" when VITE_CONNECTION_PROFILE is unset or invalid. */
export type WebConnectionProfile = ConnectionProfile | "custom";

export type ModuleMode = "local" | "remote";

export type LlmRouting = "pocket_node" | "cloud_relay";

export type UiPrimary = "web" | "desktop";

export interface ModuleEndpoint {
  mode?: ModuleMode;
  url?: string;
  deploy?: string;
  stack?: string;
  command?: string;
}

export interface UserSetup {
  profile?: ConnectionProfile;
  web?: ModuleEndpoint;
  api?: ModuleEndpoint;
  agent?: ModuleEndpoint;
  routing?: { llm?: LlmRouting };
  tunnel?: { enabled?: boolean; public_url?: string; provider?: string };
  google_oauth?: { client_id?: string };
  auth?: { mode?: AuthMode };
  ui?: { primary?: UiPrimary };
}

export type { AuthMode } from "./auth.js";

export function isConnectionProfile(value: string): value is ConnectionProfile {
  return (CONNECTION_PROFILES as readonly string[]).includes(value);
}

export function connectionProfileLabel(profile: WebConnectionProfile): string {
  switch (profile) {
    case "all-local":
      return "Local";
    case "hosted-ui-home-agent":
      return "Hosted + home agent";
    case "cloud-only":
      return "Cloud";
    default:
      return "Custom";
  }
}

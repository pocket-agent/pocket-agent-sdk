/** Local vs Google auth — aligned with config/user-setup.yaml `auth.mode`. */

export const AUTH_MODES = ["none", "google"] as const;

export type AuthMode = (typeof AUTH_MODES)[number];

export const LOCAL_DEV_USER_ID = "local-dev";

export const LOCAL_DEV_USER = {
  id: LOCAL_DEV_USER_ID,
  email: "local@pocket-agent.dev",
  name: "Local User",
} as const;

export type ConnectionProfile = import("./connection.js").ConnectionProfile;
export type ModuleMode = import("./connection.js").ModuleMode;

/** Infer auth mode from workspace profile (all-local + local web/api → no Google). */
export function resolveAuthMode(
  profile: string | undefined,
  webMode: string | undefined = "local",
  apiMode: string | undefined = "local"
): AuthMode {
  if (profile === "all-local" && webMode !== "remote" && apiMode !== "remote") {
    return "none";
  }
  return "google";
}

export function isAuthMode(value: string): value is AuthMode {
  return (AUTH_MODES as readonly string[]).includes(value);
}

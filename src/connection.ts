/** Workspace connection profiles — config/user-setup.yaml */

export type ConnectionProfile =
  | "all-local"
  | "hosted-ui-home-agent"
  | "cloud-only";

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
  ui?: { primary?: UiPrimary };
}

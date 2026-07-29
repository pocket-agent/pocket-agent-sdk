/** Canonical API envelope — API worker (Hono) responses. */

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorBody {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

export interface ApiErrorResponse {
  success: false;
  error: ApiErrorBody;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

/** Pocket Node uses a simpler error shape on some routes. */
export interface PocketNodeErrorResponse {
  success: false;
  message: string;
}

export interface HealthData {
  status: "ok";
  timestamp: string;
  service: string;
}

export interface PocketNodeStatusData {
  agent: string;
  llm_providers: string[];
  memory_count: number;
  knowledge_chunks: number;
  embeddings: boolean;
  nas_root: string;
  telegram_configured: boolean;
}

export interface ApiWorkerStatusData {
  service: string;
  environment: string;
  pocket_node_url: string;
  pocket_node_online: boolean;
  pocket_node_error: string | null;
  pocket_node: Record<string, unknown> | null;
  timestamp: string;
}

export const SERVICE_IDS = {
  pocketNode: "pocket-agent",
  apiWorker: "pocket-agent-api",
} as const;

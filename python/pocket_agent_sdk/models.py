"""Pydantic models aligned with pocket-agent-sdk JSON schemas."""

from __future__ import annotations

from typing import Any, Literal

from pydantic import BaseModel

ConnectionProfile = Literal["all-local", "hosted-ui-home-agent", "cloud-only"]
ModuleMode = Literal["local", "remote"]
LlmRouting = Literal["pocket_node", "cloud_relay"]
UiPrimary = Literal["web", "desktop"]


class ApiSuccessResponse(BaseModel):
    success: Literal[True] = True
    data: dict[str, Any]


class ApiErrorBody(BaseModel):
    message: str
    code: str | None = None
    details: dict[str, Any] | None = None


class ApiErrorResponse(BaseModel):
    success: Literal[False] = False
    error: ApiErrorBody


class PocketNodeErrorResponse(BaseModel):
    success: Literal[False] = False
    message: str


class HealthData(BaseModel):
    status: Literal["ok"] = "ok"
    timestamp: str
    service: str


class PocketNodeStatusData(BaseModel):
    agent: str
    llm_providers: list[str]
    memory_count: int
    knowledge_chunks: int
    embeddings: bool
    nas_root: str
    telegram_configured: bool


class ApiWorkerStatusData(BaseModel):
    service: str
    environment: str
    pocket_node_url: str
    pocket_node_online: bool
    pocket_node_error: str | None
    pocket_node: dict[str, Any] | None
    timestamp: str


class ModuleEndpoint(BaseModel):
    mode: ModuleMode | None = None
    url: str | None = None
    deploy: str | None = None
    stack: str | None = None
    command: str | None = None


class UserSetup(BaseModel):
    profile: ConnectionProfile | None = None
    web: ModuleEndpoint | None = None
    api: ModuleEndpoint | None = None
    agent: ModuleEndpoint | None = None
    routing: dict[str, LlmRouting] | None = None
    tunnel: dict[str, Any] | None = None
    google_oauth: dict[str, str] | None = None
    ui: dict[str, UiPrimary] | None = None


class HealthEnvelope(BaseModel):
    success: Literal[True] = True
    data: HealthData


class PocketNodeStatusEnvelope(BaseModel):
    success: Literal[True] = True
    data: PocketNodeStatusData


class ApiWorkerStatusEnvelope(BaseModel):
    success: Literal[True] = True
    data: ApiWorkerStatusData

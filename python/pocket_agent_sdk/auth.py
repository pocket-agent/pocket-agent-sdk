"""Auth mode constants — aligned with pocket-agent-sdk."""

from __future__ import annotations

AUTH_MODES: tuple[str, ...] = ("none", "google")

LOCAL_DEV_USER_ID = "local-dev"
LOCAL_DEV_USER_EMAIL = "local@pocket-agent.dev"
LOCAL_DEV_USER_NAME = "Local User"


def resolve_auth_mode(
    profile: str | None,
    web_mode: str | None = "local",
    api_mode: str | None = "local",
) -> str:
    if profile == "all-local" and web_mode != "remote" and api_mode != "remote":
        return "none"
    return "google"


def local_dev_claims() -> dict[str, str]:
    return {
        "sub": LOCAL_DEV_USER_ID,
        "email": LOCAL_DEV_USER_EMAIL,
        "name": LOCAL_DEV_USER_NAME,
    }

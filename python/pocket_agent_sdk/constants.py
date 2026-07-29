"""Shared constants — mirror @pocket-agent/sdk."""

CONNECTION_PROFILES: tuple[str, ...] = (
    "all-local",
    "hosted-ui-home-agent",
    "cloud-only",
)

SERVICE_IDS = {
    "pocket_node": "pocket-agent",
    "api_worker": "pocket-agent-api",
}

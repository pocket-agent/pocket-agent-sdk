# Instructions — pocket-agent-sdk

Guide for maintainers and coding agents working on **pocket-agent/pocket-agent-sdk**.

**Global rules:** [../INSTRUCTIONS.md](../INSTRUCTIONS.md) (org workspace).

## Scope

Shared types and schemas only — no runtime servers or UI.

## Consumption (workspace)

| Repo | Import |
|------|--------|
| `pocket-agent-web-app` | `pocket-agent-sdk` |
| `pocket-agent-api-app` | `pocket-agent-sdk` |
| `pocket-agent-cli` | `pocket-agent-sdk` |
| `pocket-agent-wizard` | `pocket-agent-sdk` |
| `pocket-agent` | `pip install -e python/` → `pocket_agent_sdk` |

Build TypeScript before other installs: `npm run check`.

## When to change this repo

- API response shapes change in `pocket-agent-api-app` or `pocket-agent` HTTP routes
- `config/user-setup.yaml` / connection profile fields change
- New cross-service contracts (chat payloads, monitor events, etc.)

## Workflow

1. Update JSON schema in `schemas/`
2. Mirror in `src/` (TypeScript) and `python/pocket_agent_sdk/models.py`
3. Bump version in `package.json` and `python/pyproject.toml` together
4. Update consuming repos to the new SDK version

## Source layout

```
src/           # pocket-agent-sdk (tsup → dist/)
schemas/       # JSON Schema
python/        # pocket_agent_sdk (pip install -e python)
```

## Do not add here

- Runtime logic, HTTP servers, or UI
- Secrets or environment-specific config

## CHANGELOG workflow

Use `feat:`, `fix:`, `docs:` prefixes. Group changes per release — see [Keep a Changelog](https://keepachangelog.com/).

---

## Repository documents

[README](README.md) | **INSTRUCTIONS** | [CHANGELOG](CHANGELOG.md) | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)

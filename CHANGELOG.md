# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-07-29

### Added

- **TypeScript package** `@pocket-agent/sdk` — shared types for all Pocket Agent services
- **JSON schemas** — API envelopes, health/status payloads, `user-setup.yaml` shape
- **Python package** `pocket_agent_sdk` — Pydantic models and constants (`CONNECTION_PROFILES`, `SERVICE_IDS`)
- **Connection types** — `ConnectionProfile`, `UserSetup`, `ModuleMode`, `UiPrimary`
- **API contracts** — `ApiResponse`, `HealthData`, `PocketNodeStatusData`, `ApiWorkerStatusData`
- **Build tooling** — tsup (CJS + ESM), vitest, eslint

---

## Repository documents

[README](README.md) | [INSTRUCTIONS](INSTRUCTIONS.md) | **CHANGELOG** | [CONTRIBUTING](CONTRIBUTING.md) | [SECURITY](SECURITY.md) | [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)

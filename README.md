# @pocket-agent/sdk

[![npm version](https://badge.fury.io/js/@pocket-agent/sdk.svg)](https://badge.fury.io/js/@pocket-agent/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI/CD](https://github.com/pocket-agent/pocket-agent-sdk/actions/workflows/publish.yml/badge.svg)](https://github.com/pocket-agent/pocket-agent-sdk/actions/workflows/publish.yml)

Shared **TypeScript types**, **JSON schemas**, and **Python Pydantic models** for Pocket Agent services.

## Install

```bash
npm install @pocket-agent/sdk
```

Workspace sibling:

```json
"dependencies": {
  "@pocket-agent/sdk": "file:../pocket-agent-sdk"
}
```

## Contents

| Path | Purpose |
|------|---------|
| `src/` | TypeScript types (`@pocket-agent/sdk`) |
| `schemas/` | JSON Schema contracts (health, status, user-setup) |
| `python/` | `pocket_agent_sdk` (`pip install -e python`) |

## Usage

```typescript
import type { ApiResponse, PocketNodeStatusData, UserSetup } from '@pocket-agent/sdk';
```

```bash
cd python && pip install -e .
```

```python
from pocket_agent_sdk import PocketNodeStatusData, UserSetup
```

## Schemas

- `api-success-response.json` / `api-error-response.json` — API worker envelope
- `pocket-node-health.json` / `pocket-node-status.json` — Pocket Node
- `api-worker-status.json` — combined worker status
- `user-setup.json` — `config/user-setup.yaml` shape

## Workspace

In the org folder this repo lives at `pocket-agent-sdk/` next to `pocket-agent/`, `pocket-agent-web-app/`, etc. See [../docs/WORKSPACE_LAYOUT.md](../docs/WORKSPACE_LAYOUT.md).

## License

MIT — see [LICENSE](LICENSE).

Maintained by [pocket-agent](https://github.com/pocket-agent).

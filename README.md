# @pocket-agent/sdk

Shared **TypeScript types**, **JSON schemas**, and **Python models** for the open-source **[Pocket Agent](https://github.com/pocket-agent)** ecosystem · **v0.1.0**

Single source of truth — all services import from here; do not duplicate contracts locally.

## What's included (0.1.0)

| Layer | Contents |
|-------|----------|
| TypeScript | `ConnectionProfile`, `UserSetup`, `ApiResponse`, `SERVICE_IDS`, helpers |
| JSON Schema | API envelopes, health/status, `user-setup.yaml` |
| Python | `pocket_agent_sdk` — Pydantic models, `CONNECTION_PROFILES` |

## Install

```bash
npm install @pocket-agent/sdk
```

Workspace sibling:

```json
"dependencies": { "@pocket-agent/sdk": "file:../pocket-agent-sdk" }
```

```bash
cd python && pip install -e .
```

## Usage

```typescript
import type { ApiResponse, UserSetup } from '@pocket-agent/sdk';
import { SERVICE_IDS, CONNECTION_PROFILES } from '@pocket-agent/sdk';
```

```python
from pocket_agent_sdk import CONNECTION_PROFILES, SERVICE_IDS, UserSetup
```

## Build

```bash
npm install && npm run check
```

Spec: [../specs/features/10-shared-contracts.md](../specs/features/10-shared-contracts.md)

## Docs

[INSTRUCTIONS.md](INSTRUCTIONS.md) · [CHANGELOG.md](CHANGELOG.md)

Maintained by [pocket-agent](https://github.com/pocket-agent).

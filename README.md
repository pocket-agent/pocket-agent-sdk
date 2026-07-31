<img src=".github/pocket-agent-image.png" width="200" alt="Pocket Agent" align="left"/>

<div>
<h3>pocket-agent-sdk</h3>
<p>
Shared <strong>TypeScript types</strong>, <strong>JSON schemas</strong>, and <strong>Python models</strong> for the Pocket Agent ecosystem. Single source of truth — import here; do not duplicate contracts in app repos.
</p>
<a href="https://www.npmjs.com/package/pocket-agent-sdk"><img src="https://img.shields.io/badge/npm-pocket-agent-sdk-007ec6?style=flat-square" width="175" alt="npm package"/></a>
</div>

<br/><br/>

<div align="center">

[![Release](https://img.shields.io/github/v/release/pocket-agent/pocket-agent-sdk)](https://github.com/pocket-agent/pocket-agent-sdk/releases)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/pocket-agent/pocket-agent-sdk/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/pocket-agent-sdk)](https://www.npmjs.com/package/pocket-agent-sdk)
[![CI](https://github.com/pocket-agent/pocket-agent-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/pocket-agent/pocket-agent-sdk/actions/workflows/ci.yml)

<br/>
<br/>

<img src=".github/screenshot.png" width="824" alt="Pocket Agent" style="border-radius: 5px;"/><br/>

</div>

<hr>

## Features

| Layer | Contents |
|-------|----------|
| TypeScript | `ConnectionProfile`, `UserSetup`, `ApiResponse`, `SERVICE_IDS`, auth helpers |
| JSON Schema | API envelopes, health/status, `user-setup.yaml` |
| Python | `pocket_agent_sdk` — Pydantic models, `CONNECTION_PROFILES` |

## Requirements

- Node 20+ for TypeScript build
- Python 3.12+ for `pip install -e python`

## Install

```bash
npm install pocket-agent-sdk
```

Workspace sibling:

```json
"dependencies": { "pocket-agent-sdk": "file:../pocket-agent-sdk" }
```

```bash
cd python && pip install -e .
```

## Quick start

```typescript
import type { ApiResponse, UserSetup } from 'pocket-agent-sdk';
import { SERVICE_IDS, CONNECTION_PROFILES } from 'pocket-agent-sdk';
```

```python
from pocket_agent_sdk import CONNECTION_PROFILES, SERVICE_IDS, UserSetup
```

## Development

```bash
git clone https://github.com/pocket-agent/pocket-agent-sdk.git
cd pocket-agent-sdk
npm install && npm run check
```

Follow [INSTRUCTIONS.md](INSTRUCTIONS.md). In the org workspace, contracts are also described in `specs/features/10-shared-contracts.md` at the workspace root.

## Documentation

| Doc | Description |
|-----|-------------|
| [INSTRUCTIONS.md](INSTRUCTIONS.md) | SDK change process |
| [CHANGELOG.md](CHANGELOG.md) | Release history |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Contributing |

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Security

To report a vulnerability, see [SECURITY.md](SECURITY.md).

## License

pocket-agent-sdk is released under the [MIT License](LICENSE).

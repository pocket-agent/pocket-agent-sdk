// Example: using pocket-agent-sdk types
import {
  CONNECTION_PROFILES,
  SERVICE_IDS,
  connectionProfileLabel,
  isConnectionProfile,
  type ApiResponse,
  type UserSetup,
} from 'pocket-agent-sdk';

const setup: UserSetup = {
  profile: 'all-local',
  web: { mode: 'local', url: 'http://localhost:5173' },
  api: { mode: 'local', url: 'http://localhost:8788' },
  agent: { mode: 'local', url: 'http://127.0.0.1:8787' },
};

console.log('Profiles:', CONNECTION_PROFILES);
console.log('Services:', SERVICE_IDS);
console.log('Label:', connectionProfileLabel(setup.profile!));
console.log('Valid profile:', isConnectionProfile('all-local'));

type HealthResponse = ApiResponse<{ status: string; service: string }>;

const health: HealthResponse = {
  success: true,
  data: { status: 'ok', service: SERVICE_IDS.apiWorker },
};

console.log('Health:', health);

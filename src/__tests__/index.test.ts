import { describe, expect, it } from 'vitest';
import {
  CONNECTION_PROFILES,
  SERVICE_IDS,
  connectionProfileLabel,
  isConnectionProfile,
} from '../index.js';

describe('@pocket-agent/sdk', () => {
  it('exports canonical service identifiers', () => {
    expect(SERVICE_IDS.pocketNode).toBe('pocket-agent');
    expect(SERVICE_IDS.apiWorker).toBe('pocket-agent-api');
  });

  it('validates connection profiles', () => {
    expect(CONNECTION_PROFILES).toHaveLength(3);
    expect(isConnectionProfile('all-local')).toBe(true);
    expect(isConnectionProfile('custom')).toBe(false);
  });

  it('labels connection profiles for UI', () => {
    expect(connectionProfileLabel('all-local')).toBe('Local');
    expect(connectionProfileLabel('custom')).toBe('Custom');
  });
});

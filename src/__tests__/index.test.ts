import { describe, expect, it } from 'vitest';
import { SERVICE_IDS } from '../index.js';

describe('@pocket-agent/sdk', () => {
  it('exports canonical service identifiers', () => {
    expect(SERVICE_IDS.pocketNode).toBe('pocket-agent');
    expect(SERVICE_IDS.apiWorker).toBe('pocket-agent-api');
  });
});

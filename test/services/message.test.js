const assert = require('assert');
const app = require('../../lib/app');

describe('\'message\' service', () => {
  it('registered the service', () => {
    const service = app.service('message');

    assert.ok(service, 'Registered the service');
  });
});

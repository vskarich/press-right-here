const assert = require('assert');
const app = require('../../lib/app');

describe('\'lendr\' service', () => {
  it('registered the service', () => {
    const service = app.service('lendr');

    assert.ok(service, 'Registered the service');
  });
});

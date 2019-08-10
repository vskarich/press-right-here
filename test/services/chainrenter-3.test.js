const app = require('../../lib/app');

describe('\'chainrenter-3\' service', () => {
  it('registered the service', () => {
    const service = app.service('chainrenter-3');
    expect(service).toBeTruthy();
  });
});

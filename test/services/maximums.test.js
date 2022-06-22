const assert = require('assert')
const app = require('../../src/app')

describe('\'maximums\' service', () => {
  it('registered the service', () => {
    const service = app.service('maximums')

    assert.ok(service, 'Registered the service')
  })
})

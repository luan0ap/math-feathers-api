const assert = require('assert')
const app = require('../../src/app')

describe('\'percentiles\' service', () => {
  it('registered the service', () => {
    const service = app.service('percentiles')

    assert.ok(service, 'Registered the service')
  })
})

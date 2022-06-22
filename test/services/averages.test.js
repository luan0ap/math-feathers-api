const assert = require('assert')
const app = require('../../src/app')

describe('\'averages\' service', () => {
  it('registered the service', () => {
    const service = app.service('averages')

    assert.ok(service, 'Registered the service')
  })
})

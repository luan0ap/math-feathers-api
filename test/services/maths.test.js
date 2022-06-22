const assert = require('assert')
const app = require('../../src/app')

describe('\'maths\' service', () => {
  it('registered the service', () => {
    const service = app.service('maths')

    assert.ok(service, 'Registered the service')
  })
})

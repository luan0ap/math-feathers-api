const assert = require('assert')
const app = require('../../src/app')

describe('\'medians\' service', () => {
  it('registered the service', () => {
    const service = app.service('medians')

    assert.ok(service, 'Registered the service')
  })
})

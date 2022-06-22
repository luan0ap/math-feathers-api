const { disallow, validate } = require('feathers-hooks-common')
const { validatorListOfNumbersOnly } = require('hooks')
const validatorPercetileSchema = (data) => {
  return null
}

module.exports = {
  before: {
    all: [],
    find: [
      disallow()
    ],
    get: [
      disallow()
    ],
    create: [
      validatorListOfNumbersOnly(),
      validate(validatorPercetileSchema)
    ],
    update: [
      disallow()
    ],
    patch: [
      disallow()
    ],
    remove: [
      disallow()
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}

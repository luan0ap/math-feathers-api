const { disallow, validate } = require('feathers-hooks-common')
const { validatorListOfNumbersOnly } = require('hooks')
const { isNumber } = require('utils')

const validatorPercetileSchema = (data) => {
  if (!isNumber(data.percent)) {
    return {
      percent: 'must be a number'
    }
  }

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

const { validate } = require('feathers-hooks-common')
const { isArrayOfNumbers } = require('utils')

const validatorListOfNumbersOnly = () => {
  const validator = (data) => {
    const isValidObject = data && Object.getPrototypeOf(data).constructor.name === 'Object'

    if (!isValidObject) {
      return 'must be a valid object'
    }

    if (!isArrayOfNumbers(data.list)) {
      return {
        list: 'must be an array of numbers only'
      }
    }

    return null
  }

  return validate(validator)
}

module.exports = {
  validatorListOfNumbersOnly
}

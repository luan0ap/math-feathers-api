const { validate } = require('feathers-hooks-common')
const { isArrayOfNumbers } = require('utils')

const validatorListOfNumbersOnly = () => {
  const validator = ({ list } = {}) => {
    if (!isArrayOfNumbers(list)) {
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

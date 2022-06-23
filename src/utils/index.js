/**
 * Sum all numbers
 * @param {Array} nums - Expected array of numbers
 * @returns number
 */
const sumAllNumbers = (nums = []) => nums.reduce((total, n) => total + n, 0)

/**
 * Validate if {n} is a number
 * @param {*} n
 * @returns boolean
 */
const isNumber = (n) => typeof n === 'number' && !Number.isNaN(n)

/**
 * Validate if every item of an array is a number
 * @param {Array} data
 * @returns boolean
 */
const isArrayOfNumbers = (data) => Array.isArray(data) && data.every(isNumber)

module.exports = {
  sumAllNumbers,
  isArrayOfNumbers,
  isNumber
}

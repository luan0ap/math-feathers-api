const sumAllNumbers = (nums = []) => nums.reduce((total, n) => total + n, 0)

const isArrayOfNumbers = (data) =>
  Array.isArray(data) && data.every(i => typeof i === 'number' && !Number.isNaN(i))

module.exports = {
  sumAllNumbers,
  isArrayOfNumbers
}

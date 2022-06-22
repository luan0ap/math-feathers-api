const averages = require('./averages/averages.service.js')
const maximums = require('./maximums/maximums.service.js')
const minimums = require('./minimums/minimums.service.js')
const medians = require('./medians/medians.service.js')
const percentiles = require('./percentiles/percentiles.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(averages)
  app.configure(maximums)
  app.configure(minimums)
  app.configure(medians)
  app.configure(percentiles)
}

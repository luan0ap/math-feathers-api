// Initializes the `percentiles` service on path `/percentiles`
const { Percentiles } = require('./percentiles.class')
const hooks = require('./percentiles.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/percentiles', new Percentiles(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('percentiles')

  service.hooks(hooks)
}

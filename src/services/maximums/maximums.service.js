// Initializes the `maximums` service on path `/maximums`
const { Maximums } = require('./maximums.class')
const hooks = require('./maximums.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/maximums', new Maximums(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('maximums')

  service.hooks(hooks)
}

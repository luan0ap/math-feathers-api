// Initializes the `minimums` service on path `/minimums`
const { Minimums } = require('./minimums.class')
const hooks = require('./minimums.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/minimums', new Minimums(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('minimums')

  service.hooks(hooks)
}

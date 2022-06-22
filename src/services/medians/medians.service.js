// Initializes the `medians` service on path `/medians`
const { Medians } = require('./medians.class')
const hooks = require('./medians.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/medians', new Medians(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('medians')

  service.hooks(hooks)
}

// Initializes the `averages` service on path `/averages`
const { Averages } = require('./averages.class')
const hooks = require('./averages.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/averages', new Averages(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('averages')

  service.hooks(hooks)
}

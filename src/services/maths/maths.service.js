// Initializes the `maths` service on path `/maths`
const { Maths, Maximums, Minimums, Averages, Medians, Percentiles } = require('./classes')
const hooks = require('./maths.hooks')

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/maths', new Maths(options, app))
  app.use('/maths/maximums', new Maximums(options, app))
  app.use('/maths/minimums', new Minimums(options, app))
  app.use('/maths/averages', new Averages(options, app))
  app.use('/maths/medians', new Medians(options, app))
  app.use('/maths/percentiles', new Percentiles(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('maths')

  service.hooks(hooks)
}

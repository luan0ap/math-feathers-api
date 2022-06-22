const { NotImplemented } = require('@feathersjs/errors')

exports.Minimums = class Minimums {
  constructor (options) {
    this.options = options || {}
  }

  async create (data, params) {
    return Math.min(...data.list)
  }

  async find (params) {
    throw new NotImplemented()
  }

  async get (id, params) {
    throw new NotImplemented()
  }

  async update (id, data, params) {
    throw new NotImplemented()
  }

  async patch (id, data, params) {
    throw new NotImplemented()
  }

  async remove (id, params) {
    throw new NotImplemented()
  }
}

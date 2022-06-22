const { NotImplemented } = require('@feathersjs/errors')

exports.Maximums = class Maximums {
  constructor (options) {
    this.options = options || {}
  }

  async create (data, params) {
    return Math.max(...data.list)
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

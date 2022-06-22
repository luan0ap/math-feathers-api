const { NotImplemented } = require('@feathersjs/errors')

exports.Medians = class Medians {
  constructor (options) {
    this.options = options || {}
  }

  async create (data, params) {
    return data.list[Math.floor(data.list.length / 2)]
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

const { NotImplemented } = require('@feathersjs/errors')
const { sumAllNumbers } = require('utils')

exports.Averages = class Averages {
  constructor (options) {
    this.options = options || {}
  }

  async create (data, params) {
    return Number((sumAllNumbers(data.list) / data.list.length).toFixed(4))
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

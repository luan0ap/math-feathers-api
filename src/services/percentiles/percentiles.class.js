const { NotImplemented } = require('@feathersjs/errors')

exports.Percentiles = class Percentiles {
  constructor (options) {
    this.options = options || {}
  }

  async create (data, params) {
    function percentile ({ list, percent }) {
      const toPercent = percent / 100
      const index = Math.floor(toPercent * list.length)

      if (index >= list.length) {
        return list[list.length - 1]
      }

      return list[index]
    }

    return percentile(data)
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

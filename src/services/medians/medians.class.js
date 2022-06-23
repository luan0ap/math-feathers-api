const { NotImplemented } = require('@feathersjs/errors')

exports.Medians = class Medians {
  constructor (options) {
    this.options = options || {}
  }

  async create (data, params) {
    const sortAscList = data.list.sort((a, b) => a - b)
    const isListEven = sortAscList.length % 2 === 0
    const index = Math.floor(sortAscList.length / 2)

    if (isListEven) {
      const numberAbove = sortAscList[index]
      const numberBelow = sortAscList[index - 1]

      return Number(((numberAbove + numberBelow) / 2).toFixed(2))
    }

    return sortAscList[index]
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

/* eslint-disable no-unused-vars */
exports.Maths = class Maths {
  constructor (options) {
    this.options = options || {}
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return 0
    }

    return data
  }
}

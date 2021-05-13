class BaseResponse {
  constructor (resource, status, { queryTime }) {
    this.resource = resource
    this.queryTime = queryTime
    this.status = status
  }

  get postResponse () {
    return this.resource
  }

  get getAllResponse () {
    return {
      _total: this.resource.length,
      _queryTime: this.queryTime,
      records: this.resource
    }
  }

  get getOneResponse () {
    return this.resource
  }

  get patchResponse () {
    return this.resource
  }

  get deleteResponse () {
    return {
      success: true,
      deleted: this.resource
    }
  }

}

module.exports = BaseResponse

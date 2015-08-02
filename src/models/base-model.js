angular.module('angular-seed').factory('BaseModel', function (utils) {
  let BaseModel = (function () {

    function BaseModel (attrs) {
      this.attributes = attrs || {}
    }

    BaseModel.prototype.get = function (key) {
      return this.attributes[key]
    }

    BaseModel.prototype.set = function (key, val) {
      let attrs = undefined

      if (utils.isTrueObject(key)) {
        attrs = key
      }
      else {
        attrs = {}
        attrs[key] = val

        for (let aKey in attrs) {
          let aVal = attrs[aKey];
          this.attributes[aKey] = aVal;
        }

      }
    }

    return BaseModel
  })()

  return BaseModel
})

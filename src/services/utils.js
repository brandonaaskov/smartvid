angular.module('angular-seed').service('utils', function () {
  let isTrueObject = (obj) => {
    if (_.isUndefined(obj)) {
      return false
    }

    if (_.isObject(obj) && !_.isFunction(obj) && !_.isArray(obj) && !_.isElement(obj)) {
      return true
    }

    return false
  }

  let isValidNumber = (number) => {
    if (_(number).isNumber() && !_(number).isNaN()) {
      return true
    }

    return false
  }

  let makeNumber = function(text) {
    let possibleNumber = parseInt(text, 10)

    if (isValidNumber(possibleNumber)) {
      return possibleNumber
    }
    else {
      return text
    }
  }

  let findValue = (obj, propToFind) => {
    if (!_.isString(propToFind) || _.isEmpty(propToFind) || !obj) {
      throw new Error("The second argument supplied to findValue() should be a string of the property name that you're looking for.")
    }

    let foundValue = null

    _.find(obj, function(value, key) {
      if (String(key).toLowerCase() === String(propToFind).toLowerCase()) {
        foundValue = value
      }
      else if (isTrueObject(value) && !_.isElement(value)) {
        foundValue = findValue(value, propToFind)
      }
      if (foundValue) {
        return foundValue
      }
    })

    return foundValue
  }

  let findValues = (obj, arrOfValues) => {
    if (!_.isArray(arrOfValues)) {
      throw new Error("findValues() expects an array of strings for property names to find")
    }

    let foundValues = {}

    _.each(arrOfValues, function(propToFind) {
      return foundValues[propToFind] = findValue(this, propToFind)
    }, obj)

    return foundValues
  }

  let override = (startWith, overrideWith) => {
    let cleaned = {}

    if (!_.isObject(startWith || !_.isObject(overrideWith))) {
      throw new Error("Both arguments supplied to override() should be shallow objects.")
    }

    cleaned = _.defaults(startWith, overrideWith)

    angular.forEach(startWith, function(value, key) {
      return angular.forEach(overrideWith, function(overrideItemValue, overrideItemKey) {
        if (key === overrideItemKey) {
          return cleaned[key] = overrideItemValue
        }
      })
    })

    return cleaned
  }

  let getFilename = (key, dropExtension) => {
    let filename = _.last(key.split('/'))

    if (!dropExtension) {
      dropExtension = true
    }

    if (!dropExtension) {
      return filename
    }

    return _.first(filename.split('.'))
  }

  let createGuid = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }

    return (s4()) + (s4()) + "-" + (s4()) + "-" + (s4()) + "-" + (s4()) + "-" + (s4()) + (s4()) + (s4())
  }

  return {
    isTrueObject: isTrueObject,
    isValidNumber: isValidNumber,
    makeNumber: makeNumber,
    findValue: findValue,
    findValues: findValues,
    override: override,
    getFilename: getFilename,
    createGuid: createGuid
  }
})

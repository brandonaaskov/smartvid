angular.module('smartvid').factory('BaseCollection', function (BaseModel) {

  let BaseCollection = ( () => {
    BaseCollection.prototype.model = BaseModel

    let BaseCollection = (models) => {
      if (!models) {
        return
      }

      let isSingular = ! _(models).isArray()

      if (isSingular) {
        this.models = [models]
      }
      else {
        this.models = models
      }

      this.models = (this.models).map(function (model) {
        if (model instanceof BaseModel) {
          return model
        }
        else {
          return new BaseModel(model)
        }
      })
    }

    return BaseCollection
  })()

  return BaseCollection
})

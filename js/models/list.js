'use strict';
// List Model

const List = (function list() {
  var counter = 0
  return class {
    constructor(title) {
      this.id = counter++
      this.title = title
      this.tasks = []
      Store.lists.push(this)
    }

    static find(id){
      return Store.lists.filter((object) => object.id === parseInt(id))[0]
    }
  }
})()

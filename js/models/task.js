'use strict';
// Task Model

const Task = (function task() {
  var counter = 0
  return class Task {
    constructor(description, priority, list) {
      this.id = counter++
      this.description = description
      this.priority = priority
      this.list = list
      // debugger
      list.tasks.push(this)
      Store.tasks.push(this)
    }
  }
})()

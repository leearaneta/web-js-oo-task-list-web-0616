// Initialize

const Store = {lists: [], tasks: []}

function addList() {
  $('#add_list').submit((event) => {
    event.preventDefault()
    listsController()
  })
}

function addTask() {
  $('#add_task').submit((event) => {
    event.preventDefault()
    tasksController()
  })
}

function destroyList() {
  $(document).on('click', '.destroy-list', function() {
    debugger
    event.preventDefault()
    $(this).parent().parent().remove()
    var list_id = $(this).data('list')
    var list = List.find(list_id)
    var list_index = Store.lists.indexOf(list)
    Store.lists.splice(list_index, 1)
    $(`option[data-newlist = ${list_id}]`).remove()
  })
}

$(document).ready(() => {
  addList()
  addTask()
  destroyList()
})

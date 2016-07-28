'use strict';
// Tasks Controller
function tasksController() {
  var task_desc = $('#task_description')
  var task_prior = $('#task_priority')
  var new_task = new Task(task_desc.val(), task_prior.val(), List.find($("#select_list").val()))
  $(`#list-${new_task.list.id}`).append(`<li data-id="${new_task.id}"><button class="destroy-task">x</button>${new_task.description}, ${new_task.priority}</li>`)
  task_desc.val("")
  task_prior.val("")
}

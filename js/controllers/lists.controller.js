'use strict';
// Lists Controller

function listsController() {
  var list = $('#list_title')
  var new_list = new List(list.val())
  $('#lists').append(`<div class = 'list'><h2><button class = 'destroy-list' data-list = '${new_list.id}'>x</button>${new_list.title}</h2><ul id='list-${new_list.id}' data-id=${new_list.id}></div>`)
  $('#select_list').append(`<option data-newlist = '${new_list.id}' value = '${new_list.id}'>${new_list.title}</option>`)
  list.val("")
}

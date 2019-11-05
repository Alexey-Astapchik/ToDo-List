// add tasks to the todo list
var addForm = document.querySelector('.add');
var list = document.querySelector('.todos');
var incompleteTaskHolder = document.getElementById("incomplete-tasks");  

var generateHtml = todo => {
    var html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <button type="button" class="btn btn-outline-dark checkbox" id="checkbox">
      <i class="fas fa-check-circle"></i>
    </button>
    <span>${todo}</span>
    <button type="button" class="btn btn-outline-dark delete">
    <i class="fas fa-trash"></i>
    </button>
  </li>`;

    list.innerHTML += html;
};

addForm.addEventListener('submit', el => {
    el.preventDefault();
    var todo = addForm.add.value.trim();

    if(todo.length){
        generateHtml(todo);
        addForm.reset(); 
    }
});

// delete tasks
list.addEventListener('click', el => {
    if(el.target.classList.contains('delete')){
         el.target.parentElement.remove();
    }
});


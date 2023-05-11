// TODO LIST
// ? ADD NEW TASK

const addButton = document.querySelector('.push');
addButton.addEventListener('click', function (event) {
  event.preventDefault();
  const inputText = document.querySelector('.newTask input');
  let inputTextValue = inputText.value;
  let inputTextLength = inputTextValue.length;
  if (inputTextLength !== 0)
  {
    document.querySelector('#tasks').innerHTML += `
    <li class="task">
    <button class="completeTask">
          <i class="fa-solid fa-check"></i>
        </button>
      <span class="taskName">
        ${inputTextValue}
      </span>
      <div class="taskBtn">
        <button class="edit">
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="delete">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
    `;
    inputText.value = '';
    edit();
    complete();
    remove();
  } else
  {
    alert('Nezadal jsi žádný úkol. Nejdřív zadej, co chceš stihnout.');
  }
});


// ? EDIT TASK

const edit = () => {
  let editTasks = Array.from(document.querySelectorAll('.edit'));
  editTasks.forEach(function (editTask) {
    editTask.addEventListener('click', function () {
      let task = this.parentNode.parentNode;
      let editButton = task.querySelector('.edit');
      let deleteButton = task.querySelector('.delete');
      let taskName = task.querySelector('.taskName');
      let taskNameValue = taskName ? taskName.textContent : '';
      let inputEdit = document.createElement('input');
      inputEdit.value = taskNameValue;

      if (taskName)
      {
        task.replaceChild(inputEdit, taskName);
      }
      editButton.innerHTML = '<i class="fa-solid fa-check"></i>';
      editButton.addEventListener('click', function () {
        let newName = inputEdit.value;
        let newTaskName = document.createElement('span');
        newTaskName.setAttribute('class', 'taskName');
        newTaskName.textContent = newName;

        if (task.contains(inputEdit))
        {
          task.replaceChild(newTaskName, inputEdit);
          editButton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        } else
        {
          editButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        }
      });
    });
  });
};
edit();

// ? COMPLETED TASK

const complete = () => {
  let completeTask = Array.from(document.querySelectorAll('.completeTask'));
  for (let i = 0; i < completeTask.length; i++)
  {
    completeTask[i].addEventListener('click', function () {
      this.classList.toggle('completed');
    });
  }
};
complete();

// ? DELETE TASK

const remove = () => {
  let deleteTasks = Array.from(document.querySelectorAll('.delete'));
  for (let i = 0; i < deleteTasks.length; i++)
  {
    deleteTasks[i].addEventListener('click', function () {
      this.parentNode.parentNode.remove();
    });
  }
};
remove();
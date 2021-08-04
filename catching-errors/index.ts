import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  id: Number;
  title: String;
  completed: Boolean;
}

const logToDo = (id: Number, title: String, completed: Boolean) => {
  console.log(`
  The todo with id ${id} has a title of ${title} and is ${
    !completed ? 'not' : null
  } completed. 
  `);
};

axios.get(url).then((response) => {
  const toDo = response.data as ToDo;
  const { id, completed, title } = toDo;
  logToDo(id, title, completed);
});

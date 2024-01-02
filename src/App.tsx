import InputTodo from './Components/InputForm/InputTodo';
import './App.css';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './Components/TodoList/TodoList';

function App () : React.ReactElement {
 const [todo, setTodo] = useState<string>('');
 const [todos, setTodos] = useState<Todo[]>([]);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (todo !== '') {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        todo: todo,
        isDone: false
      }
    ]);
    setTodo('');
  }
}

  return (
    <div className="App">
        <h1 className='heading'>AzeemTask</h1>
        <InputTodo todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

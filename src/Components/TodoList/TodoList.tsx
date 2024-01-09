import { Todo } from '../../model'
import SingleTodo from '../SingleTodo/SingleTodo'
import './TodoList.css'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map((singleTodo) => (
            <SingleTodo key={singleTodo.id} todo={singleTodo.todo} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}

export default TodoList
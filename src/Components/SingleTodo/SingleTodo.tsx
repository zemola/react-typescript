import { Todo } from "../../model"
import { AiFillEdit } from 'react-icons/ai'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {
  return (
    <form className='todo-single'>
      <span className='todo-single-text'>{todo.todo}</span>
      <div>
        <span className="icon">
        <AiFillEdit />
        </span>
        <span className="icon"></span>
        <span className="icon"></span>

      </div>
    </form>
  )
}

export default SingleTodo
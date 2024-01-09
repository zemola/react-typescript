import { Todo } from "../../model"
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './SingleTodo.css'

type Props = {
  todo: string,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = (props) => {
  return (
    <form className='todo-single'>
      <span className='todo-single-text'>{props.todo}</span>
      <div>
        <span className="icon">
        <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
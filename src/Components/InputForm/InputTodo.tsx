import { useRef } from "react";
import "./InputTodo.css";


interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}



function InputTodo({ todo, setTodo, handleSubmit }: Props): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="form-container" onSubmit={(e)=> {
        handleSubmit(e);
        inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        type="text" 
        placeholder="Add todo..." 
        className="input-text" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTodo(
            e.target.value
          );
        }
      }
      />
      <button className="input-submit">Go</button>
    </form>
  );
}

export default InputTodo;

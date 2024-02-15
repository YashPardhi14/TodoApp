import { Todo } from '../../modal/TodosModal'
import './style.css'
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import React from 'react'
type Props={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;

}
const singleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  return (
    <form className='todos__single'>
<span className='todos__single--text'>{todo.todo}</span>
<div>
    <span className='icon'><AiFillEdit /></span>
    <span className='icon'><MdDelete /></span>
    <span className='icon'><MdOutlineDownloadDone /></span>
</div>
    </form>
    
    )
}

export default singleTodo;
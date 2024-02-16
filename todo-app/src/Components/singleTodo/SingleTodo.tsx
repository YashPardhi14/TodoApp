import { Todo } from '../../modal/TodosModal'
import './style.css'
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import React, { useRef, useState,useEffect } from 'react'
type Props={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;

}
const singleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [edit, setEdit] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputRef = useRef<HTMLInputElement>(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      
        inputRef.current?.focus();
    
    
    }, [edit])
    
    const handleDone=(id:number)=>{
        setTodos(todos.map((todo)=>
        todo.id===id?{...todo,isDone:!todo.isDone}:todo)
        )
    }
    
    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id !==id))
    }

    const handleEdit=(e:React.FormEvent,id:number)=>{
e.preventDefault();

setTodos(todos.map((todo)=>(todo.id===id)?{...todo,todo:editTodo}:todo))
setEdit(false);
    }



  return (
    <form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>

{edit?(
<input ref={inputRef} type="text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="todos__single--text"/>
):(
    todo.isDone ? 
    (
                <s className="todos__single--text">{todo.todo}</s>
              ) : 
              (
                <span className="todos__single--text">{todo.todo}</span>
              )
)
}

{/* {
todo.isDone ? 
(
            <s className="todos__single--text">{todo.todo}</s>
          ) : 
          (
            <span className="todos__single--text">{todo.todo}</span>
          )
  } */}


<div>
    <span className='icon' onClick={()=>{
        if(!edit && !todo.isDone){
setEdit(!edit);
    }}}><AiFillEdit /></span>
    <span className='icon' onClick={()=>handleDelete(todo.id)}><MdDelete /></span>
    <span className='icon' onClick={()=>handleDone(todo.id)}><MdOutlineDownloadDone /></span>
</div>
    </form>
    
    )
}

export default singleTodo;
import React, { useRef } from 'react'
import './style.css'

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}



const Inputfield:React.FC<Props> = ({todo,setTodo,handleAdd}) => {


  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
       <form className='input' onSubmit={(e)=>{handleAdd(e)
      inputRef.current?.blur()
      
      }}>
        <input type='text' 
        ref={inputRef}
        className='input__box' 
        placeholder='Enter a task' 
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)}/>
        
        <button type='submit' 
        className='input_submit'>
          Go
</button>        
        </form>

    </div>
  )
}

export default Inputfield
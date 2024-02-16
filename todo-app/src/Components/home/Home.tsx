import React, { useState } from 'react'
import { Todo } from '../../modal/TodosModal';
import Inputfield from '../inputField/Inputfield';
import './style.css'
import TodoList from '../toDoList/TodoList';




const Home:React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, settodos] = useState<Todo[]>([])
  

    const handleAdd=(e:React.FormEvent)=>{
e.preventDefault()

if(todo){
  settodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
  setTodo('')

}
    }

 let date:Date=new Date();
  return (
    <div className="Home">
    <span className='heading'>To..Do.. App</span>
    <div className='date_section'>
      <h2><u>Date:{date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()}</u></h2>
    </div>
    <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
<TodoList todos={todos} setTodos={settodos}/>
    </div>
  )
}

export default Home
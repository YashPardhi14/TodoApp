import React from 'react'
import './style.css'

const Inputfield = () => {
  return (
    <div>
       <form className='input'>
        <input type='text' className='input__box' placeholder='Enter a task'/>
        
        <button type='submit' className='input_submit'>Go
</button>        
        </form>

    </div>
  )
}

export default Inputfield
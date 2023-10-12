import React from 'react'

const TodoList = (props) => {
  return (
    <div>
        
        
      <li className='todoList'>
      {props.item}
        <span className='icon'><i class="fa-solid fa-trash-can "
         onClick={e=>{
          props.deleteItem(props.index)}}></i></span>
      </li>
    </div>
  )
}

export default TodoList;

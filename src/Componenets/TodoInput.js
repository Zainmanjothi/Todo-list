import React, {useState} from 'react'

const TodoInput = (props) => {
    const [inputText , setInputText] = useState("")
  return (
    <div>
        <input type='text' className='input-box' value={inputText} placeholder='Enter your todo'onChange={e=>{
        setInputText(e.target.value)}}
        />




 
        <button onClick={()=>{props.addList(inputText) 
        setInputText("")}}
       className='btn'>+</button>

      
    </div>
    
  )
  
}

export default TodoInput;


import { useState } from 'react';
import './App.css';
import TodoInput from './Componenets/TodoInput';
import TodoList from './Componenets/TodoList';

function App() {
  const [listTodo , setListTodo] = useState([])
  let addList = (inputText)=>{
    if(inputText !== ""){
      setListTodo([...listTodo , inputText])
    }
    
  } 
  const deleteListItem = (key)=>{
    let newListItem = [...listTodo]
    newListItem.splice(key ,1)
    setListTodo([...newListItem])
  }
  // function deleteAllItems() {
  //   const todoListItem = document.getElementById('todoList');
  //   while (todoListItem.firstChild) {
  //       todoListItem.removeChild(todoListItem.firstChild);
  //   }
  //   const deleteButton = document.getElementById('delete-button');
  //       deleteButton.addEventListener('click', deleteAllItems);
  
  return (
    <>
    <div className='main-container'>
      <div className='centre-container'> 




      <TodoInput addList={addList} />
      <h1>TODO</h1>
        <hr/>
        {/* <button className='delete-button'>Delete All</button> */}
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
        
      })}

      </div>

    </div>


    </>
    );
}

export default App;

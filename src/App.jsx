import React,{ useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let globalId=0;

function App() {

  const [task,setTask] = useState("");

  const [todos, setTodos] = useState([]);

  function createTodo(e){
    //console.log();
    e.preventDefault();
    //console.log(e)
    if(e.target.firstChild.value!=''){
      setTodos(oldTodo=> {
      setTask('')
      //console.log(task);
      return[...oldTodo,{ todo: task, id: globalId++, isCompleted: false}]
    })}
  }

  function deleteTodo(itemId,itemIsCompleted){

    setTodos(oldTodo =>oldTodo.filter(item => item.id!=itemId))
  }

  function isCompleted(e,itemId){
    setTodos(oldTodo => {
      oldTodo.forEach(item=>{
        if(item.id==itemId){
          if(e==true){
            item.isCompleted=true;
          }
          else{
            item.isCompleted=false;
          }
          console.log(item.todo,item.id,item.isCompleted)
        }
      })
      return oldTodo
    }
      )
  }


  // function checkForEnterKey(e){
  //   if(e.keyCode===13){
  //     createTodo();
  //   }
  // }

  return (
    <div className='container'>
      <h1>Things To Do</h1>
      <form onSubmit={(e)=>createTodo(e)}>
        <input className="add" type='text' value={task} onChange={e =>{
          setTask(e.target.value)
        }}/>
        <button className="addItem" type="submit">Add items</button>
        <ul>
          {todos.map((item,index)=>{
            return <div className='lists' key={item.id}>
                    <li>
                      <input className="check" onChange={(e)=>isCompleted(e.target.checked,item.id)} type="checkbox"/>
                      {item.todo}
                      <button className='delete' onClick={()=>deleteTodo(item.id,item.isCompleted)}>
                        Delete
                      </button>
                    </li>
                  </div>
          })}
        </ul>
      </form>
    </div>
  )
}

export default App

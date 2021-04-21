import './App.css';
import {AddTodo, TodoList} from './TodoList';



import  React  from 'react';

function App() {
    const [todos,setTodos]= React.useState([
        {id:1,text:"wash dishes",done:false},
        {id:2,text:"studying",done:false},
        {id:3,text:"play games",done:true}

    ])

  return (
    <div className="App">


        <h2>
            Todo List
        </h2>

      <TodoList todos={todos } setTodos={setTodos} />

      <AddTodo setTodos={setTodos}/>

    </div>
  )
}

export default App;

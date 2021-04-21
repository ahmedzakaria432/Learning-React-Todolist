
import  React  from 'react';

export function TodoList({todos,setTodos})
{

    function handleToggleTodo(todo)
    {
        const updatedTodos=todos.map(t=>
            t.id === todo.id
        ? {
            ...t,

            done: !t.done
          }
        : t
            );


     setTodos(updatedTodos);

    }
    function handleDeleteTodo(todo)
    {
       let confirmed= window.confirm("Are you sure to delete this?");
       console.log(todo.id)
       console.log(todos)
      if (confirmed) {
          todos=todos.filter(td=>td.id!==todo.id);

      }
      console.log(todos)
      setTodos(todos);

    }
    if (todos.length===0) {
        return <p>no todos left !!</p>
    }
    return(
        <ul>
          {

              todos.map(todo=>
                <li  onClick={()=>handleToggleTodo(todo)}
                style={{textDecoration:todo.done?"line-through":""}}
                 key={todo.id}>{todo.text}<span style={{fontWeight:'bold'
                 ,color:'red',marginLeft:10,textDecoration:'none'}}
                 role="button" onClick={()=>handleDeleteTodo(todo)}>
                     X
                     </span></li>
                )
          }
        </ul>
    );
};

export function AddTodo({setTodos})
{
    const inputRef= React.useRef();
    function handleAddTodo(event)
    {

        event.preventDefault();


        const text=event.target.elements.addtodo.value;
        const todo={id:Math.random()*100,text,done:false};
       setTodos(prevState=>prevState.concat(todo));
        inputRef.current.value="";


    }
    return(
<form onSubmit={handleAddTodo}>

    <input placeholder="Add Todo" name="addtodo" ref={inputRef} />
    <button type="submit"> submit</button>
</form>)
}

import { useState } from 'react';
import './App.css';

let id = 0;

function App() {
  const styleFont = {color: "#fff", fontSize: "23px"}
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  return (
    <div className='App'>
      <label htmlFor="todo" style={styleFont}>TODO APP</label>
      <input type='t//ext' id='todo' placeholder='Please Write Some Notes' value={todo} onChange={(e) => {
        setTodo(e.target.value);
      }} />
      <button className='todoButton' onClick={() => {
        setTodos([...todos, {
          id: id++,
          name: todo,
          isComplated: false
        }]);
      }}>Save</button>
      <ul>
        {todos.map(todo => {
          return (
            <>
              <div className='todoside'>
                <li className={todo.isComplated ? 'completed':'not'} key={todo.id}>{todo.name}</li>
                <div className='btnside'>
                  <button className='todoDelete' id={todo.id} onClick={
                    () => {
                      setTodos(todos.filter(a =>
                        a.id !== todo.id
                      ))
                      console.log(todos);
                    }
                  }>Delete</button>
                  <button className='todoComplete' id={todo.id} onClick={() =>
                    setTodos(todos.map(todolar => {
                      if(todolar.id == todo.id ){
                        return {...todolar, isComplated: !todolar.isComplated }
                      } else{
                        return todolar
                      }
                    }))
                  }>Complete</button>
                </div>
              </div>
            </>
          )
        })}
      </ul>
      <div className='footer'>
        <h2>This project was made by <a href='https://www.instagram.com/efecanacikgozz.js/'>MasterHexOnDuty</a> </h2>
      </div>
    </div>
  );
}

export default App;

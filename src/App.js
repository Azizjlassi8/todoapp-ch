import React from 'react'
import './App.css';
import AddTask from './Component/AddTask/AddTask';
import TodoList from './Component/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <AddTask/>
      <TodoList/>
    </div>
  );
}

export default App;

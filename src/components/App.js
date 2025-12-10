import React, { useState } from 'react';
import TodoList from './TodoList';
import '../styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), text: task }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='app'>
      <h1>To-Do List</h1>
      <TodoList addTodo={addTodo} todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
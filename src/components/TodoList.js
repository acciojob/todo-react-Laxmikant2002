import React, { use, useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ addTodo, todos, deleteTodo }) {
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <div>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter a new task'
            />
            <button onClick={handleAdd}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
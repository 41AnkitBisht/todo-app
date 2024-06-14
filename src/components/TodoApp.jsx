import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [editTodo, setEditTodo] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'incomplete'

  // Save todos to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, completed: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (index, updatedTodo) => {
    setTodos(todos.map((todo, i) => (i === index ? updatedTodo : todo)));
  };

  const toggleCompletion = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo} setEditTodo={setEditTodo} />
      <div className="mb-4">
        <button onClick={() => setFilter('all')} className="bg-blue-500 text-white p-2 mr-2">
          All
        </button>
        <button onClick={() => setFilter('completed')} className="bg-green-500 text-white p-2 mr-2">
          Completed
        </button>
        <button onClick={() => setFilter('incomplete')} className="bg-yellow-500 text-white p-2">
          Incomplete
        </button>
      </div>
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} setEditTodo={setEditTodo} toggleCompletion={toggleCompletion} />
    </div>
  );
};

export default TodoApp;

import React from 'react';

const TodoItem = ({ todo, index, deleteTodo, setEditTodo, toggleCompletion }) => {
  return (
    <li className="border p-2 mb-2 flex justify-between items-center">
      <div>
        <h3 className={`font-bold ${todo.completed ? 'line-through' : ''}`}>{todo.title}</h3>
        <p className={`${todo.completed ? 'line-through' : ''}`}>{todo.description}</p>
      </div>
      <div>
        <button onClick={() => toggleCompletion(index)} className="bg-green-500 text-white p-1 mr-2">
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => setEditTodo({ ...todo, index })} className="bg-yellow-500 text-white p-1 mr-2">
          Edit
        </button>
        <button onClick={() => deleteTodo(index)} className="bg-red-500 text-white p-1">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

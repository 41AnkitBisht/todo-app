import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, updateTodo, setEditTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
      setError('');
    } else {
      setTitle('');
      setDescription('');
      setError('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError('Both title and description are required.');
      return;
    }
    if (editTodo) {
      updateTodo(editTodo.index, { ...editTodo, title, description });
      setEditTodo(null);
    } else {
      addTodo({ title, description });
    }
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border p-2 mb-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        {editTodo ? 'Update' : 'Add'} Task
      </button>
    </form>
  );
};

export default TodoForm;

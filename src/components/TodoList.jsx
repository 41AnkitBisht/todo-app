import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, setEditTodo, toggleCompletion }) => {
  return (
    <ul className="list-none p-0">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          setEditTodo={setEditTodo}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ul>
  );
};

export default TodoList;

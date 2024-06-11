import React from 'react';

const ToDo = ({ todo, index, completeToDo, removeToDo }) => {
  return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>Remove</button>
      </div>
    </div>
  );
};

export default ToDo;

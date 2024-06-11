import React, { useState } from 'react';

const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add To-Do"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ToDoForm;

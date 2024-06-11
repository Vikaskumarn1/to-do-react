import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {

        const updatedTodos = [...todos];
        updatedTodos[editIndex] = editValue;
        setTodos(updatedTodos);
        setEditIndex(null);
        setEditValue('');
      } else {

        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  return (
    <div class = "todo">
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button class="Btn" onClick={handleAddTodo}>{editIndex !== null ? 'Save Edit' : 'Add Todo'}</button>
      <ul class="list">
        {todos.map((todo, index) => (
          <li key={index}>
            {index === editIndex ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              todo
            )}
            <button class="Btn" onClick={() => handleDeleteTodo(index)}>Delete</button>
            {index !== editIndex && (
              <button class="Btn" onClick={() => handleEditTodo(index)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
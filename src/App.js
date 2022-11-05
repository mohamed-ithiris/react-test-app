// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { TodoBox } from './components/TodoBox';

function App() {
  const [todos, setTodos] = useState(["complete project", "do work"]);
  return (
    <div className="App">
      <TodoBox todoValue={todos} />
    </div>
  );
}

export default App;

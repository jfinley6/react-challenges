import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: "1", title: "Walk the Dog", completed: false },
    { id: "2", title: "Make Dinner", completed: false },
  ]);

  const notCompletedTodos = todos.filter((todo) => todo.completed === false);
  const completedTodos = todos.filter((todo) => todo.completed === true);

  const handleCheckBox = (todo, isCompleted) => {
    const updatedData = { completed: isCompleted };
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, ...updatedData } : item
    );
    setTodos([...updatedTodos]);
  };

  const handleSubmit = () => {
    if (text.trim().length > 0) {
      const newTodo = {
        id: uuidv4(),
        title: text,
        completed: false,
      };
      setText("");
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "12px" }}>
        <div style={{ fontWeight: "bold" }}>Todo</div>
        {notCompletedTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleCheckBox={handleCheckBox}
            isComplete={true}
          />
        ))}
        {notCompletedTodos.length === 0 &&
          "Nice work, you've completed all todos!"}
      </div>
      <div style={{ marginBottom: "12px" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ marginRight: "8px" }}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <div style={{ fontWeight: "bold" }}>Completed</div>
        {completedTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleCheckBox={handleCheckBox}
            isComplete={false}
          />
        ))}
        {completedTodos.length === 0 && "No completed todos"}
      </div>
    </div>
  );
}

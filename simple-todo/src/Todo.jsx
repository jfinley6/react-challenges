export function Todo({ todo, handleCheckBox, isComplete }) {
  console.log(todo)
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheckBox(todo, isComplete)}
      />
      {todo.completed === true ? <s>{todo.title}</s> : todo.title}
    </div>
  );
}

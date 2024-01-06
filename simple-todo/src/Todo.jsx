export function Todo({ todo, handleCheckBox, isComplete }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheckBox(todo, isComplete)}
      />
      {todo.complete === true ? <s>todo.title</s> : todo.title}
    </div>
  );
}

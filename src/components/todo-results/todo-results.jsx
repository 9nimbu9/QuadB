import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    const completedTasks = todos.filter((todo) => todo.checked);
    return completedTasks.length;
  };

  return (
    <div className="todo-results">
      Done: {calculateChecked()}
    </div>
  );
};

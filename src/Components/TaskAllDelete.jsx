import React from "react";

function TaskAllDelete({setTask}) {
  const clearAll = () => {
    setTask([]);
  };
  return (
    <div className="clear-btn">
      <button onClick={clearAll}>Clear</button>
    </div>
  );
}

export default TaskAllDelete;

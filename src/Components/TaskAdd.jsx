import React from "react";

function TaskAdd({ setTask, task,setCategory,category}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value == false) {
      return false;
    } else {
      setTask(
        task.concat({
          id: Math.random(),
          title: e.target[0].value,
          completed: false,
          category: category,
        }),
      );
    }
    e.target[0].value = "";
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Task" />
      <select className="category-section" onChange={handleCategory}>
        <option value="study">Study</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskAdd;

import React, { useState } from "react";
import Filter from "./Components/TaskFiltered";
import Category from "./Components/Category";
import TaskAdd from "./Components/TaskAdd";
import TaskAllDelete from "./Components/TaskAllDelete";
import SingleTask from "./Components/SingleTask";

function Apps() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Task 1",
      completed: true,
      category: "study",
    },
    {
      id: 2,
      title: "Task 2",
      completed: false,
      category: "work",
    },
  ]);
  const [category, setCategory] = useState("study");
  const [editInput, setEditInput] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [taskFilter, setTaskFilter] = useState("all");
  const [newValue, setNewValue] = useState(task);
  const [categoryArr, setCategoryArr] = useState("all");

  const handleCheck = (id) => {
    setTask(
      task.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    );
  };

  const handleRemove = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  let filteredArray = task.filter((item) => {
    if (taskFilter === "completed") {
      if (item.completed === true) {
        return true;
      }
    } else if (taskFilter === "inprogress") {
      if (item.completed === false) {
        return true;
      }
    } else if (taskFilter === "all") {
      return true;
    }
  });

  let categoryArray = filteredArray.filter((item) => {
    if(categoryArr == "study"){
      if(item.category == "study"){
        return true
      }
    } else if(categoryArr == "work"){
      if(item.category == "work"){
        return true
      }
    } else if(categoryArr == "personal"){
      if(item.category == "personal"){
        return true
      }
    } else if(categoryArr == "all"){
      return true
    }
  });

  const handleFilter = (e) => {
    setTaskFilter(e.target.value);
  };

  const handleCategory = (e) => {
    setCategoryArr(e.target.value);
  };

  return (
    <div className="container">
      <div className="app">
        <div className="task_app">
          <div className="tasks">
            <div className="logo">
              <h1>Todo React JS</h1>
            </div>
            <TaskAdd
              setTask={setTask}
              task={task}
              setCategory={setCategory}
              category={category}
            />
          </div>
          <div className="filter-category">
            <Filter handleFilter={handleFilter} />
            <Category handleCategory={handleCategory} />
          </div>
          <div className="task-add">
            {categoryArray.map((item) => (
              <div key={item.id}>
                <SingleTask
                  item={item}
                  handleCheck={handleCheck}
                  handleRemove={handleRemove}
                  setTask={setTask}
                />
              </div>
            ))}

            <TaskAllDelete setTask={setTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apps;

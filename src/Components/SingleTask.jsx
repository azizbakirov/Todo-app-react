import React, { useState } from "react";

function SingleTask({ item, handleCheck, handleRemove,setTask }) {
  const [iconShow, setIconShow] = useState(false);
  const [value, setValue] = useState(item.title);
  const handleEdit = (id) => {
    setIconShow(true);
  };
  const saveTask = () => {
    setIconShow(false);
    setTask(old => old.map(task =>{
      if(item.id == task.id){
        return {
          id: item.id,
          title: value,
          completed: item.completed,
          category: item.category,
        };
      } else{
        return task
      }
    }))
  };
  const cancelTask = () => {
    setIconShow(false);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="add">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheck(item.id)}
      />
      <input
        readOnly={iconShow ? false : true}
        className="add-value"
        value={value}
        type="text"
        onChange={handleChange}
      />
      <div className="icon">
        <div className="categorys">
          <p>{item.category}</p>
        </div>
        <div className="task-icon">
          {iconShow ? (
            <>
              <div className="save" onClick={saveTask}>
                <i className="fa-solid fa-floppy-disk"></i>
              </div>
              <div className="cancel" onClick={cancelTask}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </>
          ) : (
            <>
              <div className="edit" onClick={() => handleEdit(item.id)}>
                <i className="fa-solid fa-pen"></i>
              </div>
              <div className="remove" onClick={() => handleRemove(item.id)}>
                <i className="fa-solid fa-trash"></i>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleTask;

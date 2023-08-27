import React from 'react'

function TaskFiltered({ handleFilter }) {
  return (
    <div className="filter">
      <select className="filter-section" onChange={handleFilter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="inprogress">In Progress</option>
      </select>
    </div>
  );
}

export default TaskFiltered
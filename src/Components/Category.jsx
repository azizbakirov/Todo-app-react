import React from "react";

function Category({ handleCategory }) {
  return (
    <div className="category">
      <select className="category" onChange={handleCategory}>
        <option value="all">All</option>
        <option value="study">Study</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
    </div>
  );
}

export default Category;

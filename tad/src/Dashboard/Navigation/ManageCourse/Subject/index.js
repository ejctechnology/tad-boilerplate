import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const Subject = (props) => {
  function handleClick() {}
  return (
    <div>
      <h1>{props.mySubject}</h1>
      <p>{props.course}</p>
      <p>{props.level}</p>
      <button on onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Subject;

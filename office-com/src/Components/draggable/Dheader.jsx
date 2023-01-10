import React from "react";
import { AddTask } from "./AddTask";

export const Dheader = ({ handleSubmit }) => {
  return (
    <div className="header">
      <button onClick={handleSubmit}>Add Task</button>
      <p>Planning</p>
      <p>In Progress</p>
      <p>Done</p>
      <AddTask />
    </div>
  );
};

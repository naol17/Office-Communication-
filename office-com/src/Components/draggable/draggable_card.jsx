import React, { useState } from "react";
import Draggable from "react-draggable";

export const Draggable_Card = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const trackPos = (data) => {
  //   setPosition({ x: data.x, y: data.y });
  // };

  const [tasks, SetTasks] = useState([]);
  const [additems, SetAdditems] = useState(false);

  const handleSubmit = () => {
    SetAdditems(!additems);
  };

  const addTask = (task) => {
    SetTasks(task);
  };

  return (
    <div>
      {/* <Draggable onDrag={(e, data) => trackPos(data)}>
        <div className="box">
          <div>Move me around!</div>
          <div>
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </div>
        </div>
      </Draggable> */}
    </div>
  );
};

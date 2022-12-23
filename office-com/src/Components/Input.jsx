import React from "react";
import { GrAttachment } from "react-icons/gr";
import { BsFillImageFill } from "react-icons/bs";

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type message..." />
      <div className="send">
        <GrAttachment style={{ cursor: "pointer" }} />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <BsFillImageFill style={{ cursor: "pointer" }} />
        </label>
        <button>send</button>
      </div>
    </div>
  );
};

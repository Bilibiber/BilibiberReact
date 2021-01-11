import React from "react";

function Parent(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.eventHandler("Hi");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Parent;

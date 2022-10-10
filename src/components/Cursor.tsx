import React from "react";

const Cursor = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "20px",
        height: "20px",
        background: "rgba(100, 100, 100, 0.5)",
        color: "white",
        fontWeight: "bolder",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      +
    </div>
  );
};

export default Cursor;

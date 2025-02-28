import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("black");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>Color Picker</h2>
        <div
          style={{
            height: "300px",
            width: "200px",
            border: "1px solid black",
            borderRadius: "3px",
            backgroundColor: color,
          }}
        ></div>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ColorPicker;

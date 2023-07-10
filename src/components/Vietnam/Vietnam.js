import React from "react";

const Vietnam = () => (
  <div style={{ height: "200px", position: "relative" }}>
    <div
      style={{
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "40%",
        "-ms-transform": "translateY(-50%)",
        transform: "translateY(-50%)",
      }}
    >
      <button
        style={{ textAlign: "center" }}
        onClick={() => {
          window.location.href = "https://www.youtube.com/watch?v=DenlS7VdATk";
        }}
      >
        click here for itinerary
      </button>
    </div>
  </div>
);
export default Vietnam;

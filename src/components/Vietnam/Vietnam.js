import React from "react";

const Vietnam = () => (
  <div style={{ height: "200px", position: "relative" }}>
    <div
      style={{
        margin: 0,
        position: "absolute",
        top: "200%",

        "-ms-transform": "translateY(-50%)",
        transform: "translateY(-50%)",
      }}
    >
      {/* <button
        style={{ textAlign: "center" }}
        onClick={() => {
          window.location.href = "https://www.youtube.com/watch?v=DenlS7VdATk";
        }}
      >
        click here for itinerary
      </button> */}
      <iframe
        width="935"
        height="526"
        src="https://www.youtube.com/embed/DenlS7VdATk?autoplay=1"
        title="Yeh Koi Randikhana Hai Meme Template"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
);
export default Vietnam;

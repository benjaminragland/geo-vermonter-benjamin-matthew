import React from "react";

function EastButton(props) {
  const moveEast = () => {
    props.setLongitude((prevLongitude) => prevLongitude + 0.002);
    props.setScore((prevScore) => prevScore - 1);
  };

  return (
    <button onClick={moveEast}>
      East <i className="arrow" id="east" />
    </button>
  );
}

export default EastButton;
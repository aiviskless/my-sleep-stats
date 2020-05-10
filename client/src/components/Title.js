import React from "react";
import moonImg from "../assets/images/moon.svg";

export const Title = () => {
  return (
    <div className="Title top">
      <img src={moonImg} style={{ width: 45, marginRight: 10 }} alt="Logo" />
      <h1 style={{ fontSize: 34 }}>My Sleep Stats</h1>
    </div>
  );
};

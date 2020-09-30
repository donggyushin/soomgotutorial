import { Link } from "react-router-dom";
import React from "react";

const NavigationComponent = () => (
  <div
    style={{ width: "100%", height: 50, display: "flex", alignItems: "center" }}
  >
    <Link to={"/a"}>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        A
      </div>
    </Link>
    <Link to={"/b"}>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        B
      </div>
    </Link>
  </div>
);

export default NavigationComponent;

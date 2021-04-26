import React from "react";
import "./style.css";
import { Typography, Divider } from "@material-ui/core";

import CoreGreen from "./components/core-green.js";
import CoreBlue from "./components/core-blue.js";

export default function App() {
  return (
    <>
      <Typography gutterBottom>Welcome To Grooming Picker!</Typography>
      {/* <CoreGreen /> */}
      <Divider
        style={{ marginTop: "10px", marginBottom: "10px" }}
        orientation="horizontal"
      />
      {/* <CoreBlue /> */}
    </>
  );
}

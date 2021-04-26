import React from "react";
import { TeamList } from "./team-list.js";
import { coreBlue } from "../data/core-green.js";

export default function CoreBlue() {
  return <TeamList teamName={"Blue"} data={coreBlue} />;
}

import React from "react";
import { TeamList } from "./team-list.js";
import { coreBlue } from "../data/core-blue.js";

export const CoreBlue = () => {
  return <TeamList teamName={"Blue"} data={coreBlue} />;
};

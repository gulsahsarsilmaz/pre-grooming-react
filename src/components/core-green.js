import React from "react";
import { TeamList } from "./team-list.js";
import { coreGreen } from "../data/core-green.js";

export const CoreGreen = () => {
  return <TeamList teamName={"Green"} data={coreGreen} />;
};

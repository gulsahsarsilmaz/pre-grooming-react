import React, { useState } from "react";
import CheckBox from "./checkbox.js";

import { Typography, Button } from "@material-ui/core";

export const TeamList = props => {
  const [data, setData] = useState(props.data);

  const [filteredData, setfilteredData] = useState([]);

  const handlePickMembers = () => {
    const selected = data.users.filter(user => user.isChecked);
    pickMembers(selected);
  };

  const pickMembers = previousMembers => {
    const unselectedMembers = data.users.filter(
      ({ value: id1 }) => !previousMembers.some(({ value: id2 }) => id2 === id1)
    );

    const sortedMembers = unselectedMembers.sort(() => Math.random() - 0.5);
    const pickedMembers = sortedMembers.slice(0, 1);

    setfilteredData(pickedMembers);
  };

  const handleCheckChieldElement = event => {
    let users = data.users;
    users.forEach(user => {
      if (user.value === event.target.value)
        user.isChecked = event.target.checked;
    });
    setData({ users: users });
  };

  return (
    <>
      <Typography
        style={{ color: props.teamName === "Green" ? "green" : "blue" }}
      >
        Please select <strong>{props.teamName}</strong> Grooming members!
      </Typography>
      <ul>
        {data.users.map((user, index) => {
          return (
            <CheckBox
              key={index}
              handleCheckChieldElement={handleCheckChieldElement}
              {...user}
            />
          );
        })}
      </ul>
      <Button variant="contained" color="secondary" onClick={handlePickMembers}>
        Pick Members
      </Button>
      {filteredData.length > 0 && (
        <ul style={{ listStyleType: "none" }}>
          {filteredData.map((data, index) => {
            return (
              <li key={index}>
                <Typography
                  style={{
                    color: props.teamName === "Green" ? "green" : "blue",
                    fontWeight: "bold"
                  }}
                >
                  {data.value} 🎉
                </Typography>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

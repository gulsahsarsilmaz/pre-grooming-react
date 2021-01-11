import React, { useState } from "react";
import "./style.css";
import CheckBox from "./components/checkbox.js";

import { Typography, Button } from "@material-ui/core";

export default function App() {
  const [data, setData] = useState({
    users: [
      { id: 1, value: "Eric", isChecked: false },
      { id: 2, value: "Gulsah", isChecked: true },
      { id: 3, value: "David", isChecked: true },
      { id: 4, value: "Shreya", isChecked: false },
      { id: 5, value: "Jay", isChecked: false },
      { id: 6, value: "Louis", isChecked: false },
      { id: 7, value: "Thomas", isChecked: false },
      { id: 8, value: "Baran", isChecked: false }
    ]
  });

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
    const pickedMembers = sortedMembers.slice(0, 2);

    setfilteredData(pickedMembers);
  };

  const handleCheckChieldElement = event => {
    console.log("I am changed", event.target);
    let users = data.users;
    users.forEach(user => {
      if (user.value === event.target.value)
        user.isChecked = event.target.checked;
    });
    setData({ users: users });
  };

  return (
    <>
      <Typography>Welcome To Pre Grooming!</Typography>
      <Typography>Please select last week's pre-grooming members!</Typography>
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
      <Button variant="contained" color="primary" onClick={handlePickMembers}>
        Pick Members
      </Button>
      {filteredData.length > 0 && (
        <ul>
          {filteredData.map((data, index) => {
            return <li key={index}>{data.value}</li>;
          })}
        </ul>
      )}
    </>
  );
}

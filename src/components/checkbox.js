import React from "react";

import { Checkbox, FormControlLabel } from "@material-ui/core";

export const CheckBox = props => {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.isChecked}
            onChange={props.handleCheckChieldElement}
            inputProps={{ "aria-label": "primary checkbox" }}
            name={props.value}
            value={props.value}
            style={{ color: props.isCurrent ? "#fc03f4" : "black" }}
          />
        }
        label={props.value}
        style={{ color: props.isCurrent ? "#fc03f4" : "black" }}
      />
    </div>
  );
};

export default CheckBox;

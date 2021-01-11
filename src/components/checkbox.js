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
          />
        }
        label={props.value}
      />
    </div>
  );
};

export default CheckBox;

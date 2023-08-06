import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import type { SelectProps } from "@mui/material/Select";
import Select from "@mui/material/Select";
import type { PropsWithChildren } from "react";
import * as React from "react";

interface SelectBoxProps extends Omit<SelectProps, "handleChange" | "value"> {
  value?: string;
  handleChange: (event: any) => void;
  inputLabel: string;
}

export const SelectBox = React.forwardRef(
  (
    {
      children,
      value,
      inputLabel,
      handleChange,
      ...props
    }: PropsWithChildren & SelectBoxProps,
    ref
  ) => {
    return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" size="small">
          {inputLabel}
        </InputLabel>
        <Select
          value={value}
          labelId="demo-simple-select-label"
          label={inputLabel}
          onChange={handleChange}
          {...props}
          size="small"
          ref={ref}
        >
          {children}
        </Select>
      </FormControl>
    );
  }
);

"use client";
import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import React, { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...rest }, ref) => {
    return (
      <TextField
        variant="outlined"
        color="primary"
        size="small"
        inputRef={ref}
        sx={{ width: "100%" }}
        inputProps={{ style: { fontSize: 16 } }}
        InputLabelProps={{ style: { fontSize: 16 } }}
        {...rest}
      />
    );
  }
);

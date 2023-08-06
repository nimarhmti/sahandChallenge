"use client";
import React from "react";
import type { PropsWithChildren } from "react";
import { Box } from "@mui/system";
import HelpIcon from "@mui/icons-material/Help";
import { Typography } from "@mui/material";
import { cardContainer, cardContent } from "./FromWrapperStyle";
interface props {
  title?: string;
  helpNote?: string[] | string;
}
export const FromWrapper: React.FC<props & PropsWithChildren> = ({
  title,
  children,
  helpNote,
}) => {
  const displayNoteMessage = () => {
    return;
  };

  return (
    <Box sx={cardContainer}>
      <Typography variant="h5" sx={cardContent}>
        <span>{title}</span>
        {helpNote ? <HelpIcon /> : null}
      </Typography>
      {children}
    </Box>
  );
};

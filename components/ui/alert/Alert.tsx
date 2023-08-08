import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
interface Props {
  isError: boolean;
  message: string;
  isOpen: boolean;
  handleClose: () => void;
}

export default function BasicAlerts({
  isError,
  message,
  handleClose,
  isOpen,
}: Props) {
  const [state] = React.useState<SnackbarOrigin>({
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal } = state;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={isOpen}
      onClose={handleClose}
      message="I love snacks"
      key={vertical + horizontal}
    >
      <Alert
        onClose={handleClose}
        severity={isError ? "error" : "success"}
        sx={{ width: "100%" }}
      >
        <p
          style={{ marginLeft: "8px", marginRight: "8px", fontSize: "1.1rem" }}
        >
          {message}
        </p>
      </Alert>
    </Snackbar>
  );
}

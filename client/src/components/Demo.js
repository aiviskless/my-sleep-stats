import React from "react";
import { Button, Box } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import demoGif from "../assets/images/demo.gif";

export const Demo = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>View demo</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">My Sleep Stats</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={demoGif} style={{ width: "100%" }} alt="Demo video" />
            <Box mt={2}>
              <h2>Description</h2>
              <p>
                Track your weekly sleeping hours, see sleeping history and
                patterns of your last 7 days!
              </p>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

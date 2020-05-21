import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(3)
  },
  customWidth: {
    padding: 14,
    backgroundColor: "red"
  },
  customArrow: {
    color: "red"
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2)
  }
}));

const TriggersTooltips = props => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const handleTooltipClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Button variant="contained" color="primary">
            Hello World
          </Button>{" "}
        </Grid>
        <br />
        <Tooltip title={props.description}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <br />
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              title={props.description}
              classes={{
                tooltip: classes.customWidth,
                arrow: classes.customArrow
              }}
              arrow
              PopperProps={{
                disablePortal: true
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <Button onClick={handleTooltipOpen}>Arrow</Button>
            </Tooltip>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </>
  );
};
export default TriggersTooltips;

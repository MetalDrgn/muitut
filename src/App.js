import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createMuiTheme, makeStyles } from "@mui/styles";
// import { makeStyles } from "@mui/material/styles";
import React from "react";

const theme = createMuiTheme();
const useStyles = makeStyles( {
  root: {
    background: "linear-gradiant(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <ThemeProvider theme={theme}></ThemeProvider>
  // return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      label="test checkbox"
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonStyled />
        <TextField
          variant="filled"
          color="secondary"
          type="time"
          label="the time"
        />
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<SaveIcon fontSize={"small"} />}
            size="Large"
            // onClick={() => alert("hello")}
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon fontSize={"small"} />}
            size="Large"
            // onClick={() => alert("hello")}
          >
            Disgard
          </Button>
        </ButtonGroup>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;

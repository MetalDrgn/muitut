import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import TriggersTooltips from "./InfoMessageTooltip";
import Button from '@material-ui/core/Button';
import "./style.css";

const App = () => {
  return (
    <div>
      <Hello name={"React"} />
      <p>Start editing to see some magic happen :)</p>
      <TriggersTooltips description={'This is the description that is passed to this React Material-UI component'} />
    </div>
  );
};
export default App;

render(<App />, document.getElementById("root"));

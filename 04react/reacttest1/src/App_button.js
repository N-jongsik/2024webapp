import React from "react";
import Button from "./components/Button";
import "./index.css";

function App() {
  return (
    <div>
      <Button className="btn-primary" test="test">
        click
      </Button>
      <Button className="btn-info">out</Button>
    </div>
  );
}

export default App;

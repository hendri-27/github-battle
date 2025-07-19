import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

/*
  state
  lifecycle
  ui

  --> separation of concerns!!!!
*/

class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

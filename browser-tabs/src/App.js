import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import RoutePaths from "./RoutePaths";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />

          <div className="viewport">
            <RoutePaths />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
